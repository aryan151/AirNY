'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      listingId: {
        allowNull: false,
        reference: { model: 'Listings'}, 
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        reference: {model: 'Users'},
        type: Sequelize.INTEGER
      },
      startTime: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      endTime: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }  
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bookings');
  }
};