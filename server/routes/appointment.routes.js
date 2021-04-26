module.exports = app => {
    const appointments = require("../Controllers/appointment.controller");

    var router = require("express").Router();

    // Create a new appointment
    router.post("/", appointments.create);

    // Retrieve all appointments
    router.get("/", appointments.findAll);

    // Retrieve all appointments by selected date
    router.get("/date/:id", appointments.findAllByDate);

    // Retrieve a single appointment with id
    router.get("/:id", appointments.findOne);

    // Update an appointment with id
    router.put("/:id", appointments.update);

    // Delete an appointment with id
    router.delete("/:id", appointments.delete);

    // Delete all appointments
    router.delete("/", appointments.deleteAll);

    app.use('/api/appointments', router);
};
