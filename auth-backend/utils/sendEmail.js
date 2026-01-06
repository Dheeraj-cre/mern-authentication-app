const sgMail = require("@sendgrid/mail");

// Set API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (email, otp) => {
  const msg = {
    to: email,
    from: {
      email: process.env.SENDGRID_FROM_EMAIL,
      name: "MERN Auth App",
    },
    subject: "Security Verification – Password Reset OTP",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 24px; background:#f9fafb;">
        <div style="max-width:520px; margin:auto; background:#ffffff; padding:24px; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.05);">

          <h2 style="color:#111827;">Security Verification Required</h2>

          <p style="color:#374151; font-size:14px;">
            We received a request to reset your password.
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
            This OTP is valid for <b>10 minutes</b>.
          </p>

          <hr />

          <p style="font-size:13px; color:#6b7280;">
            Built by <b>Dheeraj Srivastava</b>
          </p>

        </div>
      </div>
    `,
  };

  await sgMail.send(msg);
};

module.exports = sendEmail;
