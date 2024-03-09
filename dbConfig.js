const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_jwt','root','user@123',{
    dialect:'mysql'
});

module.exports = sequelize;

