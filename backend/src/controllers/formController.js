const { validationResult } = require("express-validator");

exports.submitForm = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation errors",
      errors: errors.array(),
    });
  }

  return res.status(200).json({
    success: true,
    message: "Form submitted successfully!",
    data: req.body,
  });
};
