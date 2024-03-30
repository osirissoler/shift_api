import mongoose, { Schema, model, Types } from "mongoose";
import moment from "moment";

export interface favorite extends mongoose.Document {
    isFavorite:boolean;
    business: Types.ObjectId;
    user: Types.ObjectId;
}

const favoriteSchema = new Schema({
    isFavorite: {
        type: Boolean,
        default: true,
    },
    business: {
        type: Schema.Types.ObjectId,
        ref: "Business",
        require: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
});

export default  model<favorite>('Favorite', favoriteSchema);