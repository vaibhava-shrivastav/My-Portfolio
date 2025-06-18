import dbConnect from '../utils/db';
import Contact from '../models/Contact';

export default async function handler(req, res) {
  try {
    await dbConnect();
    console.log("✅ Connected to database");
  } catch (err) {
    console.error("❌ DB connection failed:", err);
    return res.status(500).json({ error: "Database connection failed" });
  }

  if (req.method === 'OPTIONS') {
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;
      console.log("📨 Received:", { name, email, message });

      if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing fields" });
      }

      const contact = new Contact({ name, email, message });
      await contact.save();
      return res.status(201).json({ message: 'Message saved successfully!' });
    } catch (error) {
      console.error('❌ Error saving contact:', error);
      return res.status(500).json({ error: 'Failed to save message' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
