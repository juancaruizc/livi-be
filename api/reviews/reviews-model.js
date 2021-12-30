const db = require("../../database/dbConfig");

function getReviews() {
  return db("user_reviews as ur").join("users as u", "u.user_id", "ur.user_id");
}

module.exports = { getReviews };
