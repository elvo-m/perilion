const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submissions
app.post("/submit-form", (req, res) => {
  const { name, email, company, message } = req.body;

  // Log the form data to the console (for testing)
  console.log("Form Data Received:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Company:", company);
  console.log("Message:", message);

  // Send a response back to the client
  res.send("Form submitted successfully!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const nodemailer = require("nodemailer");

// Create a transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "elvisekabe25@gmail.com",
    pass: "Freelance2025",
  },
});

// Route to handle form submissions
app.post("/submit-form", async (req, res) => {
  const { name, email, company, message } = req.body;

  // Send email
  const mailOptions = {
    from: "your-email@gmail.com",
    to: "elvisekabe25@gmail.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
  };

  await transporter.sendMail(mailOptions);

  res.send("Form submitted successfully!");
});