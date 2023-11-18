import moment from "moment";
import mongoose, { Schema, model, Types } from "mongoose";

export interface reviews extends mongoose.Document {
    time: string;
    isActive: boolean;
    isDeleted: boolean;
    created_at: string;
    updated_at: string;
    user: Types.ObjectId;
    specialists: Types.ObjectId;
    description:string;
    formattedTimeDifference: string; 
}

const reviewsSchema = new Schema({
    time: {
        type: String,
        require: false,
        default: new Date().toISOString(),
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
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    specialists: {
        type: Schema.Types.ObjectId,
        ref: "Specialists",
        require: true,
    },
});

export default model<reviews>('Reviews', reviewsSchema);