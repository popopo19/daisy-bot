module.exports = (client, msg) => {
  if (msg.content === 'ping') {
    msg.reply('pong no life');
  } else if (msg.contentstartsWith('!name')) {
    msg.channel.send(msg.author.username);
  }
}
