
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {make: 'Kia', model: 'Ultama', vin: 'FGHIJ67891', mileage: 200000},
        {make: 'Chevrolet', model: 'Corvette Stingray', vin: '', mileage: null},
        {make: 'Honda', model: 'Accord EX', vin:'ABCDE12345', mileage: 5000}
      ]);
    });
};
