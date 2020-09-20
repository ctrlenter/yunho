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

module.exports.GetAllCards = (cb) => {
    con.query(`SELECT * FROM Cards`,(err,res,fields) => {
        if(err) throw err;
        cb(res);
    });
}

module.exports.GenerateCard = (userId, cardName, cardAlbum, grade ,cb) => {
    con.query(`INSERT INTO usercards(OwnerId, CardName, CardAlbum, Grade)
            VALUES('${userId}' , '${cardName}' , '${cardAlbum}' , '${grade}')`, (err, res, fields) => {
                if(err) throw err;
                cb(res);
            });
}

module.exports.AddCard = (cardName, cardPrice, album, cardImage, cb) => {
    con.query(`INSERT INTO Cards(CardName, CardPrice,  Album, CardImage)
        VALUES('${cardName}', '${Number(cardPrice)}', '${album}', '${cardImage}')`,(err, res, fields) =>{
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