module.exports = (client, msg, words) => {
  let music = words.slice(1).join(" ")

  if (words.length > 1) {

    if (msg.member.voice.channel) {
      const connection = msg.member.voice.channel.join()
      const yts = require('yt-search')
      const ytdl = require('ytdl-core')

      yts(music, (err, r) => {
        console.log("R:",r)
        const video = r.videos[0]
        console.log("Video:", video)
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
