exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user_reviews")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("user_reviews").insert([
        {
          user_review_id: 1,
          user_review_title:
            "Incredibly grateful for Livi getting me the best dietitian. I’ve really (and seriously) been making progress.",
          user_id: 1,
        },
        {
          user_review_id: 2,
          user_review_title:
            "Can't say enough good things about Livi. It’s simple to make an appointment and I have been impressed with the quality of care and compassion shown by my dietitian. I really appreciate that appointments begin on time and the follow-up care. Highly recommend Livi!",
          user_id: 2,
        },
        {
          user_review_id: 3,
          user_review_title:
            "I’ve engaged in nutritional counseling on-and-off for 10 years and never has it been easier or better than with Livi in the past few months. Highly recommend 🙏",
          user_id: 3,
        },
        {
          user_review_id: 4,
          user_review_title:
            "Adrien provided strategies for me that were practical and really work. She listens and was able to get me to think about and actually say what I really want and need in my life.",
          user_id: 4,
        },
      ]);
    });
};
