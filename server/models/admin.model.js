module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
            isAlpha: true,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
            isAlpha: true,
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        securityControl: {
            type: Sequelize.BOOLEAN,
        }
    }, { timestamps: true });

    return Admin;
};