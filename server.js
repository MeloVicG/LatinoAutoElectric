require('dotenv').config();
const express = require("express");
const cors = require("cors");
const db = require("./server/models");

const app = express();

const PORT = process.env.PORT;
//may change after deployment
var corsOptions = {
    origin: "http://localhost:3000",
    credentials: true
};

app.use(cors(corsOptions));

// Express body parser

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse cookies and use middleware to handle finding and attaching authenticated Admin to object.

// Connect to db?
db.sequelize.sync();

// Specifiy Routes to be used
require('./server/routes/auth.routes')(app);
require("./server/routes/user.routes")(app);
require("./server/routes/appointment.routes")(app);

// simple route to see if app working
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the LAE app." });
});

// set port, listen for requests
// const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});