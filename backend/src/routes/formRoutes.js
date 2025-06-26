const express = require("express");
const { body, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
require("dotenv").config();

const router = express.Router();

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Form validation
const validateForm = [
  body("fullName")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Full Name must be at least 3 characters long")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("Full Name must contain only letters and spaces"),

  body("phone")
    .trim()
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone number must be exactly 10 digits")
    .matches(/^\d+$/)
    .withMessage("Phone number must contain only numbers"),

  body("email")
    .trim()
    .isLength({ min: 7 })
    .withMessage("Email must be at least 7 characters long")
    .isEmail()
    .withMessage("Invalid email format"),

  body("zip")
    .trim()
    .isLength({ min: 5, max: 5 })
    .withMessage("Zip Code must be exactly 5 digits")
    .matches(/^\d+$/)
    .withMessage("Zip Code must contain only numbers"),

  body("vin")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ min: 17, max: 17 })
    .withMessage("VIN must be exactly 17 characters"),

  body("year")
    .optional({ checkFalsy: true })
    .isInt({ min: 1900, max: new Date().getFullYear() })
    .withMessage(`Year must be between 1900-${new Date().getFullYear()}`),
];

// GET route to verify API is alive
router.get("/", (req, res) => {
  res.json({ message: "API is working!" });
});

// POST route for form submission
router.post("/", validateForm, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.error("Validation failed:", errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      leadLabel,
      fullName,
      phone,
      email,
      zip,
      year,
      make,
      model,
      part,
      vin,
      browser,
    } = req.body;

    const mailOptions = {
      from: `"Praxxii Global Support" <leads1@autopartocean.com>`,
      to: "devops@fnpglobal.com",
      subject: "New Form Submission Praxxii Global",
      text:
        `Company: ${leadLabel}\n` +
        `Full Name: ${fullName}\n` +
        `Phone: ${phone}\n` +
        `Email: ${email}\n` +
        `Zip: ${zip}\n` +
        `Year: ${year}\n` +
        `Make: ${make}\n` +
        `Model: ${model}\n` +
        `Part: ${part}\n` +
        `VIN: ${vin || "Not Provided"}\n` +
        // `Remarks: ${remarks || "Not Provided"}\n` +
        `Browser: ${browser || "Not Provided"}\n`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.json({ message: "Form submitted and email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", {
      message: error.message,
      response: error.response,
      code: error.code,
    });
    res.status(500).json({ error: "Failed to send email" });
  }
});

module.exports = router;
