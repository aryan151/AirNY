'use strict';

module.exports = {

up: (queryInterface, Sequelize) => {

return queryInterface.bulkInsert('Listings', [ 
   
  { userId: 2, name: 'Oriana', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', 
  price: 300, address: '675 W 59th St', borough: 'Manhattan', neighborhood: 'Lincoln Square',latitude: 40.772530, longitude: -73.992480},  

  { userId: 2, name: 'The Octagon', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', 
  price: 300, address: '1762 First Ave', borough: 'Manhattan', neighborhood: 'Upper East Side',latitude: 40.780190, longitude: -73.946540},   

  { userId: 3, name: 'Ten23', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', 
  price: 300, address: '606 W 57th St', borough: 'Manhattan', neighborhood: 'Hells Kitchen',latitude: 40.770490, longitude: -73.992400},  

  { userId: 2, name: 'Riverside Bend', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', 
  price: 300, address: '34 Park South', borough: 'Manhattan', neighborhood: 'Hells Kitchen',latitude: 40.765030, longitude: -73.975340}, 

  { userId: 2, name: 'The Westmont', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', 
  price: 300, address: '21 India St', borough: 'Brooklyn', neighborhood: 'Greenpoint',latitude: 40.730512, longitude: -73.951522}, 

  { userId: 3, name: 'Parc Coliseum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', 
  price: 300, address: '3995 Leonard St', borough: 'Brooklyn', neighborhood: 'Greenpoint',latitude: 40.717680, longitude: -74.005768}, 
  
  { userId: 1, name: 'Fair East', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', 
  price: 300, address: '222 Johnson Ave', borough: 'Brooklyn', neighborhood: 'Williamsburg',latitude: 40.706932, longitude: -73.940187}, 

  { userId: 1, name: 'Prism', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', 
  price: 300, address: '5241 Center Blvd', borough: 'Brooklyn', neighborhood: 'Williamsburg',latitude: 40.741344, longitude: -73.960488}, 

  { userId: 2, name: 'Longacre House', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', 
  price: 300, address: '34 Berry Street', borough: 'Brooklyn', neighborhood: 'Ridgewood',latitude: 40.752602, longitude: -73.995117}, 

  { userId: 1, name: 'Kick 77', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', 
  price: 300, address: '233 50th Ave', borough: 'Queens', neighborhood: 'Long Island City',latitude: 40.761843, longitude: -73.984979}, 

  { userId: 2, name: 'Hudson Crossing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', 
  price: 300, address: '939 Woodycrest Ave', borough: 'Bronx', neighborhood: 'West Bronx',latitude: 40.836014, longitude: -73.924975}, 

  { userId: 1, name: 'Beatrice', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', 
  price: 300, address: '1680 Pelham Pkwy', borough: 'Bronx', neighborhood: 'South Bronx',latitude: 40.855328, longitude: -73.863959}, 

    ])  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Listings', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
