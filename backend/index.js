const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ Use CORS middleware
app.use(cors({
  origin: 'https://vaibhava-portfolio.vercel.app',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

// ✅ Express JSON body parser
app.use(express.json());

// ✅ Handle preflight requests manually (important for serverless environments)
app.options('/api/contact', (req, res) => {
  res.set({
    'Access-Control-Allow-Origin': 'https://vaibhava-portfolio.vercel.app',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.sendStatus(204); // No Content
});

// ✅ Connect to MongoDB
const Contact = require('./models/Contact');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ POST /api/contact endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log("📥 Received contact form:", req.body); 

    const contact = new Contact({ name, email, message });
    await contact.save();

    // ✅ Include CORS header manually in response
    res.setHeader('Access-Control-Allow-Origin', 'https://vaibhava-portfolio.vercel.app');
    res.status(201).json({ message: "Message saved successfully!" });
  } catch (error) {
    console.error("❌ Failed to save message:", error);
    res.status(500).json({ error: "Failed to save message" });
  }
});

// ✅ Start server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
});
