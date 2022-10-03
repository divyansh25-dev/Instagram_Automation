import fetch from "node-fetch";
import { load } from "cheerio";
import  {authors_with_quotes,list_urls} from './single_page_scrap.js'
import { MongoClient } from 'mongodb'
//import {quotesSchema} from './philosophy_db/quotes_db.js'
// var MongoClient = require('mongodb').MongoClient;
// var url_mongo = "mongodb://localhost:27017/";
var url_mongo = "mongodb://localhost:27017/";

let empty_array = []
let url_list = await list_urls(empty_array)



for(let i=0;i<url_list.length;i++){

let temp_data = []

temp_data =await authors_with_quotes(url_list[i])


MongoClient.connect(url_mongo, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Philosophy");

  dbo.collection("Quotes").insertMany(temp_data, function(err, res) {
    if (err) throw err;
    //console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});

}


//console.log(final_data)





// const final_obj = new quotesSchema({
//   author:"Test Author",
//   quote:"This is the test Quote"
// })



// for(let i=0;i<final_data.length;i++){

// }
