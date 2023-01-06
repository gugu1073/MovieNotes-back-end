exports.up = knex => knex.schema.createTable("movie_links", table => {
  table.increments("id");           
  table.text("movie_url").notNullable();
  
  table.integer("note_id").references("id").inTable("movie_notes").onDelete("CASCADE");
  table.timestamp("created_at").default(knex.fn.now());  
});


exports.down = knex => knex.schema.dropTable("links");
