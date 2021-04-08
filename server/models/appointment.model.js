module.exports = (sequelize, Sequelize) => {
    const Appointment = sequelize.define("appointment", {
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
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            isEmail: true,
        },
        phone: {
            type: Sequelize.INTEGER,
            // allowNull: false,
        },
        date: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        time: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        make: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        model: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        year: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        serviceType: {
            type: Sequelize.TEXT,
        },
        clientComments: {
            type: Sequelize.TEXT,
        },
        mechanicComments: {
            type: Sequelize.TEXT,
        },
        // serviceComplete: {
        //     type: Sequelize.BOOLEAN,
        // }
    }, { timestamps: true });

    return Appointment;
};