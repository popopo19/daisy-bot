require("dotenv")
const fs = require("fs")
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  console.log("Inside index.js " + msg.content)
})

fs.readdir("./events/", (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    console.log("eventHandler: " + eventHandler)
    const eventName = file.split(".")[0]
    console.log("eventName: " + eventName)
    client.on(eventName, (...arg) => eventHandler.eventHandler(client, arg))
  })
})

client.login(process.env.BOT_TOKEN)
