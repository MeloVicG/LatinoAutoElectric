const express = require("express");
const cors = require("cors");

const db = require("./server/models");

const app = express();


//may change after deployment
var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync();

require("./server/routes/appointment.routes")(app);
// require("./server/routes/admin.routes")(app);
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the LAE app." });
});

// set port, listen for requests
// const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});