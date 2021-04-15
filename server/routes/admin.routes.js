module.exports = app => {
    const admin = require("../controllers/admin.controller.js");

    var router = require("express").Router();

    router.post("/", admin.create);

    router.get("/", admin.findAll);

    router.get("/securityControllers", admin.findAllSecurityControllers);

    router.get("/:id", admin.findOne);

    router.put("/:id", admin.update);

    router.delete("/:id", admin.delete);

    router.delete("/", admin.deleteAll);

    app.use('/api/admin', router);
};