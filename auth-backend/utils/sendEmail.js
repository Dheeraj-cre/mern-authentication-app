const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (email, otp) => {
  const msg = {
    to: email,

    // ✅ SAFE & REQUIRED FORMAT
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

  await sgMail.send(msg);
};

module.exports = sendEmail;
