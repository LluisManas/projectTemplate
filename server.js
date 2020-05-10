const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./models/User");
const user = require("./routes/api/users");

const app = express();

app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/projectName", {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB connected.."))
  .catch((err) => console.log(err));

app.use("/api/user", user);
app.use("/api/auth", require("./routes/api/auth"));

const port = 5000;

app.listen(5000, () => {
  console.log(`Server started on port ${port}`);
});
