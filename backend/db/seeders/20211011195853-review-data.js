'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [  
    { userId: 1, listingId: 1, rating: 3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    { userId: 3, listingId: 1, rating: 3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    { userId: 2, listingId: 1, rating: 3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    { userId: 1, listingId: 2, rating: 3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    { userId: 1, listingId: 3, rating: 3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    { userId: 1, listingId: 4, rating: 3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    ])  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};