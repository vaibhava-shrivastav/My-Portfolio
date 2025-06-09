const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ CORS for all origins (or restrict if needed)
app.use(cors());
app.options('*', cors());

app.use(express.json());

// ✅ MongoDB model
const Contact = require('./models/Contact');

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ POST /api/contact
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log("📥 Contact form received:", req.body);
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ message: "Message saved successfully!" });
  } catch (error) {
    console.error("❌ Error saving contact:", error);
    res.status(500).json({ error: "Failed to save message" });
  }
});

// ✅ Export the app (no listen)
module.exports = app;
