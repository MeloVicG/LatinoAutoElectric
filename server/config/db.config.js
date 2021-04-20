require('dotenv').config();
// I think we need to store Host, User, and password in the .env folder using the process.env.REACT_APP_Variable format

module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'root',
    DB: 'appointmentdb',
    dialect: "mysql",
    PORT: process.env.PORT,
    SESSION_SECRET: process.env.SESSION_SECRET,
    COOKIE_NAME: process.env.COOKIE_NAME,

};

