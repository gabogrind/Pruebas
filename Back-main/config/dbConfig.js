require('dotenv').config();

var dbHost = process.env.DB_HOST;
module.exports = {
    urlDatabase: dbHost
}