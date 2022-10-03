 import fetch from "node-fetch";
 import { load } from "cheerio";
// const url =
//   "https://www.goodreads.com/quotes/tag/philosophy#:~:text=%E2%80%9CTwo%20things%20are%20infinite%3A%20the,not%20sure%20about%20the%20universe.%E2%80%9D&text=%E2%80%9CBe%20the%20change%20that%20you,to%20see%20in%20the%20world.%E2%80%9D&text=%E2%80%9CWithout%20music%2C%20life%20would%20be%20a%20mistake.%E2%80%9D";


 async function authors_with_quotes (url) {
    const response = await fetch(url);
    const body = await response.text();

    let $ = load(body);

    let author = $(".authorOrTitle");
    let quote = $(".quoteText");
    let image = $(".leftAlignedImage");

    //  Data for Quote ----->  console.log(temp_string[2].children[0].data)
    //  Data for author -----> temp_string[0].children[0].data
    //Data for image ------> image[0].attribs.href

    //Data cleaning for author

    var i = 0;
    var list_authors = [];
    while (i < author.length) {
      if (author[i].children[0].data.indexOf(",") != -1) {
        let temp_author = author[i].children[0].data.replace(",", "");
        list_authors.push(temp_author);
        i = i + 2;
        continue;
      }

      list_authors.push(author[i].children[0].data);
      i++;
    }

    let list_quotes = [];
    let list_images = [];
    for (i = 0; i < quote.length; i++) {
      list_quotes.push(quote[i].children[0].data);
    }

    let final_sub_data = [{}];

    for (i = 0; i < list_quotes.length; i++) {
let temp_item = {}


if (list_quotes[i].indexOf('“') > -1) { list_quotes[i]=list_quotes[i].replace('“','') }
if (list_quotes[i].indexOf('”') > -1) { list_quotes[i]=list_quotes[i].replace('”','') }



      temp_item.quote = list_quotes[i];
      temp_item.author = list_authors[i];
      
      final_sub_data.push(temp_item)
      
    }

    return final_sub_data;
  };



  async function list_urls(url){

    for(let i=1;i<=100;i++){
    let temp_url = `https://www.goodreads.com/quotes/tag/philosophy?page=${i}`;
    url.push(temp_url);  
  }
   
return url;

  }

  export {authors_with_quotes,list_urls}



