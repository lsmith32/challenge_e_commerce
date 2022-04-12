require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('ecommerce_db', 'root', 'Lasm#0289', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;