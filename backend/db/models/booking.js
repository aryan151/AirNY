'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    userId: DataTypes.INTEGER,   
    listingId: DataTypes.INTEGER,
    startTime: DataTypes.DATEONLY,
    endTime: DataTypes.DATEONLY
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.User, { foreignKey: 'userId' });
    Booking.belongsTo(models.Listing, { foreignKey: 'listingId' });    
  };    
  return Booking;
};