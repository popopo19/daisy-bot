module.exports = {
  eventHandler
}

function eventHandler(client, msg) {
  console.log("Function has been called")
  if (msg.content === 'ping') {
    console.log("Pong")
    return msg.reply('pong no life');
  } else if (msg.content === "!name") {
    console.log("Name")
    return msg.channel.send(msg.author.username);
  }
}
