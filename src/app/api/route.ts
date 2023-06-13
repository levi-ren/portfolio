import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { geolocation, ipAddress } from "@vercel/edge";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.fixedWindow(1, "1d"),
});

interface Message {
  name: string;
  From: string;
  Subject: string;
  Body: string;
}

export async function POST(request: NextRequest) {
  const body: Message = await request.json();
  const geo = geolocation(request);
  const ip = ipAddress(request);

  const result = await ratelimit.limit(request.ip || "");

  if (!result.success) {
    return NextResponse.json({ result, ip, geo }, { status: 429 });
  }

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

  await fetch('https://smtpjs.com/v3/smtpjs.aspx?"', {
    method: "POST",
    body: JSON.stringify(form),
  })
    .then(async (e) => {
      if (!e.ok) {
        console.log("error", e);
        throw e;
      }
      return NextResponse.json(
        { message: "Email sent!" },
        {
          headers: {
            "X-RateLimit-Limit": `${result.limit}`,
            "X-RateLimit-Remaining": `${result.remaining}`,
          },
        }
      );
    })
    .catch(console.log);
}
