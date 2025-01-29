// routes/authorRouter.js
const { Router } = require("express");
const indexRouter = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];


indexRouter.get("/", (req, res) => res.send("Index"));
indexRouter.get("/:indexId", (req, res) => {
  const { indexId } = req.params;
  res.send(`index ID: ${indexId}`);
});

module.exports = indexRouter;
