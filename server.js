const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "TOKEN, 
prefix: "h!" 
})
bot.onMessage()
 


bot.status({
  text: "h!help | $pingms | https://discord.gg/6Zmx9QAeEf",
  type: "PLAYING",
  time: 12
});

bot.command({
name: "ping", 
code: `Pong! \`$ping\`` 
})


bot.command({
name: "$alwaysExecute", 
code: $onlyIf[$channelID==$getServerVar[chatbotchannel];]
$jsonRequest[https://some-random-api.ml/chatbot?message=$message+1;response]
})

bot.variables({
chatbotchannel: "Not Set",
user_ID: "undefinied",
user_message: "undefinied"
}
