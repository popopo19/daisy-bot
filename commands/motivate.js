module.exports = msg => {
  let cmd = require("../commands/cmd.json")

  let rand = Math.floor(Math.random() * cmd.motivate.quotes.length)
  msg.channel.send(cmd.motivate.quotes[rand])
}
