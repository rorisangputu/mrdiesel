import mongoose, { Schema, Document, Model } from "mongoose";
import { VendorType } from "../shared/types";

const vendorSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    fuelTypes: [{
        type: String,
        required: true
    }],
    address: {
        type: String,
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    serviceAvailable: {
        type: Boolean
    },
    coverImage: {
        type: String
    },
    imageUrls: [{
        type: String
    }]
}, {
    toJSON: {
        transform(doc, ret){
            delete ret.password,
            delete ret.salt,
            delete ret.__v,
            delete ret.createdAt,
            delete ret.updatedAt
        }
    },
    timestamps: true
});

const Vendor = mongoose.model<VendorType>("Vendor", vendorSchema)
export default Vendor;
