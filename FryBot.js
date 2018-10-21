const Discord = require('discord.js');
const client = new Discord.Client();
const token = "NTAzMzgyMDQ5MjIzMjEzMDU4.Dq1sLw.SIYn455ygsc3Pz3X9TQxQd8Bk8A"; // Token goes here.
const updateRate = 1800000; // Half hour
const millisecondsToYears = 0.0000000000317098;

// Year Percentage
const sendOnPercentages = 0.03;
var currentPercent = NaN;

// Status Changing
const statusChangeChance = 2;
const statuses = ['Calculating', 'Beep boop beep', 'Bot things', 'Frying'];

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
	else if(message.content.toLowerCase().includes('oh my god') || message.content.toLowerCase().includes('oh no') || message.content.toLowerCase().includes('oh shi'))
	{
		if(!message.author.bot){
			message.channel.send({files: ["serious_shit.jpg"]});
		}
	}
	else if(message.content.toLowerCase().includes('za warudo') || message.content.toLowerCase().includes('jojo reference') || message.content.toLowerCase().includes('oraoraora'))
	{
		if(!message.author.bot){
			message.channel.send("Yo is that a motherfucking Jojo reference?");
		}
	}
	else if(message.content.toLowerCase().includes('thot'))
	{
		if(!message.author.bot){
			message.channel.send("THOT DETECTED", {files: ["thot_destroyer.png"]});
		}
	}
	else if(message.content.toLowerCase().includes('i am a furry') || message.content.toLowerCase().includes('i\'m a furry') || message.content.toLowerCase().includes('im a furry'))
	{
		if(!message.author.bot){
			message.channel.send("No you\'re not, " + message.author);
		}
	}
	else if(message.content.toLowerCase().includes('furry') || message.content.toLowerCase().includes('furries'))
	{
		if(!message.author.bot){
			message.channel.send("Speaking of furries, here's everyone's friendly reminder that yiffing is a bannable offense.");
		}
	}
	else if(message.content.toLowerCase().includes('data'))
	{
		if(!message.author.bot){
			message.channel.send("DATABASE DATABASE");
		}
	}
});

client.on('guildMemberAdd', member => {
	member.guild.channels.get('483792663640932352').send("Whoa there " + member.user.username + ", I'm gonna need to see some ID buddy. Head over to network-bar and introduce yourself.", {files: ["bouncer.jpg"]});
});

client.on('ready', () =>
{
    Update();
});

function Update()
{
    CheckForNextPercentage();
    ChangeStatus();
    setTimeout(arguments.callee, updateRate);
}

function CheckForNextPercentage()
{
    var date = new Date();
    var year = date.getFullYear();
    var yearStart = new Date(year, 0, 0, 0, 0, 0, 0);
    var newPercentage = (date.valueOf() - yearStart.valueOf()) * millisecondsToYears;
    if (newPercentage < currentPercent)
    {
    }
    if (!isNaN(currentPercent) && newPercentage > currentPercent)
    {
        if (Math.floor(newPercentage / sendOnPercentages) > Math.floor(currentPercent / sendOnPercentages))
        {
            for (var idx in client.channels.array())
            {
                var channel = client.channels.array()[idx];
                if (channel.name === 'lobby')
                {
                    channel.send('**Friendly Reminder**: \ntime stops for noone \nThe year is '
                        + Math.floor(newPercentage * 100) + '% done');
                }
            }
        }
    }
    currentPercent = newPercentage;
}

function ChangeStatus()
{
    if (Math.floor(Math.random() * statusChangeChance) == 0)
    {
        client.user.setActivity(statuses[Math.floor(Math.random() * statuses.length)]);
    }
}
