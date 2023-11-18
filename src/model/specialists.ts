import mongoose, { Schema, model, Types } from "mongoose";

export interface specialists extends mongoose.Document {
    name: string;
    email: string;
    address: string;
    cell: string;
    isActive: boolean;
    phone: string;
    password: string;
    img: string;
    city: string;
    isDeleted: boolean;
    created_at: string;
    updated_at: string;
    municipio: string;
    provincia: string;
    business: Types.ObjectId;
    location: string;
    isGoogle: boolean;
    isFacebook: boolean;
    code: string;
    title: string;
    coverImg:string;
}

const specialistsSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: false,
        default: ''
    },
    email: {
        type: String,
        require: false,
    },
    address: {
        type: String,
        require: true,
        default: '',
    },
    cell: {
        type: String,
        require: false,
        default: '',
    },
    phone: {
        type: String,
        require: false,
        default: '',
    },
    password: {
        type: String,
        require: true,
    },
    img: {
        type: String,
        require: false,
        default: '',
    },
    coverImg:{
        type:String,
        require:false,
        default:''
    },
    code: {
        type: String,
        require: false,
        default: '',
    },
    city: {
        type: String,
        require: false,
        default: '',
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    isDeleted: {
        type: Boolean,
        default: false
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
    municipio: {
        type: String,
        default: '',
        require: false
    },
    location: {
        type: String,
        default: '',
        require: false
    },
    provincia: {
        type: String,
        default: '',
        require: false
    },
    isGoogle: {
        type: Boolean,
        default: false,
    },
    isFacebook: {
        type: Boolean,
        default: false,
    },
    business: {
        type: Schema.Types.ObjectId,
        ref: "Business",
        require: true,
        default: '655814972fdc4d68d5a7a849'
    },

});

export default model<specialists>('Specialists', specialistsSchema);