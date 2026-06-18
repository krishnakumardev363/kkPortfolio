// ============================================
// CONTACT MODEL - MONGODB SCHEMA
// ============================================
const mongoose = require('mongoose');

// ============================================
// CONTACT SCHEMA DEFINITION
// ============================================
const contactSchema = new mongoose.Schema(
  {
    // ---- Name Field ----
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },

    // ---- Email Field ----
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },

    // ---- Subject Field ----
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      trim: true,
      maxlength: [200, 'Subject cannot exceed 200 characters'],
    },

    // ---- Message Field ----
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      maxlength: [2000, 'Message cannot exceed 2000 characters'],
    },

    // ---- Read Status ----
    isRead: {
      type: Boolean,
      default: false,
    },
  },

  // ============================================
  // SCHEMA OPTIONS - AUTO TIMESTAMPS
  // ============================================
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);

// ============================================
// EXPORT MODEL
// ============================================
module.exports = mongoose.model('Contact', contactSchema);
