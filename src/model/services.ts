import mongoose, { Schema, model, Types } from "mongoose";

export interface services extends mongoose.Document {
    name: string;
    price: Number;
    time: string;
    isActive: boolean;
    isDeleted: boolean;
    created_at: string;
    updated_at: string;
    specialists: Types.ObjectId;
    description:string
}

const servicesSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: false,
        default: 0.00
    },
    time: {
        type: String,
        require: false,
    },
    description: {
        type: String,
        require: false,
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
});

export default model<services>('Services', servicesSchema);