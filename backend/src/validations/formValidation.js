const { check } = require("express-validator");

exports.validateForm = [
  check("fullName")
    .trim()
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("Full Name must contain only alphabets and spaces")
    .isLength({ min: 3 })
    .withMessage("Full Name must be at least 3 characters long"),

  check("phone")
    .trim()
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone number must be exactly 10 digits")
    .matches(/^\d+$/)
    .withMessage("Phone number must contain only numbers"),

  check("vin")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ min: 17, max: 17 })
    .withMessage("VIN must be exactly 17 characters")
    .isAlphanumeric()
    .withMessage("VIN must be alphanumeric"),

  check("email")
    .trim()
    .isEmail()
    .withMessage("Invalid email format")
    .isLength({ min: 7 })
    .withMessage("Email must be at least 7 characters long"),

  check("zip")
    .trim()
    .isLength({ min: 5, max: 5 })
    .withMessage("Zip Code must be exactly 5 digits")
    .matches(/^\d+$/)
    .withMessage("Zip Code must contain only numbers"),

  check("year")
    .optional({ checkFalsy: true })
    .isInt({ min: 1900, max: new Date().getFullYear() })
    .withMessage(`Year must be between 1900-${new Date().getFullYear()}`),
];
