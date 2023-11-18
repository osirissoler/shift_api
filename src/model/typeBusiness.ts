import mongoose, { Schema, model, Types } from "mongoose";
import moment from "moment";

export interface typeBusiness extends mongoose.Document {
    name:string;
    code:string;
    img:string;
    isActive:boolean;
    isDeleted:boolean;
    // rol: Types.ObjectId;
}

const typeBusinessSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    code:{
        type:String,
        require:true
    },
    img:{
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
    // rol: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Roles",
    //     require: true,
    //     default:'6557fee3e84e6f80776675f0'
    // },
});

export default  model<typeBusiness>('TypeBusiness', typeBusinessSchema);