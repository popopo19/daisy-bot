module.exports = (client, msg, words) => {
  let music = words.slice(1).join(" ")
  console.log("Music:", music)

  if (words.length > 1) {

    if (msg.member.voice.channel) {
      // const yts = require('yt-search')
      const search = require('youtube-search')
      const ytdl = require('ytdl-core')
      const url = 'https://www.youtube.com/watch?v=KRcj6gkfx4c'
      const opts = {
        maxResults: 1,
        key: process.env.YT_KEY
      }

      // search(music, opts, (err, r) => {
      //   url = r.link
      //   console.log(url)
      // })

      msg.member.voice.channel.join()
      const connection = client.voice.connection
      const dispatcher = connection.play(ytdl(url, { filter: 'audioonly' }))

    } else {
      msg.reply("Join a voice channel first")
    }

  } else {
    msg.reply("!play [Name of song]")
  }
}
