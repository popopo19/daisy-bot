module.exports = (client, msg) => {
  let words = msg.content.split(" ")

// ping
  if (msg.content.toLowerCase() === 'ping') {
    msg.reply('pong no life');
  } else if (words[0] === "!name") {
    return msg.channel.send(msg.author.username);

// !dice
  } else if (words[0] === "!dice") {
    const dice = require("../commands/dice.js")
    dice(msg, words)

// !rps
  } else if (words[0] === "!rps") {
    // let player_bot = random('rock','paper','scissor');
  } else if (words[0] === "rock" && player_bot === 'rock') {
    msg.reply('Tie');

// User didn't type in right command
    } else if (words[0][0] == '!') {
      msg.reply("There is no such command. Type !help for a list of commands")

    } else if (words[0] == '!help') {

    }
}
