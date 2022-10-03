import fetch from "node-fetch";
import { load } from "cheerio";
import  {authors_with_quotes,list_urls} from './single_page_scrap.js'


let empty_array = []
let url_list = await list_urls(empty_array)

let final_data = []

for(let i=0;i<url_list.length;i++){

let temp_data = []

temp_data =await authors_with_quotes(url_list[i])



final_data.push(temp_data);
}





console.log(final_data)

