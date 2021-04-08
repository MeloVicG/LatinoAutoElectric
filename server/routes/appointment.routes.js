module.exports = app => {
    const appointments = require("../controllers/appointment.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", appointments.create);

    // Retrieve all Tutorials
    router.get("/", appointments.findAll);

    // Retrieve all Appointments by selected date
    router.get("/date/:id", appointments.findAllByDate);

    // Retrieve all published Tutorials
    router.get("/published", appointments.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", appointments.findOne);

    // Update a Tutorial with id
    router.put("/:id", appointments.update);

    // Delete a Tutorial with id
    router.delete("/:id", appointments.delete);

    // Delete all Tutorials
    router.delete("/", appointments.deleteAll);

    app.use('/api/appointments', router);
};