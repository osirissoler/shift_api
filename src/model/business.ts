import mongoose, { Schema, model, Types } from "mongoose";
import moment from "moment";

export interface business extends mongoose.Document {
    name:string;
    img:string;
    coverImg:string
    isActive:boolean;
    isDeleted:boolean;
    address:string;
    about:string
    rol: Types.ObjectId;
    email: string;
    password: string;
}

const businessSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    img:{
        type:String,
        require:false,
        default:''
    },
    coverImg:{
        type:String,
        require:false,
        default:''
    },
    address:{
        type:String,
        require:false,
        default:''
    },
    about:{
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
    typeBusiness: {
        type: Schema.Types.ObjectId,
        ref: "TypeBusiness",
        require: true,
    },
    email: {
        type: String,
        require: false,
    },
    rol: {
        type: Schema.Types.ObjectId,
        ref: "Roles",
        require: true,
        default:'65e29d1ea2d985632722303f'
    },
    password: {
        type: String,
        require: true,
    },
});

export default  model<business>('Business', businessSchema);