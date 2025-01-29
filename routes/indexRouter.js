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


indexRouter.get("/", (req, res) => res.render("index", {title: "Mini Message Board", messages: messages}));
indexRouter.get("/", (req, res) => {
  const { indexId } = req.params;
  res.send(`index ID: ${indexId}`);
});

indexRouter.get("/new", (req,res) => res.render("form", {title:"form"}))

indexRouter.get("/message/:id", (req,res) => {
    const message = messages[req.params.id];
    res.render("message", {title: "message", message: message})
})

indexRouter.post("/new", (req, res) => {
    const messageText = req.body.messageText
    const messageUser = req.body.messageUser
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    
    res.redirect("/")
  })
module.exports = indexRouter;
