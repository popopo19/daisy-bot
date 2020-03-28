module.exports = (client, msg) => {
  if (msg.content === 'ping') {
    return msg.reply('pong no life');
  } else if (msg.content === "!name") {
    return msg.channel.send(msg.author.username);
  }
}
