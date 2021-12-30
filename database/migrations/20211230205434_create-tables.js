exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments("user_id");
      tbl.string("user_display_name").notNullable();
    })
    .createTable("user_reviews", (tbl) => {
      tbl.increments("user_review_id");
      tbl.string("user_review_title", 1000).notNullable();
      tbl
        .integer("user_id")
        .notNullable()
        .unsigned()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.datetime("user_review_created_on").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("user_reviews")
    .dropTableIfExists("users");
};
