# daisy-bot
Personal bot for Discord.

## Features

* Commands
  * !dice !help !motivate !play(In development) !poll !riddle !weather
* APIs
  * Discord
  * Twilio
  * @discordjs/opus
  * ffmpeg-static

## Organization of the code

The program that gets run is __index.js__. It listens for events and the event handler is in the __events folder__.

All commands through the message event are in the __commands__ folder.

## Naming convention

__Functions:__

```
// camalCase function names

function camalCase () {
  // Body
}

```
