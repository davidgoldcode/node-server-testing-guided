const knex = require("knex");

const config = require("../knexfile.js");

const environment = process.env.DB_ENV || "development";
// go to heroku & settings for this

module.exports = knex(config[environment]);
D;
