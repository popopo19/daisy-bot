module.exports = (client, msg) => {
  require("dotenv")

  let words = msg.content.split(" ")
  let mention_users = msg.mentions.users.array()
  let cmd = require("../commands/cmd.json")

  // commands
  if (words[0][0] == '!') {

    if (words[0] === "!dice") {
      const dice = require("../commands/dice.js")
      dice(msg, words)

    }  else if (words[0] === '!riddle') {
      const riddle = require("../commands/riddle.js")
      riddle(client, msg)

    } else if (words[0] === '!motivate') {
      const motivate = require("../commands/motivate.js")
      motivate(msg)

    } else if (words[0] === '!weather') {
      const weather = require("../commands/weather.js")
      weather(msg, words)

    } else if (words[0] === '!play') {
      const play = require("../commands/play.js")
      play(client, msg, words)

    } else if (words[0] === '!poll') {
      const poll = require("../commands/poll.js")
      poll(client, msg, words)

    } else if (words[0] == '!help') {
      const help = require("../commands/help.js")
      help(msg)

    // User didn't type in right command
    } else {
      const wrong_cmd = require("../commands/wrong_cmd.js")
      wrong_cmd(msg)
    }
  } else if (mention_users.length != 0) {
    const text_zalk = require("../message/text_zalk.js")
    if (!msg.author.bot) text_zalk(msg, mention_users)

  } else {


    if (msg.content.toLowerCase() === 'ping') {
      msg.reply('pong');
    } else if (cmd.poll.using) {

      for (let i = 0; i < cmd.poll.polls[cmd.poll.polls.length - 1].getKeys.length; i++) {
        msg.react(cmd.poll.emojis[i])
      }

      cmd.poll.polls[cmd.poll.polls.length - 1].id = msg.id
      cmd.poll.using = false
    }
  }
}
