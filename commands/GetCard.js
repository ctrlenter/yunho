const db = require('../database/database')

module.exports = {
    name: "getcard",
    aliases: ['gc'],
    /**
     * 
     * @param {*} message 
     * @param {Array<String>} args 
     */
    execute(message, args){
        if(args.lenght < 1){
            return message.reply("Usage: ;getcard <card name> [album]");
        }
        else{
            let cardName = args[0];
            let album = "";
            args.length > 1 ? album = args.slice(1).join(" ") : album = "";
            db.GetCardFromName(cardName, (res) => {
                console.log(res[0].CardName);
            });
        }
    }
}