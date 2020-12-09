const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "TOKEN, 
prefix: "h!" 
})
bot.onMessage()
 
const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(./commands/${files}/).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(./commands/${files}/${commands}) 
bot.command({
name: command.name,
code: command.code
})
} 
}

bot.status({
  text: "h!help | $pingms | https://discord.gg/6Zmx9QAeEf",
  type: "PLAYING",
  time: 12
});

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
