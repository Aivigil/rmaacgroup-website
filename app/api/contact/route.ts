import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, phone, subject, message } = await req.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODESEND_EMAIL,
    subject: `Contact Form Submission: ${subject}`,
    html: `
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; margin: 20px auto; border: 1px solid #ddd; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <tr>
          <td align="center" bgcolor="#0a0a0a" style="padding: 40px 0; color: #ffffff; font-size: 28px; font-weight: bold;">
            RMAAC
          </td>
        </tr>
        <tr>
          <td bgcolor="#ffffff" style="padding: 40px 30px;">
            <h1 style="font-size: 24px; color: #333333; margin-top: 0;">New Contact Form Submission</h1>
            <p style="font-size: 16px; color: #555555;">You have received a new message from your website's contact form.</p>
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 20px;">
              <tr>
                <td width="150" style="font-size: 16px; color: #333333;"><strong>Name:</strong></td>
                <td style="font-size: 16px; color: #555555;">${name}</td>
              </tr>
              <tr>
                <td style="font-size: 16px; color: #333333;"><strong>Email:</strong></td>
                <td style="font-size: 16px; color: #555555;">${email}</td>
              </tr>
              <tr>
                <td style="font-size: 16px; color: #333333;"><strong>Phone:</strong></td>
                <td style="font-size: 16px; color: #555555;">${phone}</td>
              </tr>
              <tr>
                <td style="font-size: 16px; color: #333333;"><strong>Subject:</strong></td>
                <td style="font-size: 16px; color: #555555;">${subject}</td>
              </tr>
            </table>
            <h2 style="font-size: 20px; color: #333333; margin-top: 30px; border-top: 1px solid #eeeeee; padding-top: 20px;">Message</h2>
            <p style="font-size: 16px; color: #555555; line-height: 1.5;">${message}</p>
          </td>
        </tr>
        <tr>
          <td bgcolor="#f4f4f4" style="padding: 20px 30px; text-align: center;">
            <p style="font-size: 14px; color: #888888;">This email was sent from the contact form on your website.</p>
          </td>
        </tr>
      </table>
    </body>
    `,
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { message: "Failed to send email", error: err.message },
      { status: 500 }
    );
  }
} 