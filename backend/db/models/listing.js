'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    address: DataTypes.STRING,
    borough: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL
  }, {});
  Listing.associate = function(models) {
    Listing.belongsTo(models.User, { foreignKey: 'userId' });  
    Listing.hasMany(models.Image, { foreignKey: 'listingId', onDelete: 'CASCADE', hooks: true});
    Listing.hasMany(models.Booking, { foreignKey: 'listingId', onDelete:'CASCADE', hooks: true});
    Listing.hasMany(models.Review, { foreignKey: 'listingId', onDelete: 'cascade', hooks: true }) 
  };   
  return Listing;
};