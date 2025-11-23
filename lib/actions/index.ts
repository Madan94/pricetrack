"use server";

import { scrapAmazonProduct } from "../scraper";

export async function scrapAndStoreProduct(productUrl:string){
    if(!productUrl) return;

    try{
        const scrapedProduct=await scrapAmazonProduct(productUrl);
        console.log(scrapedProduct);
    }catch(error: any){
        throw new Error(`Failed to scrap product details : ${error.message}`);
    }
}