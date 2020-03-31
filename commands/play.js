module.exports = (client, msg) => {
  if (msg.member.voice.channel) {
    const connection = await msg.member.voice.channel.join()
  } else {
    msg.reply("Join a voice channel first")
  }
}
