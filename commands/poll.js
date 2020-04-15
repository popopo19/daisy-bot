module.exports = (client, msg, word) => {
  const cmd = require("./cmd.json")
  let list = word.splice(1).join(" ").split(",")

  if (list.length > cmd.poll.emojis.length) {
    msg.reply(`Your poll can only have ${cmd.poll.emojis.length} items`)

  } else if (list[0][0] === '-') {
    // console.log("command")

    if (list[0][1] === 'i') {
      msg.reply(sendPoll(cmd.poll.votes, cmd.poll.items))
    }

  } else if (list[0] != '') {
    // console.log("Does functions")
    cmd.poll.items = []
    cmd.poll.votes = []
    for (let i = 0; i < list.length && list[i] != ''; i++) {
      cmd.poll.items.push(list[i])
      cmd.poll.votes.push(0)
    }

    msg.channel.send(sendPoll(cmd.poll.items, cmd.poll.emojis))

    cmd.poll.pollCount = cmd.poll.items.length
    cmd.poll.using = true

  } else {
    msg.reply("!poll [OPTION] [item1], [item2], ...")
  }
}

function sendPoll(items, emotes) {
  let output = ""
  for (let i = 0; i < items.length; i++) {
    output += `${emotes[i]} ${items[i]}\t\t `
  }
  return output
}
