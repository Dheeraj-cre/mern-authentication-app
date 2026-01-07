const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (email, otp) => {
  const msg = {
    to: email,

    // Verified sender
    from: `MERN Auth App <${process.env.SENDGRID_FROM_EMAIL}>`,

    subject: "Password Reset Verification Code (OTP)",

    html: `
      <div style="font-family: Arial, sans-serif; background:#f3f4f6; padding:24px;">
        <div style="max-width:520px; margin:auto; background:#ffffff; padding:24px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.05);">

          <h2 style="color:#111827; margin-bottom:8px;">
            Password Reset Request
          </h2>

          <p style="color:#374151; font-size:14px;">
            Hello,
          </p>

          <p style="color:#374151; font-size:14px;">
            We received a request to reset the password for your account.
            Please use the verification code below to continue.
          </p>

          <div style="margin:24px 0; text-align:center;">
            <span style="
              display:inline-block;
              padding:12px 24px;
              font-size:24px;
              font-weight:bold;
              color:#dc2626;
              border:2px dashed #dc2626;
              border-radius:6px;
              letter-spacing:3px;
            ">
              ${otp}
            </span>
          </div>

          <p style="color:#374151; font-size:14px;">
            ⏱ This OTP is valid for <b>10 minutes</b>.  
            For your security, do not share this code with anyone.
          </p>

          <!--  SPAM INFORMATION -->
          <div style="margin-top:16px; padding:12px; background:#fef3c7; border-left:4px solid #f59e0b;">
            <p style="font-size:13px; color:#92400e; margin:0;">
              <b>Didn’t find this email in your inbox?</b><br/>
              Sometimes, first-time security emails may appear in the <b>Spam</b> folder.
              If this happens, please mark the email as <b>“Not Spam”</b> to receive future emails directly in your inbox.
            </p>
          </div>

          <p style="color:#6b7280; font-size:13px; margin-top:16px;">
            If you did not request a password reset, you can safely ignore
            this email. No changes will be made to your account.
          </p>

          <hr style="margin:20px 0;"/>

          <p style="font-size:13px; color:#6b7280;">
            Regards,<br/>
            <b>MERN Auth App Team</b><br/>
            <span style="font-size:12px;">Built by Dheeraj Srivastava</span>
          </p>

          <p style="font-size:11px; color:#9ca3af;">
            This is an automated message. Please do not reply to this email.
          </p>

        </div>
      </div>
    `,
  };

  await sgMail.send(msg);
};

module.exports = sendEmail;
