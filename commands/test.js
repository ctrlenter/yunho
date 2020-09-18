module.exports = {
    name: "test",
    aliases: ['te'],
    cooldown: 3,
    requiresBotOwner: true,
    execute(message, args){
        message.channel.send("HEllo, World!");
    }
}