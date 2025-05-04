import url_schema from "../models/UrlSchema.js";
import { nanoid } from "nanoid";
export const createUrl=async (req, res) => {
    try {
      const { originalUrl } = req.body;
      const shortUrl = nanoid(6);
      const url = new url_schema({
        originalUrl,
        shortUrl,
      });
      await url.save();
      res.json({shortUrl:`${req.protocol}://${req.get("host")}/${shortUrl}`});
    } catch (error) {
      res.status(500).json({ message: "Error creating short URL" });
    }
}
export const Welcome=async (req, res) => {
  try {
    res.json({ message: "Welcome to the URL Shortener API" });
  } catch (error) {
     res.json({message:"Error in the server"})
     console.log(error)
  }
} 
export const redirectUrl=async (req, res) => {
  try{
    const { shortUrl } = req.params;
    const url = await url_schema.findOne({ shortUrl });
    if (!url) {
      return res.status(404).json({ message: "URL not found" });
    }
    res.redirect(url.originalUrl);
  }catch (error) {
    res.json({message:"Error in the server"})
    console.log(error)
  }
}