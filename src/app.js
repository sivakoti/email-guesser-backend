const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { emailGuesserController } = require("./controllers/emailGuesserController");

// configuring dotenv to access envi variables from .env file
dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

const port = process.env.PORT;

//api route for email guesser
app.post("/api/v1/email-guesser", emailGuesserController)

app.listen(port, () => {
    console.log(`server is listening on the port ${port}`);
});

module.exports = app;