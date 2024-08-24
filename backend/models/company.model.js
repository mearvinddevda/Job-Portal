import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  website: {
    type: String,
  },
  location: {
    type: String,
    required: true
  },
  logo: {
    type: String, //URL to company logo
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
},{timeStamps:true});
