'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    listingId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    description: DataTypes.TEXT    
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, { foreignKey: 'userId' });
    Review.belongsTo(models.Listing, { foreignKey: 'listingId' });
  };       
  return Review;       
};