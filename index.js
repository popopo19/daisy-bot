require("dotenv")
const fs = require("fs")
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

fs.readdir("./events/", (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split(".")[0]
    console.log("eventName: " + eventName)
    client.on(eventName, (...arg) => eventHandler(client, arg))
  })
})

client.login(process.env.BOT_TOKEN)
