module.exports = (client, msg, word) => {
  const cmd = require("./cmd.json")
  let list = word.splice(1).join(" ").split(",")
  let poll = new Poll(list, cmd.emojis)
  cmd.poll.polls.push(poll)

  if (list.length > cmd.poll.emojis.length) {
    msg.reply(`Your poll can only have ${cmd.poll.emojis.length} items`)

  } else if (list[0][0] === '-') {
    // console.log("command")

    if (list[0][1] === 'i') {
      msg.reply(poll.sendPoll())
    }

  } else if (list[0] != '') {
    console.log("Does functions")
    // cmd.poll.items = []
    // cmd.poll.votes = []
    // for (let i = 0; i < list.length && list[i] != ''; i++) {
    //   cmd.poll.items.push(list[i])
    //   cmd.poll.votes.push(0)
    // }
    //
    // msg.channel.send(sendPoll(cmd.poll.items, cmd.poll.emojis))
    //
    // cmd.poll.pollCount = cmd.poll.items.length
    // cmd.poll.using = true



  } else {
    msg.reply("!poll [OPTION] [item1], [item2], ...")
  }
}

class Poll {
  constructor(items, emojis) {
    this.items = items
    this.emojis = emojis
    this.votes =
    this.id = 0
  }

  get getId() { return this.id }
  get getItems() { return this.items }
  get getVotes() { return this.votes }

  changeId(id) {
    this.id = id
  }

  sendPoll() {
    let output = ""
    for (let i = 0; i < this.items.length; i++) {
      output += `${this.emojis[i]} ${this.items[i]}\t\t `
    }
    return output
  }

  announceHighest() {
    let highest = 0
    let indexOfHighest = 0
    for (let i = 0; i < this.votes.length; i++) {
      if (this.votes[i] > highest) {
        highest = this.votes[i]
        indexOfHighest = i
      }
    }

    return `The most voted goes to ${this.items[indexOfHighest]} with ${highest} votes.`
  }

  announceLowest() {
    let lowest = 0
    let indexOfLowest = 0
    for (let i = 0; i < this.votes.length; i++) {
      if (this.votes[i] < lowest) {
        lowest = this.votes[i]
        indexOfLowest = i
      }
    }

    return `The unpopular vote goes to ${this.items[indexOfLowest]} with ${lowest} votes.`
  }

}
