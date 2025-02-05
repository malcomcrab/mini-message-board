const db = require("../db/queries");

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  console.log("Messages: ", messages);
  res.send("Messages: " + messages.map(message => message.message).join(", "));
}



module.exports = {
  getMessages
};