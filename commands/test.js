module.exports = {
    name: "test",
    aliases: ['te'],
    cooldown: 3,
    requiresBotOwner: true,
    execute(client, message, args){
        message.channel.send("HEllo ,Word!");
    }
}