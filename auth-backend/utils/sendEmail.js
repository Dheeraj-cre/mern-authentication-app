const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
  tls: {
    rejectUnauthorized: false, //  Fix for self-signed certificate
  },
});

const sendEmail = async (email, otp) => {
  await transporter.sendMail({
    from: `"MERN Auth App" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Security Verification – Password Reset OTP",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 24px; background:#f9fafb;">
        <div style="max-width:520px; margin:auto; background:#ffffff; padding:24px; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.05);">

          <h2 style="color:#111827;">Security Verification Required</h2>

          <p style="color:#374151; font-size:14px;">
            We received a request to reset your password. For security reasons,
            we need to verify your identity.
          </p>

          <p style="color:#374151; font-size:14px;">
            Please use the One-Time Password (OTP) below:
          </p>

          <div style="margin:20px 0; text-align:center;">
            <span style="
              display:inline-block;
              padding:12px 24px;
              font-size:22px;
              font-weight:bold;
              color:#dc2626;
              border:1px dashed #dc2626;
              border-radius:6px;
              letter-spacing:2px;
            ">
              ${otp}
            </span>
          </div>

          <p style="color:#374151; font-size:14px;">
             This OTP is valid for <b>10 minutes</b> and can be used only once.
          </p>

          <p style="color:#374151; font-size:14px;">
             Do not share this OTP with anyone for your account’s safety.
          </p>

          <p style="color:#6b7280; font-size:13px;">
            If you did not initiate this request, you can safely ignore this email.
            No changes will be made to your account.
          </p>

          <hr style="margin:20px 0;" />

          <p style="font-size:13px; color:#6b7280;">
            Stay secure,<br />
            <b>Built by Dheeraj Srivastava</b>
          </p>

          <p style="font-size:11px; color:#9ca3af;">
            This is an automated message. Please do not reply to this email.
          </p>

        </div>
      </div>
    `,
  });
};

module.exports = sendEmail;
