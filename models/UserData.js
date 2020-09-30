class UserData{
    constructor(discordId,watermelon,level,exp,hugs,lasthugger){
        this.DiscordID = discordId;
        this.Watermelon = watermelon;
        this.Level = level;
        this.Exp = exp;
        this.Hugs = hugs;
        this.LastHugger = lasthugger;
    }
}

module.exports = UserData;