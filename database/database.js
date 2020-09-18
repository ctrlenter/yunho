const mysql = require('mysql');
var config = require('../config.json')

var con = mysql.createConnection({
    host: config.server,
    user: config.user,
    password: config.password,
    database: config.database
});

con.connect((err) => {
    if(err) throw err;
    console.log("Connected to the database");
});

module.exports.AddCard = (cardName, cardPrice, rarity, album, cardImage, cb) => {
    con.query(`INSERT INTO Cards(CardName, CardPrice, Rarity, Album, CardImage)
        VALUES('${cardName}', '${Number(cardPrice)}', '${Number(rarity)}', '${album}', '${cardImage}')`,(err, res, fields) =>{
            if(err)throw err;
            cb(res);
        })
}

module.exports.GetCardFromName = (cardName, cb) => {
    con.query(`SELECT * FROM Cards WHERE CardName = '${cardName}'`, (err, res, fields) => {
        if(err) throw err;
        cb(res);
    })
}