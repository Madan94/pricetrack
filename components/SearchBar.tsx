"use client"; // State Management Should be Client Side Componnet
import React, { FormEvent } from "react";
import { useState } from "react";
import { scrapAndStoreProduct } from "@/lib/actions";

const isValidAmazonProductUrl=(url:string)=>{
    try{
        const parsedUrl=new URL(url);
        const hostname=parsedUrl.hostname;

        if(hostname.includes("amazon.com") || hostname.includes("amazon.") || hostname.endsWith("amazon")){
            return true;
        }else{
            return false;
        }
    }catch(error){
        console.log(error);
        return false;
    }
};

const SearchBar=()=>{
    const [searchPrompt,setSearchPrompt]=useState("");
    const[isLoading,setIsLoading]=useState(false);

    const handleSubmit=async (event:FormEvent<HTMLFormElement>)=>{
            event.preventDefault();
            const isValidLink=isValidAmazonProductUrl(searchPrompt);
            if(!isValidLink)alert("Please enter a valid Amazon product URL");
            
            try{
                setIsLoading(true);
                // Scrap the Product Details from the Amazon URL
                const product= await scrapAndStoreProduct(searchPrompt);
            } catch(error){
                console.log(error);
            } finally{
                setIsLoading(false);
            }
    }

    return(
        <form action="" className="flex flex-wrap gap-4 mt-8" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search Products" value={searchPrompt} onChange={(e)=>setSearchPrompt(e.target.value)}  className="searchbar-input"/>
            <button type="submit" className="searchbar-btn" disabled={searchPrompt===''}>
                {isLoading?"Searching....":"Search"}
            </button>
        </form>
    )
}

export default SearchBar;
