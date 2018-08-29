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
	else if(message.content.toLowerCase().includes('error'))
	{
		if(!message.author.bot){
			message.channel.send("ë̡̱͇͉̖̮͈̥̾̇̀ͪ͛ͩ͊ͅŖ͚͔̞̳͙̻̙̪̮̻ͧ͆̏ͥ͆͒͒̐ͣͥ͋̍ͮ͒ͦ̀ͬ̚̕r̎̏ͨ̅̔̉̈́̑ͫ͆̋͊ͥͣ̂ͭ̒̚̚҉̶̶̱͍̲̗͚̯̳̣̥̙̣̬̖̫̙̺͜ȍ̗̖͍̜͈̱̝ͣͣ̆̈́̔ͤ̑͝R̢̎̓̎͌̿̑͛̅̃͑ͮ̎̌ͨͩ̈́͆̎̐́͝͝͏̘͉̦͇̥͓̭̙͖ͅͅ ̴̢̛̜̥̘̖͚̭̘̗̳̺̪̘̩ͯͤ͒̇̅̃̋͋̋́̍ͫͭͪͩͮ̀ͯ͜E̿̄͐͐͏͏̸̞͎̰̦͟R͍̺̭͔̯ͫ͛̅̓̚͢͠R̞̘̦̝͍̮̞̫̥̬̻̰̟̤̺͙̲̬̂ͥͬ̾̎͛ͩ͆͆̋̑ͪ͠ͅỎ̆͋̿̇̿ͥ̽ͩͧͥ҉̜̟̰͚̼̤͕̼̗̱̪̱̮̟̗̩͠͠R͇͍̠̟̱̜͉̞̪͕̱͉̜͇̃ͭ̿ͣ̋̐͗̀ͪ̃͆̓̇͝ ̡̨͙͙̟͉̬͕̜͙͗̃ͫ͋͜͝ͅȨ̶̴̡̰̟̹̟͖̪͍̜ͯ̈́ͫ̆̔̀̃̓͒̊̅̎ͧ̍ͅř̔̆͗͘͝͏͍̤̗̠͍̭̭̖o̢̡̘̮̥͕̪͚ͦ̔̅̿̃̑̑̅́̋͛͆̑͋ͨ̊ͣ̊͢R̴̥̝̟̱̭̼̩͒͒̽ͪͣͧͩ̾̐̈́͗ͮͣ̐̂͗̃͛̔̀͞ọ̢̰͕̭͓̥̹̤̩̥̯́̇̆ͮ͒ͪ͘͞r̡͇̟̠͕̺̳̘̟̬̬͎͖̿ͫ́ͭ̎ͣ̈͠o̒͋̍̃̿̒ͣ̃͏̴̣̰̩̮͓͇̠̘̼̯̫̞̻̹͔͈̼̮r̨̛̻͓̝̱̟̝̩͔͙̭̝̂ͫ̊̍ͧ̍̂͋͐͞͝ǫ̣̱͍͔̩̞̠̗̺̺̹̔͗ͩ͋̏̋ͪͨ͐̊̀ͫ̒̓͘r̸̡̡̪̻̳̙̭͉̻̭ͪͣ̓̀̑ͤ̏ͨ͒ͯ͌̿̀ĕ̡̟͉͚̪̠̥͔̻͙̪͔̺̼͉͒͑͗͊̐ͩ̀͘͜͞ͅͅr̢̠͙̣͔̲͇̻̹̪͉͈̼̟͉̤̦͉͋ͭ̓̍̐͐ͬͨ͒͊̃͒̽̅̓͋͝ơ̴̶̞̙̲̰͈̻̩̻̱͉ͪ͒ͧͦ̚r̵͌͊ͨ͋̐҉̦͈̮͍̖͢͡ͅo͐͊̃̓͡҉̥͙͖̪̯͈̬̻̳̙");	
		}
	}
	else if(message.content.toLowerCase().includes('waluigi'))
	{
		if(!message.author.bot){
			message.channel.send("WAH");	
		}
	}
});

client.on('guildMemberAdd', member => {
	member.guild.channels.get('446509945471369218').send("Whoa there " + member.user.username + " , I'm gonna need to see some ID there buddy.", {files: ["bouncer.jpg"]});
});