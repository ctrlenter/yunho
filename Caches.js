const db = require('./database/database')
const _ = require('lodash');
const Discord = require('discord.js');

class Cache{
    constructor(){
        this.cards = [];
        this.serverCache = new Discord.Collection();
        db.GetAllCards((res) => {
            for(let i = 0; i < res.length; i++){
                var data = res[i];
                var obj = {
                    ID: data.ID,
                    CardName: data.CardName,
                    CardPrice: data.CardPrice,
                    Album: data.Album,
                    CardImage: data.CardImage
                };
                this.cards.push(obj);
            }
        });
    }

    getCache(){
        return this.cards;
    }

    addNewCards(){
        //make a copy of the current cache
        let CurrentCards = [];
        db.GetAllCards(res => {
            for(let i = 0; i > res.length; i++){
                let card = convertToCard(res[i]);
                CurrentCards.push(card);
            }
            if(this.cards.length < CurrentCards.length){
                //Add all new cards.
                this.cards.push(CurrentCards.slice(this.cards.length-1,CurrentCards.length-1));
            }
        });
    }

    convertToCard(obj){
        var card = {
            ID: obj.ID,
            CardName: obj.CardName,
            CardPrice: obj.CardPrice,
            Album: obj.Album,
            CardImage: obj.CardImage
        };
        return card;
    }

}

module.exports = Cache;