module.exports = (msg, words) => {

  if (words.length == 2) {
    const got = require('got')

    let link = `http://api.openweathermap.org/data/2.5/weather?q=${words[1]}&appid=${process.env.WEATHER_KEY}`
    console.log("Link:", link)
    let data = got(link).then(response => {
      const obj = JSON.parse(response.body)
      let output = `${obj.name}, ${obj.sys.country}\nDiscription: ${obj.weather.description}\t\tTemperature: ${(obj.main.temp - 273.15) * (9/5) + 32}F\nHumidity: ${obj.main.humidity}%`
      msg.channel.send(output)
    }).catch(error => {
      msg.reply("Invalid City")
    })
  } else {
    msg.reply("!weather [city]")
  }
}
