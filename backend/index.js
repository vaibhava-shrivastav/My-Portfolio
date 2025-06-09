const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ Fix CORS to allow frontend origin
app.use(cors({
  origin: 'https://vaibhava-portfolio.vercel.app',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

const Contact = require('./models/Contact');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log("📥 Received contact form:", req.body); 
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ message: "Message saved successfully!" });
  } catch (error) {
    console.error("❌ Failed to save message:", error);
    res.status(500).json({ error: "Failed to save message" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
});
