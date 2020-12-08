
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      table.increments()
      table.text('make', 50).notNullable()
      table.text('model', 50).notNullable()
      table.text('vin', 25)
      table.float('mileage')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
