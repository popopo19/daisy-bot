module.exports = (client, msgReact, user) => {
  let cmd = require("../commands/cmd.json")
  console.log("React")

  for (let i = 0; i < cmd.poll.polls.length; i++) {
    if (cmd.poll.polls[i].id == msgReact.message.id) {
      console.log("Reaction: " + msgReact.emoji.name + "\nReaction Count: " + msgReact.count.toString())
    }
  }
}
