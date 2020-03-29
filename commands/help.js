module.exports = msg => {
  const cmd = require("./cmd.json")
  let reply_msg = "\nList of commands\n"

  // Go through list in cmd_list.json
  for (let i = 0; i < cmd.help.list.length; i++) {
    reply_msg += cmd.help.list[i] + "\t"
  }

  msg.reply(reply_msg)
}
