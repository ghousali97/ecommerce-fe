const db = require('mongoose');
require('dotenv').config();

db.connect(process.env.DB_URL, { dbName: 'eCommerce', }).then(() => { console.log("Connected to DB"); }).catch((error) => {
    console.log("Connection to DB failed: " + error);
});

module.exports = db
