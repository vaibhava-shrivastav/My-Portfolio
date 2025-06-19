import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please fill all fields.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  // e.g. yourname@gmail.com
      pass: process.env.EMAIL_PASS   // App password from Google
    }
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `New message from ${name}`,
    text: `
You've received a new message from your portfolio contact form:

Name: ${name}
Email: ${email}
Message:
${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: '✅ Message sent successfully!' });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ message: '❌ Failed to send message.' });
  }
}
