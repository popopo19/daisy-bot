module.exports = (msg, words) => {

  if (words.length >= 2) {
    // Get the name inputed by the user
    let name = words.slice(1).join(" ")

    const got = require('got')

    let link = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.WEATHER_KEY}`

    // Get data from api website
    let data = got(link).then(response => {
      // Change data from string to object
      const obj = JSON.parse(response.body)
      let output = `${obj.name}, ${obj.sys.country}\nDiscription: ${obj.weather[0].description}\t\tTemperature: ${((obj.main.temp - 273.15) * (9/5) + 32).toFixed(2)}F\nHumidity: ${obj.main.humidity}%`

      msg.channel.send(output)
    }).catch(error => {
      msg.reply("Invalid City")
    })
  } else {
    msg.reply("!weather [city]")
  }
}
