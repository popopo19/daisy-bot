module.exports = (client, msg, words) => {
  let music = words.slice(1).join(" ")
  console.log("First")

  if (words.length > 1) {
    console.log("Second")

    if (msg.member.voice.channel) {
      console.log("Third")
      const connection = msg.member.voice.channel.join()
      const yts = require('yt-search')
      const ytdl = require('ytdl-core')

      yts(music, (err, r) => {
        console.log("Fourth")
        const video = r.videos[0]
        const url = video.url
        const dispatcher = connection.play(ytdl(url, { filter: 'audioonly' }))
      })
    } else {
      msg.reply("Join a voice channel first")
    }

  } else {
    msg.reply("!play [Name of song]")
  }
}
