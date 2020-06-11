module.exports = (client, msg, word) => {
  const cmd = require("./cmd.json")
  let list = word.splice(1).join(" ").split(",")

  if (list.length > cmd.poll.emojis.length) {
    msg.reply(`Your poll can only have ${cmd.poll.emojis.length} items`)

  } else if (list[0][0] === '-') {
    // console.log("command")

    if (list[0][1] === 'p') {
      msg.channel.send(getAllPollsItems(cmd))
    } else {
      msg.channel.send(getOptionsHelp())
    }

  } else if (list[0] != '') {
    let poll = new Poll(msg, list)
    msg.channel.send(poll.sendPoll())

    cmd.poll.using = true
    cmd.poll.polls.push(poll)


  } else {
    msg.reply("!poll [OPTION] [item1], [item2], ...")
  }
}

class Poll {
  constructor(msg, items) {
    this.items = this.initItems(items)
    this.keys = Object.keys(this.items)
    this.id = 0
  }

  get getId() { return this.id }
  get getItem() { return this.items }
  get getKeys() { return this.keys }

  initItems(items) {
    let itemsDict = {}
    for (let i = 0; i < items.length; i++) {
      itemsDict[items[i]] = 0;
    }
    return itemsDict
  }

  changeId(id) {
    this.id = id
  }

  sendPoll() {
    const cmd = require("./cmd.json")
    let output = ""
    for (let i = 0; i < this.keys.length; i++) {
      output += `${cmd.poll.emojis[i]} ${this.keys[i]}\t\t `
    }
    return output
  }

  announceHighest() {
    let highest = 0
    let indexOfHighest = 0
    for (let i = 0; i < this.keys.length; i++) {
      if (this.items[this.keys[i]] > highest) {
        highest = this.items[this.keys[i]]
        indexOfHighest = i
      }
    }

    return `The most voted goes to ${this.keys[indexOfHighest]} with ${highest} votes.`
  }

  announceLowest() {
    let lowest = 0
    let indexOfLowest = 0
    for (let i = 0; i < this.keys.length; i++) {
      if (this.items[this.keys[i]] < lowest) {
        lowest = this.items[this.keys[i]]
        indexOfLowest = i
      }
    }

    return `The unpopular vote goes to ${this.keys[indexOfLowest]} with ${lowest} votes.`
  }

  anounceItems() {
    let output = ""
    for (let item = 0; item < this.keys.length; item++) {
      output += this.keys[item] + " : " + this.items[this.keys[item]]
      if (item != this.keys.length - 1) output += ", "
    }
    return output
  }
}


function getAllPollsItems(cmd) {
  let output = ""
  for (let i = 0; i < cmd.poll.polls.length; i++) {
    output += (i + 1).toString() + ")    "
    poll = cmd.poll.polls[i]
    output += poll.anounceItems()
    output += "\n"
  }
  return output
}

function getOptionsHelp() {
  return "Poll Options\n\n-p\tShows recent polls"
}
