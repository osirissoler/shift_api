import mongoose, { Schema, model, Types } from "mongoose";
import moment from "moment";

export interface rol extends mongoose.Document {
    name:string;
    code:string;  
}

const rolSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    code:{
        type:String,
        require:true
    },
})

export default  model<rol>('Roles', rolSchema);