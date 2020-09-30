const Discord = require('discord.js');
const db = require('../database/database')
const config = require('../config.json')

module.exports = {
    name: "claim",
    aliases: [],
    cooldown: 3,
    /**
     * 
     * @param {Discord.Client} client 
     * @param {Discord.Message} message 
     * @param {Array} args 
     */
    execute(client ,message, args){
        let length = args.length;
        if(length == 0){
            
        }
    }
}