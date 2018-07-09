// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

var sequelize;

//JAWSDB Connection for Heroku; if not, MySQL database
if (process.env.JAWSDB_URL)
{
	sequelize = Sequelize.createConnection(process.env.JAWSDB_URL);
}
else
{

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.//
var sequelize = new Sequelize("juniorpicasso", "root", "DrPepper", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
}

// Exports the connection for other files to use
module.exports = sequelize;
