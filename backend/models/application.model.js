import { application } from "express";
import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job',
        required:true
    },
    application:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        requiref:true
    },
    status:{
        type:String,
        enum:['pending','accepted','rejected'],
        default:'pending'
    }

},{
    timeStamps:true
});

export const Application = mongoose.model("Application",applicationSchema)