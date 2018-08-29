const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token; // Token goes here.

client.login(token); // login the bot with your token.

client.on('message', message => { // This is where we will handle all message events. Aka, the commands that will trigger the bot.

	if(message.content.toLowerCase().includes('good game'))
	{
		if(!message.author.bot){
			message.channel.send(message.author + " did you just say \'good game\'? We talkin about Sonic Adventure 2?!");	
		}
	}
	else if(message.content.toLowerCase().includes('bad game'))
	{
		if(!message.author.bot){
			message.channel.send(message.author + " did you just say \'bad game\'? We talkin about Sonic Adventure 2?!");	
		}
	}
	else if(message.content.toLowerCase().includes('<@484140516825497600>'))
	{
		if(!message.author.bot){
			message.channel.send("Who has summoned me?");	
		}
	}
	
});