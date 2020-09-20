module.exports = {
    name: "test",
    aliases: ['te'],
    cooldown: 3,
    requiresBotOwner: true,
    execute(client, message, args){
        message.channel.send(`xd ${client.cardsCache}`);
        message.channel.send(`client.cardsCache length: ${client.cardsCache.length}`);
    }
}