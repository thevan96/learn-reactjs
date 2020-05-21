const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const UserRouter = require("./routers/UserRouter");

require("dotenv").config();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3002;

// Router
app.use("/users", UserRouter);

// Connect mongoose
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected mongodb"))
  .catch((err) => console.log(`DB connect error : ${err}`));

mongoose.set("useFindAndModify", false);

app.listen(PORT);
