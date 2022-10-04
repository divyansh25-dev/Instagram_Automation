import { MongoClient } from "mongodb";
import fs from 'fs'
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("Philosophy");
   dbo
    .collection("Quotes")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      // convert JSON object to a string
      const data = JSON.stringify(result);

      // write JSON string to a file
      fs.writeFile("quotes.json", data, (err) => {
        if (err) {
          throw err;
        }
        console.log("JSON data is saved.");
      });
      db.close();
    });
});


//Run this file only once using node quotes_db.js