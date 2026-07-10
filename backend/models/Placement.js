import mongoose from "mongoose";

const placementSchema = new mongoose.Schema({

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    company:{
        type:String,
        required:true
    },

    role:{
        type:String,
        required:true
    },

    status:{
        type:String,
        default:"Applied"
    },

    notes:{
        type:String,
        default:""
    }

},{
    timestamps:true
});

export default mongoose.model(
    "Placement",
    placementSchema
);