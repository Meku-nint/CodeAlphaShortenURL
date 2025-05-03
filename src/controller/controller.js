import url_schema from "../models/UrlSchema.js";

export const createShortUrl=async(req,res)=>{
    const {originalUrl}=req.body;
    if(!originalUrl){
        return res.status(400).json({error:"Please provide a valid url"})    
    }        
    try {
        let url=await url_schema.findOne({originalUrl})
        if(url){
            return res.status(200).json({shortUrl:url.shortUrl})
        }
        url=await url_schema.create({originalUrl})
        return res.status(200).json({shortUrl:url.shortUrl})
    } catch (error) {
        return res.status(500).json({error:"Server error"})
    }
}