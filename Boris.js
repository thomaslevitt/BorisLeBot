
const Discord = require('discord.js')
const bot = new Discord.Client()
bot.login('MzI0NTQ5OTMzMzY3NTU4MTQ1.DCqyNg.sA5IT2Rbh2nFXVkXxPSCWfTPPus')
bot.on('message', function(message){
  if(message.content==="!ping"){
    message.reply('pong')
  }
  if(message.content==="!dinner"){
    message.reply('Soupe de poisson')
  }
  if(message.content==="!main"){
    message.reply('Torbjorn main !')
  }
  if(message.content==="!best"){
    response =['BerceauCarry',"SyDog147","NeatSmurf"]
    var reply = response[Math.floor(Math.random()*response.length)]
    message.reply(reply)
  }
  if(message.content==="!time"){
    message.reply('L\'heure de bien fermer ta gueule !')
  }
})
