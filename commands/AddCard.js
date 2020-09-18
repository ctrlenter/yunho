const db = require('../database/database')

module.exports = {
    name: "addcard",
    aliases: ['ac'],
    requiresBotOwner: true,
    /**
     * 
     * @param {*} message 
     * @param {Array<String>} args 
     */
    execute(message, args){
        if(args.length < 5){
            return message.reply("Need more parameters.\nUsage: ;addcard <cardname> <cardprice> <rarity> <album> <cardimage>");
        }
        else{
            let name = args[0];
            let price = args[1];
            let rarity = args[2];
            let image = args[3];
            let album = args.slice(4).join(" ");
            db.AddCard(name,price,rarity,album,image, (res) => {
                console.log(`Added card\nRes: ${res}`);
            });

            "../cards/ateez/one_to_all/wooyoung.jpg"
        }
    }
}