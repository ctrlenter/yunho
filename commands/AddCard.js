const db = require('../database/database')
const Discord = require('discord.js')

module.exports = {
    name: "addcard",
    aliases: ['ac'],
    requiresBotOwner: true,
    /**
     * 
     * @param {Discord.Message} message 
     * @param {Array<String>} args 
     */
    execute(client, message, args){
        if(args.length < 4){
            return message.reply("Need more parameters.\nUsage: ;addcard <cardname> <cardprice> <image> <type>");
        }
        else{
            let name = args[0];
            let price = args[1];
            let image = args[2];
            let type = args[3];
            //let album = args.slice(4).join(" "); //will be defined with some json files instead
            db.AddCard(name, price, image, type, (res) => {
                console.log(`Added card\nRes: ${res}`);
                message.reply(`Added card ${name}`);
            });

        }
    }
}