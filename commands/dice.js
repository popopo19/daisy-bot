module.exports = (msg, words) => {
  let len = words.length
  if (!isNaN(words[1]) && len == 2) {
    let rand = Math.floor(Math.random() * words[1])
    msg.reply(rand)
  } else {
    msg.reply("!dice [number]")
  }
}
