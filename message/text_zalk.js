module.exports = (msg, mention_users) => {
  require('dotenv')
  const twilio = require("twilio")
  const twilio_client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN)

  for (let i = 0; i < mention_users.length; i++) {
    if (mention_users[i].id === '203585398671147008') {
      let words = msg.content.split(" ")

      for (let j = 0; j < words.length; j++) {
        if (words[j][0] == '<' && words[j][1] == '@') {
          words[j] = 'zalk'
        }
      }

      words = words.join(" ")

      twilio_client.messages.create({
        to: process.env.YANG_NUM.toString(),
        from: process.env.TWILIO_NUM.toString(),
        body: words
      })
    }
  }
}
