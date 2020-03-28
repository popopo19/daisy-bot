module.exports = (client, msg) => {
  let words = msg.content.split(" ")
  if (msg.content === 'ping') {
    msg.reply('pong no life');
  } else if (words[0] === "!name") {
    return msg.channel.send(msg.author.username);
  } else if (words[0] === "!random") {
    let len = words.length
    if (!isNaN(words[1]) || len == 2) {
      let rand = Math.floor(Math.random() * words[1])
      msg.reply(rand)
    } else {
      msg.reply("!random [number]")
    }
  }
}
