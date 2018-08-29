const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDg0MTQwNTE2ODI1NDk3NjAw.DmdrGw.d8csI8m2_7mUarNn-E1iifnwj-8'; // Token goes here.

client.login(token); // login the bot with your token.

client.on('message', message => { // This is where we will handle all message events. Aka, the commands that will trigger the bot.

	if(message.content.toLowerCase().includes('good game'))
	{
		if(!message.author.bot){
			message.channel.send(message.author + " did you just say \'good game\'? We talkin about Sonic Adventure 2?!");	
		}
	}
});