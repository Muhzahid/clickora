import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message)
      return res.status(400).json({ success: false, msg: "All fields required" });

    // Save to MongoDB
    const newMessage = await Contact.create({ name, email, message });

    // Send email notification (optional)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

   await transporter.sendMail({
  from: `"Company Contact" <${process.env.EMAIL_USER}>`, // logged-in sender
  to: process.env.EMAIL_RECEIVER,                       // your company/receiver email
  replyTo: email,                                       // user’s email
  subject: `📩 New Contact Message from ${name}`,
  text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
});


    res.json({ success: true, msg: "Message received and email sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: "Server error" });
  }
});

export default router;
