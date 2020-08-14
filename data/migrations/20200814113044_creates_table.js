exports.up = function (knex) {
  return knex.schema
    .createTable("project", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.string("description");
      tbl.boolean("completed").notNullable().defaultTo(false);
    })
    .createTable("resource", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable().unique();
      tbl.string("description");
    })
    .createTable("task", (tbl) => {
      tbl.increments();
      tbl.string("description").notNullable();
      tbl.text("notes");
      tbl.boolean("completed").notNullable().defaultTo(false);
      tbl
        .integer("project_id")
        .notNullable()
        .unsigned()
        .references("project.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("task")
    .dropTableIfExists("resource")
    .dropTableIfExists("project");
};
