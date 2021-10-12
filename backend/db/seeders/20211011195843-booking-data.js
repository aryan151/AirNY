'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [ 
    { listingId: 1, userId: 1, startTime: '2021-9-17', endTime: '2021-9-18' },
    { listingId: 1, userId: 2, startTime: '2021-9-19', endTime: '2021-9-21' },
    { listingId: 1, userId: 3, startTime: '2021-9-22', endTime: '2021-10-25'},
    { listingId: 2, userId: 3, startTime: '2021-9-21', endTime: '2021-9-25'},
    { listingId: 2, userId: 3, startTime: '2021-9-27', endTime: '2021-9-29'},   
    { listingId: 3, userId: 3, startTime: '2021-9-21', endTime: '2021-9-24'},   
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookings', null, { truncate: true, cascade: true, restartIdentity: true });
  }
}; 