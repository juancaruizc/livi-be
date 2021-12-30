const router = require("express").Router();
const Reviews = require("./reviews-model");

// Error handling middleware
//eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
    custom: "500 error in the server (reviews)",
  });
});

module.exports = router;
