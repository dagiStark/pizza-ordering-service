// middlewares/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
};

module.exports = errorHandler;
