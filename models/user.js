const Sequelize = require('sequelize');

const sequelize = require('../database');

const User = sequelize.define('user', {
    // Model attributes are defined here
    Name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Email: {
      type: Sequelize.STRING
      // allowNull defaults to true
    },
    Phone: {
        type: Sequelize.STRING
      }
  });


  module.exports = User;