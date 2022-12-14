require("dotenv").config()
const { Sequelize } = require('sequelize');

const db = new Sequelize(`${process.env.SQL_CONFIG}`);

const connectSQL = async () => {
    try {
        await db.authenticate();
        console.log('PostgreSQL database connected...');
    } catch (error) {
        console.error('Unable to connect to SQL database:', error);
    }
}

module.exports = {
    connectSQL,
    db
}