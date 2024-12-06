import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: String,
    name: String
})

export default mongoose.model("user", userSchema);

