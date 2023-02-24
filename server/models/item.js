const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Item = sequelize.define("items", {
    title: Sequelize.STRING,
    price: Sequelize.DECIMAL(5,2),
    description: Sequelize.STRING,
    category: Sequelize.STRING,
    image: Sequelize.STRING,
  });
 

module.exports = {Item};