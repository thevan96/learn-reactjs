const express = require("express");
const bodyParse = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors")

const todoRouter = require("./routers/todo");

const app = express();
app.use(bodyParse.json());
app.use(cors())

// Congif dotenv
require("dotenv").config();

// Config Router
app.get("/", (req, res) => {
  res.send("Home page");
});

app.use("/todos", todoRouter);

// Config connect mongodb
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected db"))
  .catch((err) => console.log(`DB connect error : ${err}`));
mongoose.set("useFindAndModify", false);

app.listen(3002);
