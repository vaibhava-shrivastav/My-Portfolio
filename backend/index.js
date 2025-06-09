const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ Correct CORS setup
app.use(cors());
app.options('*', cors());  // handles preflight OPTIONS request

app.use(express.json());

// ✅ MongoDB model
const Contact = require('./models/Contact');

// ✅ MongoDB connection (guard this to avoid reconnecting on every call in serverless)
if (!mongoose.connection.readyState) {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("✅ MongoDB connected"))
    .catch(err => console.error("❌ MongoDB connection error:", err));
}

// ✅ API route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ message: "Message saved successfully!" });
  } catch (error) {
    console.error("❌ Error saving contact:", error);
    res.status(500).json({ error: "Failed to save message" });
  }
});

// ✅ Export app for Vercel
module.exports = app;
