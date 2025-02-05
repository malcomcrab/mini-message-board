require("dotenv").config();
const path = require("node:path");
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const indexRouter = require("./routes/indexRouter");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", indexRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
