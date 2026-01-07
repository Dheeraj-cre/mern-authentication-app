const sgMail = require("@sendgrid/mail");

// 🔍 DEBUG: check env variables at runtime
console.log("SENDGRID_API_KEY exists:", !!process.env.SENDGRID_API_KEY);
console.log("SENDGRID_FROM_EMAIL:", process.env.SENDGRID_FROM_EMAIL);

// ❌ Safety check (helps catch silent failures)
if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY is missing");
}

if (!process.env.SENDGRID_FROM_EMAIL) {
  throw new Error("SENDGRID_FROM_EMAIL is missing");
}

// ✅ Set API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (email, otp) => {
  console.log("📧 Preparing email for:", email);

  const msg = {
    to: email,

    // ✅ MUST be string & verified sender
    from: process.env.SENDGRID_FROM_EMAIL,

    subject: "Security Verification – Password Reset OTP",

    html: `
      <h2>Password Reset OTP</h2>
      <p>Your OTP is:</p>
      <h1>${otp}</h1>
      <p>This OTP is valid for 10 minutes.</p>
      <p><b>Built by Dheeraj Srivastava</b></p>
    `,
  };

  console.log("📧 Sending email via SendGrid...");
  await sgMail.send(msg);
  console.log("✅ SendGrid email sent successfully");
};

module.exports = sendEmail;
