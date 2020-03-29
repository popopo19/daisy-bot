module.exports = (client, msg) => {
  const cmd = require("../commands/cmd.json")
  let words = msg.content.split(" ")

  if (cmd.riddle.current == null || words.length == 1) {
    let rand = Math.floor(Math.random() * cmd.riddle.questions.length)

    cmd.riddle.current = rand
    msg.channel.send(cmd.riddle.questions[rand])
  } else {

    let correct = false

    for (let i = 1; i < words.length; i++) {
      for (let j = 0; j < cmd.riddle.answers[cmd.riddle.current].length; j++) {
        if (words[i] == cmd.riddle.answers[j]) {
          correct = true
        }
      }
    }
    if (correct == true) {
      cmd.riddle.current = null
      msg.reply("You got the right answer")
    } else {
      msg.reply("You got the wrong answer")
    }
  }
}
