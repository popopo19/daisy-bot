module.exports = (client, msg, words) => {

  if (words.length == 2) {

    if (msg.member.voice.channel) {
      msg.member.voice.channel.join()
      const ytdl = require('ytdl-core')

      const connection = client.voice.connections.array()[0]
      const dispatcher = connection.play(ytdl(words[1], { filter: 'audioonly' }))

    } else {
      msg.reply("Join a voice channel first")
    }

  } else {
    msg.reply("!play [Youtube Link]")
  }
}
