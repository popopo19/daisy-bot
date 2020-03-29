module.exports = (client, msg) => {
  const cmd = require("../commands/cmd.json")

  let rand = Math.floor(Math.random() * (cmd.riddle.length / 2))
  msg.channel.send(cmd.riddle[rand * 2])
}
