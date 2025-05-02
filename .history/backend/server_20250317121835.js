const express = require('express');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const cors = require('cors');

const app = express();
app.use(express.json());   
app.use(cors()); // Enable CORS



// OAuth2 Configuration (Hardcoded credentials - Not secure for production)
const CLIENT_ID = "your_client_id";
const CLIENT_SECRET = "your_client_secret";
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = "your_refresh_token";
const EMAIL_USER = "your_email@gmail.com";  // Sender email
const RECEIVER_EMAIL = "receiver_email@example.com"; // Email to receive messages

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// Function to send email
async function sendMail(formData) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: EMAIL_USER,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: formData.email,
      to: RECEIVER_EMAIL, // Receiver email
      subject: 'Contact Form Submission',
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}

// API Route to handle contact form submission
app.post('/api/send', async (req, res) => {
  try {
    await sendMail(req.body);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    res.status(500).send('Error sending email');
  }
});

// Start server
const PORT = 3033; // Hardcoded port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
