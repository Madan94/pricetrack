import axios from "axios";
import * as cheerio from "cheerio";
import { extractPrice } from "../utils";

export async function scrapAmazonProduct(url:string){
    if(!url) return;
    // BrightData Proxy Configuration for Scrap Products
    const username=String(process.env.BRIGHT_DATA_USERNAME);
    const password=String(process.env.BRIGHT_DATA_PASSWORD);
    const port=33335;
    const session_id=(1000000 * Math.random()) | 0;
    const options={
        auth:{
            username:`${username}-session-${session_id}`,
            password,

        },
        host:"brd.superproxy.io",
        port,
        rejectUnauthorized:false,
    }

    try{
        const response=await axios.get(url,options);
        const $=cheerio.load(response.data);
        const title=$("#productTitle").text().trim();
        console.log(title);
        const price=extractPrice(
            $('.priceToPay span.a-price-whole'),
            $('a.size-base.a-color-price'),
            $('.a-button-selected .a-color-base')
        );
        console.log(price);
        const imageUrl=$("#imgTagWrapperId img").attr("src") || "";
        console.log(imageUrl);
        const rating=$("#acrPopover").attr("title")?.trim() || "";
        console.log(rating);
        const totalReviews=$("#acrCustomerReviewText").text().trim() || "";
        console.log(totalReviews);
    }catch(error:any){
        throw new Error(`Failed to Scrap Product: ${error.message}`);
    }
}
