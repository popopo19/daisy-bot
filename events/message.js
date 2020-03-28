module.exports = (client, msg) => {
  let words = msg.content.split(" ")

// ping
  if (msg.content.toLowerCase() === 'ping') {
    msg.reply('pong no life');
  } else if (words[0] === "!name") {
    return msg.channel.send(msg.author.username);

// !dice
  } else if (words[0] === "!dice") {
    let len = words.length
    if (!isNaN(words[1]) && len == 2) {
      let rand = Math.floor(Math.random() * words[1])
      msg.reply(rand)
    } else {
      msg.reply("!dice [number]")
    }

// !rps
  } else if (words[0] === "!rps") {
    msg.reply('Choose rock, paper, or scissors.');
  } if (word[1] === "rock") {
    msg.reply('You lose')
  }
}
