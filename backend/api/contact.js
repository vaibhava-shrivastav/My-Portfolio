// api/contact.js

import dbConnect from '../utils/db';
import Contact from '../models/Contact';

export default async function handler(req, res) {
  await dbConnect();

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
      const contact = new Contact({ name, email, message });
      await contact.save();
      return res.status(201).json({ message: 'Message saved successfully!' });
    } catch (error) {
      console.error('❌ Error saving contact:', error);
      return res.status(500).json({ error: 'Failed to save message' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
