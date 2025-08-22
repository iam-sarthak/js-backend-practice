import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    }
});

module.exports = mongoose.model("User", userSchema);