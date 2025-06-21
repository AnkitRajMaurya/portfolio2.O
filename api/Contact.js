import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  
  const { name, email, message } = req.body;
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    });

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: "Failed to send message" });
  }
}