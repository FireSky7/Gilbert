const { joinVoiceChannel } = require("@discordjs/voice");
const { Client, GatewayIntentBits, VoiceChannel } = require("discord.js");
const { VoiceConnection} = require("discord.js");
const client = new Client ({
    intents : [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMembers
]});

client.on("ready",() => {
  console.log("Je suis connecté !")
})
client.on("messageCreate", message => {

    if (message.content === "gilbert") {
        message.channel.send("https://cdn.discordapp.com/attachments/928723523566985236/1035987478181597185/gilbert-1.mp4");
        
    }
  
  })
client.login(process.env.TOKEN);
