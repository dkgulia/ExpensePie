import mongoose, { mongo } from "mongoose";

const blogPostSchema = mongoose.Schema({
    month: String,
    total_expense: Number
});

const postModel = mongoose.model('blogPostModel', blogPostSchema);

export default postModel;