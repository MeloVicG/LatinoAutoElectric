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
            //change to string
            type: Sequelize.STRING,
            // isNumeric: true,
            // allowNull: false,
        },
        date: {
            //dateonly
            type: Sequelize.STRING,
            isDate: true,
            // allowNull: false,
        },
        time: {
            type: Sequelize.STRING,
            // allowNull: false,
        },
        make: {
            type: Sequelize.STRING,
            // allowNull: false,
        },
        model: {
            type: Sequelize.STRING,
            // allowNull: false,
        },
        year: {
            type: Sequelize.STRING,
            // allowNull: false,
            isNumeric: true,
            // len: [9, 10],

        },
        serviceType: {
            type: Sequelize.STRING,
        },
        clientComments: {
            type: Sequelize.TEXT,
        },
        mechanicComments: {
            type: Sequelize.TEXT,
        },
        serviceComplete: {
            type: Sequelize.BOOLEAN,
        }
    }, { timestamps: true });

    return Appointment;
};