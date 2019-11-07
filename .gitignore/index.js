const Discord = require("discord.js")
const client = new Discord.Client()
const prefix = "!"

client.on('message', message => {

  if (message.content.startsWith(prefix + 'mp')){
    let messageArray = message.content.split(" "); let cmd = messageArray[0]; let args = messageArray.slice(1);

                if(message.channel.type === "dm") return;
                if(message.deletable) message.delete();

                let MpMessage = args.slice(0).join(" ");

                message.guild.members.forEach(member => {
                    member.send(MpMessage)
    })
 }
});

client.login(process.env.TOKEN)
