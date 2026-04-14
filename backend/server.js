require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 5001;
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  
  console.log(`\n--- New Message Received ---`);
  console.log(`From: ${name} (${email})`);
  console.log(`Subject: ${subject || 'No Subject'}`);
  console.log(`Message: ${message}`);
  
  try {
    // 1. Send the email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['bibek.srestha20@gmail.com'], 
      subject: subject || `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #8b5cf6;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
      reply_to: email
    });

    if (error) {
      console.error('Resend Error:', error);
      return res.status(500).json({ success: false, error: 'Failed to send email' });
    }

    // 2. Dummy work process steps for frontend feedback
    const steps = [
      { message: "Validating your message...", delay: 500 },
      { message: "Connecting to Resend mail servers...", delay: 800 },
      { message: "Delivering message to Bibek's inbox...", delay: 1200 },
      { message: "Success! Your message has been sent.", delay: 300 }
    ];

    res.status(200).json({ 
      success: true, 
      steps: steps.map(s => s.message),
      data 
    });

  } catch (err) {
    console.error('Server Error:', err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

