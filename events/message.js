module.exports = {
  eventHandler
}

function eventHandler(client, msg) {
  console.log(msg.Message.content)
  if (msg.content === 'ping') {
    console.log("Pong")
    msg.reply('pong no life');
  } else if (msg.content === "!name") {
    console.log("Name")
    return msg.channel.send(msg.author.username);
  }
}
