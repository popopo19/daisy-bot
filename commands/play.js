module.exports = (client, msg, words) => {
  let music = words.slice(1).join(" ")

  if (words.length > 1) {

    if (msg.member.voice.channel) {
      const yts = require('yt-search')
      const ytdl = require('ytdl-core')
      const url = 'https://www.youtube.com/watch?v=KRcj6gkfx4c'

      // yts(music, (err, r) => {
      //   console.log("Once")
      //
      //   const video = r.videos[0]
      //   url = video.url
      // })
      console.log("Twice")
      msg.member.voice.channel.join()
      const connection = client.voice.connections.array()[0]
      // console.log(connection)
      const dispatcher = connection.play(ytdl(url, { filter: 'audioonly' }))
    } else {
      msg.reply("Join a voice channel first")
    }

  } else {
    msg.reply("!play [Name of song]")
  }
}
