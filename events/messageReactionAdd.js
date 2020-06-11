module.exports = (client, msgReact, user) => {
  let cmd = require("../commands/cmd.json")

  for (let i = 0; i < cmd.poll.polls.length; i++) {
    if (cmd.poll.polls[i].id == msgReact.message.id) {
      let index = 0
      for (let e = 0; e < cmd.poll.emojis.length; e++) {
        if (cmd.poll.emojis[e] == msgReact.emoji.name) {
          index = e
          break
        }
      }
      cmd.poll.polls[i].items[cmd.poll.polls[i].keys[index]] = msgReact.count
    }
  }
}
