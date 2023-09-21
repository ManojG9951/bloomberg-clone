const nodemailer = require("nodemailer");

export default async (req, res) => {
  const { recipientEmail, message } = req.body;

  // Replace with your email service credentials
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "gundimanoj@gmail.com",
      pass: "ujdcqcostzghxiuk",
    },
  });

  const mailOptions = {
    from: "gundimanoj@gmail.com",
    to: recipientEmail,
    subject: "OTP For Your Bloomberg Registration",
    text: message,
  };

  try {
    // console.log('Sending email...');
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res
      .status(200)
      .json({ message: "Email sent successfully", response: info.response });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "Error sending email", details: error.message });
  }
};
