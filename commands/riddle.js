module.exports = (client, msg) => {
  const cmd = require("../commands/cmd.json")
  let words = msg.content.split(" ")

  // If no riddle is asked of yet
  if (cmd.riddle.current == null || words[1] == "-n") {
    let rand = Math.floor(Math.random() * cmd.riddle.questions.length)

    cmd.riddle.current = rand
    msg.channel.send(cmd.riddle.questions[rand] + "\nTo answer: !riddle [answer] \n New riddle: !riddle -n")

  } else if (cmd.riddle.current != null && words.length == 1) {
    msg.channel.send(cmd.riddle.questions[cmd.riddle.current] + "\n\tTo answer: !riddle [answer] \n\tNew riddle: !riddle -n")

  // Checks if user answer is correct
  } else {
    let correct = false

    for (let i = 1; i < words.length; i++) {
      for (let j = 0; j < cmd.riddle.answers[cmd.riddle.current].length; j++) {
        if (words[i].toLowerCase() == cmd.riddle.answers[cmd.riddle.current][j].toLowerCase()) {
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
