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

// Helper function to determine ad source
function getAdSource(tracking) {
  if (tracking.gclid) return 'Google Ads';
  if (tracking.msclkid) return 'Bing Ads';
  if (tracking.fbclid) return 'Facebook Ads';
  if (tracking.utm_source === 'google') return 'Google Ads';
  if (tracking.utm_source === 'bing') return 'Bing Ads';
  if (tracking.utm_source) return tracking.utm_source;
  return 'Direct Traffic';
}

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
router.post("/form", validateForm, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.error("Validation failed:", errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructure all fields including tracking data
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
      tracking,
      leadId,
      submissionTime,
    } = req.body;

    // Create enhanced email content with tracking
    const emailContent = `
Praxxii Global - New Lead Submission

Company: ${leadLabel}
Full Name: ${fullName}
Phone: ${phone}
Email: ${email}
Zip: ${zip}
Year: ${year}
Make: ${make}
Model: ${model}
Part: ${part}
VIN: ${vin || "Not Provided"}
Browser: ${browser || "Not Provided"}

=== AD TRACKING INFORMATION ===
Lead ID: ${leadId || 'Not Generated'}
Ad Source: ${getAdSource(tracking || {})}
Campaign: ${tracking?.utm_campaign || 'Not specified'}
Medium: ${tracking?.utm_medium || 'Not specified'}
Source: ${tracking?.utm_source || 'direct'}
Search Term: ${tracking?.utm_term || 'Not captured'}
Ad Content: ${tracking?.utm_content || 'Not specified'}
Campaign ID: ${tracking?.utm_id || 'Not specified'}
Google Click ID: ${tracking?.gclid || 'Not captured'}
Bing Click ID: ${tracking?.msclkid || 'Not captured'}
Facebook Click ID: ${tracking?.fbclid || 'Not captured'}
Referrer: ${tracking?.referrer || 'Direct visit'}
Landing Page: ${tracking?.landing_page || 'Not captured'}
Submission Time: ${submissionTime || new Date().toISOString()}
=== END TRACKING INFO ===
    `;

    // Enhanced email subject with campaign info
    const subjectLine = tracking?.utm_campaign && tracking.utm_campaign !== 'none' 
      ? `New Lead: ${fullName} - ${getAdSource(tracking)} - ${tracking.utm_campaign}`
      : `New Lead: ${fullName} - ${getAdSource(tracking || {})}`;

    const mailOptions = {
      from: `"Praxxii Global" <autopartslead9@gmail.com>`,
      to: "info@praxxiiglobal.com",
      subject: subjectLine,
      text: emailContent,
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