const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const path = require('path')
const Enmap = require('enmap')
const config = require('./config.json')
const db = require('./database/database')

const cooldowns = new Discord.Collection();

client.commands = new Discord.Collection();
client.cardsCache = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith(".js"));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('error', console.error);

client.once('ready', () => {
    let date = new Date();
    console.log(`Logged in as ${client.user.tag}, started on ${date}!`);
    client.user.setActivity('with cards', { type: 'Playing' });
    client.user.setStatus('dnd');
    setInterval(() => {
        db.GetAllCards((res) => {
            cardsCache = [];
            //console.log(`tik tok`);
            for(let i = 0; i < res.length; i++){
                var data = res[i];
                var obj = {
                    ID: data.ID,
                    CardName: data.CardName,
                    CardPrice: data.CardPrice,
                    Album: data.Album,
                    CardImage: data.CardImage
                };
                console.log(obj);
                cardsCache.push(obj);
            }
        });
    }, 10000);
});

client.on('message', (message) => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)
    		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if(!command) return;

    

    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }
    
    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if(timestamps.has(message.author.id)){
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if(now < expirationTime){
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`\"${command.name}\" is currently on cooldown.\nTime left: ${timeLeft.toFixed(1)} seconds`);
        }
    }

    timestamps.set(message.author.id,now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
        if(command.requiresBotOwner){
            if(message.author.id == config.ownerid){
		        command.execute(client, message, args);
            }
        }else{
            command.execute(client, message, args);
        }
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(config.token);