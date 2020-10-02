module.exports = {
    name: "cache",
    aliases: ['te'],
    cooldown: 3,
    requiresBotOwner: true,
    execute(client, message, args){
        message.channel.send(client.cache.cards);
    }
}