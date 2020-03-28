module.exports = (client, msg) => {
  let words = msg.content.split(" ")
  if (words[0] === 'ping') {
    msg.reply('pong no life');
  } else if (words[0] === "!name") {
    return msg.channel.send(msg.author.username);
  }
}
