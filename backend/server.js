// ============================================
// SERVER ENTRY POINT - EXPRESS + MONGODB
// ============================================
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// ============================================
// IMPORT MODELS
// ============================================
const Contact = require('./models/Contact');

// ============================================
// APP INITIALIZATION
// ============================================
const app = express();
const PORT = process.env.PORT || 5000;

// ============================================
// MIDDLEWARE - CORS (allows local + deployed frontend)
// ============================================
const allowedOrigins = [
  'http://localhost:5173',
  process.env.FRONTEND_URL, // e.g. https://yourname.netlify.app
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.use(express.json());

// ============================================
// MONGODB CONNECTION
// ============================================
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

// ============================================
// ROUTES
// ============================================

// ---- Health Check ----
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Krishnakumar Portfolio API is running 🚀',
    mongodb: mongoose.connection.readyState === 1 ? 'Connected ✅' : 'Disconnected ❌',
  });
});

// ---- POST /api/contact - Save contact to MongoDB ----
app.post('/api/contact', async (req, res) => {
  try {
    // ---- Extract form data ----
    const { name, email, subject, message } = req.body;

    // ---- Validate required fields ----
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required.',
      });
    }

    // ---- Save to MongoDB ----
    const newContact = await Contact.create({ name, email, subject, message });

    console.log(`📩 New contact from: ${name} <${email}>`);

    res.status(201).json({
      success: true,
      message: 'Message received! I will get back to you soon. 🚀',
      data: {
        id: newContact._id,
        name: newContact.name,
        email: newContact.email,
        createdAt: newContact.createdAt,
      },
    });

  } catch (error) {
    // ---- Mongoose validation error ----
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(e => e.message);
      return res.status(400).json({ success: false, message: messages[0] });
    }
    console.error('❌ Contact save error:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

// ---- GET /api/contacts - View all contacts (admin) ----
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Could not fetch contacts.' });
  }
});

// ---- PATCH /api/contacts/:id/read - Mark as read ----
app.patch('/api/contacts/:id/read', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );
    if (!contact) return res.status(404).json({ success: false, message: 'Contact not found.' });
    res.json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// ============================================
// START SERVER
// ============================================
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📦 MongoDB URI: ${process.env.MONGODB_URI}`);
  });
});
