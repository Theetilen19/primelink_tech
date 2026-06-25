import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        const fullName = formData.get("fullName") as string;
        const companyName = formData.get("companyName") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const whatsapp = formData.get("whatsapp") as string;
        const service = formData.get("service") as string;
        const budget = formData.get("budget") as string;
        const deadline = formData.get("deadline") as string;
        const description = formData.get("description") as string;
        const file = formData.get("file") as File | null;

        if (!fullName || !email || !phone || !service || !budget || !description) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Prepare attachments
        const attachments: Array<{ filename: string; content: Buffer }> = [];
        if (file && file.size > 0) {
            const bytes = await file.arrayBuffer();
            attachments.push({ filename: file.name, content: Buffer.from(bytes) });
        }

        const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Inter, Arial, sans-serif; color: #0a0a0a; background: #f4f6fa; margin: 0; padding: 20px; }
    .card { background: white; border-radius: 16px; max-width: 600px; margin: 0 auto; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
    .header { background: linear-gradient(135deg, #062B6F 0%, #1E88FF 70%, #12C8E8 100%); padding: 32px; text-align: center; }
    .header h1 { color: white; margin: 0; font-size: 1.5rem; font-weight: 800; }
    .header p { color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 0.95rem; }
    .body { padding: 32px; }
    .section-title { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #1E88FF; margin: 24px 0 12px; }
    .row { display: flex; gap: 8px; margin-bottom: 12px; }
    .label { font-weight: 600; font-size: 0.88rem; color: #374151; min-width: 120px; }
    .value { font-size: 0.88rem; color: #6b7280; }
    .highlight { background: #f0f7ff; border-left: 3px solid #1E88FF; border-radius: 0 8px 8px 0; padding: 16px; font-size: 0.9rem; color: #374151; line-height: 1.7; white-space: pre-wrap; }
    .badge { display: inline-block; background: rgba(30,136,255,0.1); color: #1E88FF; padding: 4px 12px; border-radius: 999px; font-size: 0.8rem; font-weight: 600; }
    .footer { background: #f4f6fa; padding: 20px 32px; text-align: center; font-size: 0.8rem; color: #9ca3af; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>🚀 New Project Request</h1>
      <p>Received via PrimeLink Technologies website</p>
    </div>
    <div class="body">
      <div class="section-title">Client Information</div>
      <div class="row"><span class="label">Full Name:</span><span class="value">${fullName}</span></div>
      <div class="row"><span class="label">Company:</span><span class="value">${companyName || "N/A"}</span></div>
      <div class="row"><span class="label">Email:</span><span class="value"><a href="mailto:${email}" style="color: #1E88FF;">${email}</a></span></div>
      <div class="row"><span class="label">Phone:</span><span class="value">${phone}</span></div>
      <div class="row"><span class="label">WhatsApp:</span><span class="value">${whatsapp || phone}</span></div>

      <div class="section-title">Project Details</div>
      <div class="row"><span class="label">Service:</span><span class="value"><span class="badge">${service}</span></span></div>
      <div class="row"><span class="label">Budget:</span><span class="value">${budget}</span></div>
      <div class="row"><span class="label">Deadline:</span><span class="value">${deadline || "Flexible"}</span></div>

      <div class="section-title">Project Description</div>
      <div class="highlight">${description}</div>

      ${file ? `<div style="margin-top: 20px; font-size: 0.85rem; color: #6b7280;">📎 Attachment: ${file.name}</div>` : ""}
    </div>
    <div class="footer">
      PrimeLink Technologies | [EMAIL_ADDRESS] | +254 729 596 966<br/>
      Connecting Innovation, Empowering Business
    </div>
  </div>
</body>
</html>
    `;

        await resend.emails.send({
            from: "PrimeLink Website <onboarding@resend.dev>",
            to: ["primelink0586@gmail.com"],
            replyTo: email,
            subject: `New Project Request: ${service} — ${fullName}`,
            html: emailHtml,
            attachments,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Email send error:", error);
        return NextResponse.json({ error: "Failed to send email. Please try WhatsApp." }, { status: 500 });
    }
}
