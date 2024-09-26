const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body); // Assuming Zod, which has a `.parse()` method
    next();
  } catch (error) {
    return res.status(400).json({
      message: "Validation error",
      errors: error.errors, // Assumes error.errors contains the validation issues
    });
  }
};

module.exports = { validate };
