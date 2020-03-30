module.exports = (msg, mention_users) => {
  require('dotenv')
  const twilio = require("twilio")
  const twilio_client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN)

  for (let i = 0; i < mention_users.length; i++) {
    if (mention_users[i].id === '203585398671147008') {
      let words = msg.content.split(" ")
      console.log("1st Split:", words)

      for (let j = 0; j < words.length; j++) {
        if (words[j].match(/<a/gi).length == 1) {
          words[j] = words[j].username
        }
      }

      console.log("2nd Split:", words)
      words.join(" ")
      console.log("Joined:", words)

      // twilio_client.messages.create({
      //   to: process.env.YANG_NUM.toString(),
      //   from: process.env.TWILIO_NUM.toString(),
      //   body: words
      // })
    }
  }
}
