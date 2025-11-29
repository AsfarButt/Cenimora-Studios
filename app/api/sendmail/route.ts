import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const { name, email, description } = await request.json();

  const user = process.env.USER_NAME;
  const pass = process.env.USER_PASS;

  if (!user || !pass) {
    return NextResponse.json(
      { message: "Email credentials are not set in environment variables." },
      { status: 500 }
    );
  }

  try {
    // Gmail SMTP configuration
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,   
      secure: false,   
      auth: {
        user,
        pass,
      },
    });

    const response = await transport.sendMail({
      from: user,                     // MUST match your Gmail
      to: "iqrarworksatcinemora@gmail.com", // receiver
      subject: `Message from Cenimora Studios: ${name}`,
      text: "This is a test message",          // user's typed email
    });

    console.log("Email sent:", response);

    return NextResponse.json({
      message: "Email sent successfully",
      info: response
    });

  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json({
      message: "Failed to send email",
      error: error instanceof Error ? error.message : error,
    }, { status: 500 });
  }
}
