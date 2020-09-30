const Discord = require('discord.js');
const db = require('../database/database')
const config = require('../config.json')

module.exports = {
    name: "hugs",
    aliases: [],
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
                db.GetUserData(user.id, res => {    
                    let desc = `${user.username} has been hugged ${res.Hugs} times.`;
                    if(res.LastHugger != "None")
                        desc += `\nThey were last hugged by ${res.LastHugger}`;
            
                    let embed = new Discord.MessageEmbed();
                    embed.setColor("#ff00ff");
                    embed.setTitle(`${user.username}'s hugs`);
                    embed.setFooter("Made by P4nda With love <3");
                    embed.setDescription(desc);

                    
                    message.channel.send("test", {embed: embed});
            
                });
            }else{
                message.channel.send(`Could not find ${user}.\nAdding to the database!`);
                db.AddUser(user.id);
            }
            
        });
        
    }
}