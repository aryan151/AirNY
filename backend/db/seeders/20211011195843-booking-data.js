'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [ 
    { listingId: 1, userId: 1, startTime: '2021-11-17', endTime: '2021-11-18' },
    { listingId: 2, userId: 2, startTime: '2021-11-19', endTime: '2021-11-21' },
    { listingId: 1, userId: 1, startTime: '2021-11-22', endTime: '2021-11-25'},
    { listingId: 3, userId: 3, startTime: '2021-11-21', endTime: '2021-11-25'},
    { listingId: 4, userId: 1, startTime: '2021-11-27', endTime: '2021-11-29'},   
    { listingId: 3, userId: 3, startTime: '2021-11-21', endTime: '2021-11-24'},     
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookings', null, { truncate: true, cascade: true, restartIdentity: true });
  }
}; 