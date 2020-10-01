const Discord = require('discord.js');
const db = require('../database/database')
const config = require('../config.json')
const url = require('url');

module.exports = {
    name: "claim",
    aliases: [],
    cooldown: 3,
    /**
     * 
     * @param {Discord.Client} client 
     * @param {Discord.Message} message 
     * @param {Array<String>} args 
     */
    execute(client ,message, args){
        let length = args.length;
        if(length == 0){
            // For now, just generate a random card. We don't really need to care atm
            let card = client.cache.getCard();
            console.log(card);
            
            let emved = {
                description: `Congratulations! You claimed ${card.CardName}! :tada:\nIt costed you 50 \`🍉\` watermelons`,
                image: {
                    url: "https://raw.githubusercontent.com/p4ndaexpress/yunho/master/cards/ateez/one_to_all/san.jpg"
                },
                footer: {
                    text: "Made with love by P4nda"
                }
            }
            message.channel.send({embed: emved});
        } 
        else if(length == 1){
            let type = args[0].toLowerCase();
            
        }
    }
}