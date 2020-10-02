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
        let card;
        if(length == 0){
            // For now, just generate a random card. We don't really need to care atm
            let card = client.cache.getCard();
            console.log(card);

        } 
        else if(length == 1){
            let type = args[0].toLowerCase();
            if(type === "boy" || type === "boygroup"){
                //generate boy card
                card = client.cache.getBoyCard();
            }
            else if(type === "girl" || type === "girlgroup"){
                //generate girl card
                card = client.cache.getGirlCard();
            }
        }

                    
        let embed = new Discord.MessageEmbed();
        embed.setDescription(`Congratulations! You claimed ${card.CardName}! :tada:\nIt costed you 50 \`🍉\` watermelons`)
        embed.setImage(card.CardImage);
        embed.setFooter("Made with love by P4nda")

        message.channel.send({embed: embed});
    }
}