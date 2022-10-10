module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('rents', [
      {
        user_id: 1,
        product_id: 1,
        months: 2
      }, 
      {
        user_id: 1,
        product_id: 2,
        months: 12
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('rents', null, {});
  },
};