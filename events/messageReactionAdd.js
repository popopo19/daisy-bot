module.exports = (client, msgReact, user) => {
  let cmd = require("../commands/cmd.json")

  if (cmd.poll.using) {
    for (let i = 0; i < cmd.poll.emojis.length; i++) {
      if (msgReact._emoji.name == cmd.poll.emojis[i]) {
        cmd.poll.votes[i] = msgReact.count
      }
    }
  }
}
