module.exports = (client, msg) => {
  require("dotenv")

  let words = msg.content.split(" ")
  let mention_users = msg.mentions.users.array()

  // commands
  if (words[0][0] == '!') {

    if (words[0] === "!dice") {
      const dice = require("../commands/dice.js")
      dice(msg, words)

    // !rps
    } else if (words[0] === "!rps") {
      // let player_bot = random('rock','paper','scissor');
    } else if (words[0] === "rock" && player_bot === 'rock') {
      msg.reply('Tie');


    } else if (words[0] === '!riddle') {
      const riddle = require("../commands/riddle.js")
      riddle(client, msg)

    } else if (words[0] === '!motivate') {
      const motivate = require("../commands/motivate.js")
      motivate(msg)

    } else if (words[0] == '!help') {
      const help = require("../commands/help.js")
      help(msg)

    // User didn't type in right command
    } else {
      const wrong_cmd = require("../commands/wrong_cmd.js")
      wrong_cmd(msg)
    }
  } else if (mention_users.length != 0) {
    for (let i = 0; i < mention_users.length; i++) {
      if (mention_users[i].id === '203585398671147008') {
        const twilio = require("twilio")
        const twilio_client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN)

        twilio_client.messages.create({
          to: process.env.YANG_NUM,
          from: process.env.TWILIO_NUM,
          body: msg.content
        })
      }
    }

  } else {

    if (msg.content.toLowerCase() === 'ping') {
      msg.reply('pong');
    }
  }
}
