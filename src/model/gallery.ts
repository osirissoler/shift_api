import mongoose, { Schema, model, Types } from "mongoose";

export interface gallery extends mongoose.Document {
    isActive: boolean;
    isDeleted: boolean;
    created_at: string;
    updated_at: string;
    specialists: Types.ObjectId;
    services: Types.ObjectId;
    url:string
}

const gallerySchema = new Schema({
    
    url: {
        type: String,
        require: true,
        default:''
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
    specialists: {
        type: Schema.Types.ObjectId,
        ref: "Specialists",
        require: true,
    },
    services: {
        type: Schema.Types.Array,
        ref: "Services",
        require: true,
    },
});

export default model<gallery>('Gallery', gallerySchema);