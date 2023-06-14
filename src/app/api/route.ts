import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

interface Message {
  name: string;
  From: string;
  Subject: string;
  Body: string;
}

export async function POST(request: NextRequest) {
  const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.fixedWindow(1, "1d"),
  });
  const body: Message = await request.json();
  const ip = request.headers.get("x-forwarded-for") || "unknown";

  const form = {
    SecureToken: process.env.EMAIL_TOKEN,
    From: process.env.EMAIL_FROM,
    Subject: body.Subject,
    Body: `
    <p style="margin: 0;">From: ${body.name}</p>
    <p style="margin: 0;">Email: ${body.From}</p>
    <hr/>
    <blockquote style="white-space: pre-wrap; margin: 40px 0;">${body.Body}</blockquote>`,
    To: process.env.EMAIL_TO,
    nocache: Math.floor(1e6 * Math.random() + 1),
    Action: "Send",
  };

  try {
    const ratelimiting = await ratelimit.limit(ip);
    if (!ratelimiting.success) {
      return NextResponse.json(
        { message: "Limit reached" },
        {
          status: 429,
          headers: {
            "X-Rate-Limit": `${ratelimiting.limit}`,
            "X-Rate-Remaining": `${ratelimiting.remaining}`,
            "X-Rate-Reset": `${new Date(
              ratelimiting.reset
            ).toLocaleDateString()}`,
          },
        }
      );
    }

    await fetch('https://smtpjs.com/v3/smtpjs.aspx?"', {
      method: "POST",
      body: JSON.stringify(form),
    }).then(async (e) => {
      if (!e.ok) {
        throw e;
      }
    });

    return NextResponse.json(
      { message: "Email sent!" },
      {
        headers: {
          "X-Rate-Limit": `${ratelimiting.limit}`,
          "X-Rate-Remaining": `${ratelimiting.remaining}`,
          "X-Rate-Reset": `${new Date(
            ratelimiting.reset
          ).toLocaleDateString()}`,
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
