import { NextRequest, NextResponse } from "next/server";

interface Message {
  From: string;
  Subject: string;
  Body: string;
}

export async function POST(request: NextRequest) {
  const body: Message = await request.json();
  const form = {
    Host: "smtp.elasticemail.com",
    Username: "arron.levi1@gmail.com",
    Password: "C3F8896C87FB0C5A20337E44857003979F3F",
    From: "arron.levi2@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
    To: "arron.levi1@gmail.com",
    nocache: Math.floor(1e6 * Math.random() + 1),
    Action: "Send",
  };
  console.log(form);
  await fetch('https://smtpjs.com/v3/smtpjs.aspx?"', {
    method: "POST",
    body: JSON.stringify(form),
  })
    .then(async (e) => {
      if (!e.ok) {
        console.log("error", e);
        throw e;
      }

      const ret = await e.text();
      console.log(ret);
      return e;
    })
    .catch(console.log);

  return NextResponse.json({ message: "Email sent!" });
}
