module.exports = (client, msg) => {
  const cmd = require("../commands/cmd.json")
  let words = msg.content.split(" ")

  // If no riddle is asked of yet
  if (cmd.riddle.current == null || words[1] == "-n") {
    let rand = Math.floor(Math.random() * cmd.riddle.questions.length)

    cmd.riddle.current = rand
    msg.channel.send(cmd.riddle.questions[rand] + "\nTo answer: !riddle [answer] OR\n for new riddle: !riddle -n")
  // If riddle is already asked, check for correctness
  } else {

    let correct = false

    // Checks if user answer is correct
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
