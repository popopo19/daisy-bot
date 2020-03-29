module.exports = msg => {
  const cmd_list = require("./cmd_list.json")
  let reply_msg = "List of commands\n"

  for (let i = 0; i < cmd_list.length; i++) {
    reply_msg += cmd_list[i] + "\t"
  }

  msg.reply(reply_msg)
}
