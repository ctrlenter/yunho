const Discord = require('discord.js');
const db = require('../database/database')
const config = require('../config.json')

module.exports = {
    name: "balance",
    aliases: ["bal"],
    cooldown: 3,
    /**
     * 
     * @param {Discord.Client} client 
     * @param {Discord.Message} message 
     * @param {Array} args 
     */
    execute(client ,message, args){
        let user = message.author;
        db.ContainsUser(user.id, exists => {
            if(exists){
                //Get user data
                db.GetUserData(user.id, data => {
                    let embed = new Discord.MessageEmbed();
                    embed.setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL()}`);
                    embed.setDescription(`${user} you have ${data.Watermelon} watermelons :watermelon:`);
                    embed.setFooter(`Made by P4nda with love <3`);

                    message.channel.send({embed: embed});
                });
            }else{
                //try again
                this.execute(client,message,args);
            }
        });
    }
}