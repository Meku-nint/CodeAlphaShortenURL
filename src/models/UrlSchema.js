import mongoose from "mongoose";
const Schema=mongoose.Schema;
const urlSchema=new Schema({
  originalUrl:{
    type:String,
    required:true
  },
  shortUrl:{
    type:String,
    required:true
  },
  clickCount:{
    type:Number,
    default:0
  }
},{
  timestamps:true
})
export default mongoose.model("url_schema",urlSchema)