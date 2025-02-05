// routes/authorRouter.js
const { Router } = require("express");
const indexController = require("../controllers/messagesController")
const indexRouter = Router();


indexRouter.get("/", indexController.getMessages);

module.exports = indexRouter;
