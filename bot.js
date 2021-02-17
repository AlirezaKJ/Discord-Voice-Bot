const Discord = require('discord.js')
const client = new Discord.Client()

// Bot start message
client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})
// Join voice command /join
client.on('message', async message => {
  if (!message.guild) return;
  if (message.content === '/join') {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});
// Join Voice Command /voice
client.on('message', async message => {
  if (!message.guild) return;

  if (message.content === '/voice') {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.reply('You need to join a voice channel fist!');
    }
  }
});
client.login("YOUR-TOKEN-HERE")
