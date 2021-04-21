// I think we need to store Host, User, and password in the .env folder using the process.env.REACT_APP_Variable format

module.exports = {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    dialect: "mysql",
    PORT: process.env.PORT,
};

