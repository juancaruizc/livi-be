exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { user_id: 1, user_display_name: "llana" },
        { user_id: 2, user_display_name: "Peter" },
        { user_id: 3, user_display_name: "Dana" },
        { user_id: 4, user_display_name: "Alec" },
      ]);
    });
};
