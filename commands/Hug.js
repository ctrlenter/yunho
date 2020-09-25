const Discord = require('discord.js');
const db = require('../database/database')

module.exports = {
    name: "hug",
    aliases: [],
    cooldown: 3,
    /**
     * 
     * @param {Discord.Client} client 
     * @param {Discord.Message} message 
     * @param {Array} args 
     */
    execute(client ,message, args){
        let toHug = message.mentions.members.first();
        if(toHug){
            db.ContainsUser(toHug.id, res =>{
                console.log(res);
                if(res){
                    //Add Hug.
                    db.AddHug(toHug.id, message.author.username);
                }else{
                    //Add user THEN hug
                    db.AddUser(toHug.id);
                    db.AddHug(toHug.id, message.author.username);
                }
                message.channel.send(`${message.author} hugged ${toHug} <3`);
            });
        }
    }
}