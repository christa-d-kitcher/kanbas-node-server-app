
import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
                                           //id: { type: String, required: true, unique: true },
                                           name: String,
                                           number: String,
                                           startDate: String,
                                           endDate: String,
                                           image: String,
                                           department: String,
                                           credits: Number,
                                           description: String},
                                       { collection: "courses" });
export default courseSchema;

