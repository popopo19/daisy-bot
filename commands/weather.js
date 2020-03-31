module.exports = (msg, words) => {

  if (words.length == 2) {
    const got = require('got')

    let link = `http://api.openweathermap.org/data/2.5/weather?q=${words[1]}&appid=${process.env.WEATHER_KEY}`
    console.log("Link:", link)
    let output = ""
    let data = got(link)
    console.log(data.body)
  } else {
    msg.reply("!weather [city]")
  }
}

// .then(response => {
//   output += `${response.name}, ${response.sys.country}\nDiscription: ${response.weather.description}\t\tTemperature: ${(response.main.temp - 273.15) * (9/5) + 32}F\nHumidity: ${response.main.humidity}%`
//   console.log("Output:", output)
//   msg.channel.send(output)
// }).catch(err => {
//   msg.reply("Invalid City")
// })
