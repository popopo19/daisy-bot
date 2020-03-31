module.exports = (client, msg, words) => {
  let music = words.slice(1).join(" ")

  if (words.length > 1) {

    if (msg.member.voice.channel) {
      const connection = msg.member.voice.channel.join()
    } else {
      msg.reply("Join a voice channel first")
    }
    
  } else {
    msg.reply("!play [Name of song]")
  }
}
