/*Mongo DB*/
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var books = [{
      id:1,
      "isbn": "9781123153843",
      "cim": "Fecske-torony",
      "szerzo": "Andrzej Sapkowski",
      "kiadas": "2004",
      "ar": 472,
      "db" : 12,
      "img":"https://cdn.clipart.email/4021e8a723b119115660073fc79149ff_clipart-book-top-82-book-clip-art-free-clipart-image-clipart-for-_510-352.jpeg#.Xp2-GD4eyTY.link",
      "leiras": "Fantasy"
    
    },
    {
      id:2,
      "isbn": "9781456731712",
      "cim": "A tó úrnője",
      "szerzo": "Andrzej Sapkowski",
      "kiadas": "2014",
      "ar": 1254,
      "db" : 32,
      "img":"https://cdn.clipart.email/4021e8a723b119115660073fc79149ff_clipart-book-top-82-book-clip-art-free-clipart-image-clipart-for-_510-352.jpeg#.Xp2-GD4eyTY.link",
      "leiras": "Fantasy"
    },
    {
      id:3,
      "isbn": "9781123264052",
      "cim": "Tűzkeresztség",
      "szerzo": "Andrzej Sapkowski",
      "kiadas": "2011",
      "ar": 1360,
      "db" : 26,
      "img":"https://sh-s7-live-s.legocdn.com/is/image/LEGO/2131https://cdn.clipart.email/4021e8a723b119115660073fc79149ff_clipart-book-top-82-book-clip-art-free-clipart-image-clipart-for-_510-352.jpeg#.Xp2-GD4eyTY.link5",
      "leiras": "Fantasy"
    },
    {
      id:4,
      "isbn": "9781495951123",
      "cim": "A megvetés ideje ",
      "szerzo": "Andrzej Sapkowski",
      "kiadas": "1940",
      "ar": 1154,
      "db" : 32,
      "img":"https://sh-s7-live-s.legocdn.com/is/image/LEGO/213https://cdn.clipart.email/4021e8a723b119115660073fc79149ff_clipart-book-top-82-book-clip-art-free-clipart-image-clipart-for-_510-352.jpeg#.Xp2-GD4eyTY.link15",
      "leiras": "Fantasy"
    },
    {
      id:5,
      "isbn": "9781593277574",
      "cim": "A végzet kardja",
      "szerzo": "Andrzej Sapkowski",
      "kiadas": "2001",
      "ar": 982,
      "db" : 84,
      "img":"https://shhttps://cdn.clipart.email/4021e8a723b119115660073fc79149ff_clipart-book-top-82-book-clip-art-free-clipart-image-clipart-for-_510-352.jpeg#.Xp2-GD4eyTY.link-s7-live-s.legocdn.com/is/image/LEGO/21315",
      "leiras": "Fantasy"
    },
    {
      id:6,
      "isbn": "9781411004123",
      "cim": "Az utolsó kívánság",
      "szerzo": "Andrzej Sapkowski",
      "kiadas": "1995",
      "ar": 1278,
      "db" : 12,
      "img":"https://https://cdn.clipart.email/4021e8a723b119115660073fc79149ff_clipart-book-top-82-book-clip-art-free-clipart-image-clipart-for-_510-352.jpeg#.Xp2-GD4eyTY.linksh-s7-live-s.legocdn.com/is/image/LEGO/21315",
      "leiras": "Fantasy",
    },
    ];

MongoClient.connect(url, function(err, db) {
 
  var dbo = db.db("mydb");

/*User Collection  Létrehozása*/

  dbo.createCollection("user", function(err, res) {

    console.log("Collection created!");
  });

/*Items Collection Létrehozása*/


  dbo.createCollection("items", function(err, res) {
     
      console.log("Collection created!");
      dbo.collection("items").insertMany(books, function(error, inserted) {
           if(error) {
               console.error(error);
           }
           else {
               console.log("Successfully inserted: " , inserted );
           }
       }); 

    });

});
