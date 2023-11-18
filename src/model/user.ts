import mongoose, { Schema, model, Types } from "mongoose";

export interface user extends mongoose.Document {
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
    rol: Types.ObjectId;
    location: string;
    isGoogle: boolean;
    isFacebook: boolean;
    code:string
}

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
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
    rol: {
        type: Schema.Types.ObjectId,
        ref: "Roles",
        require: true,
        default:'6557fee3e84e6f80776675f0'
    },
    // typeBusiness: {
    //     type: Schema.Types.ObjectId,
    //     ref: "TypeBusiness",
    //     require: true,
    //     default:'655801f1dcfd905320339e9a'
    // },
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
   
    
});

export default model<user>('User', userSchema);