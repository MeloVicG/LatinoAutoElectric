const db = require("../models");
const Appointment = db.appointments;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.email) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Appointment
    const appointment = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        date: req.body.date,
        time: req.body.time,
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        serviceType: req.body.serviceType,
        clientComments: req.body.clientComments,
        mechanicComments: req.body.mechanicComments,
        serviceComplete: req.body.serviceComplete,
    };

    // Save Appointment in the database
    Appointment.create(appointment)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Appointment."
            });
        });
};

exports.findAll = (req, res) => {
    const email = req.query.email;
    var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;

    Appointment.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving appointments."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Appointment.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Appointment with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Appointment.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Appointment was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Appointment with id=${id}. Maybe Appointment was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Appointment with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Appointment.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Appointment was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Appointment with id=${id}. Maybe Appointment was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Appointment with id=" + id
            });
        });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Appointment.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Appointments were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all appointments."
            });
        });
};

exports.findAllPublished = (req, res) => {
    Appointment.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving appointments."
            });
        });
};

// {
//     "totalItems": 8,
//     "appointments": [...],
//     "totalPages": 3,
//     "currentPage": 1
// }