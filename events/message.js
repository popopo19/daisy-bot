module.exports = {
  eventHandler
}

function eventHandler(client, msg) {
  console.log("Function called with content: ", msg)
  if (msg.content === 'ping') {
    console.log("Pong")
    msg.reply('pong no life');
  } else if (msg.content === "!name") {
    console.log("Name")
    return msg.channel.send(msg.author.username);
  }
}
