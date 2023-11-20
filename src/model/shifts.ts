import mongoose, { Schema, model, Types } from "mongoose";
import moment from "moment";

export interface shifts extends mongoose.Document {
    shiftsCode:string;
    number:number;
    waitTime:string;
    isDeleted:boolean;
    isActive:boolean;
    //typeBusiness:Types.ObjectId;
    specialists:Types.ObjectId;
    services:Types.ObjectId;
    user:Types.ObjectId;
    typeBusiness:Types.ObjectId;
    created_at:string
    updated_at:string
}

const shiftsSchema = new Schema({
    shiftsCode:{
        type:String,
        require:true
    },
    number:{
        type:Number,
        require:true
    },
    waitTime:{
        type:String,
        require:false,
        default:''
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    created_at: {
        type: String,
        default: new Date().toISOString(),
        require: true
    },
    updated_at: {
        type: String,
        default: new Date().toISOString(),
        require: true
    },
    specialists: {
        type: Schema.Types.ObjectId,
        ref: "Specialists",
        require: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true,
        
    },
    services: {
        type: Schema.Types.ObjectId,
        ref: "Services",
        require: true,
        
    },
    typeBusiness: {
        type: Schema.Types.ObjectId,
        ref: "TypeBusiness",
        require: true,
    },
});

export default  model<shifts>('Shifts', shiftsSchema);