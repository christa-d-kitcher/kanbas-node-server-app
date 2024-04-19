
import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema({
                                             name: String,
                                             description: String,
                                             course: String,
                                             lessons: [{String}]},
                                         { collection: "modules" });
export default moduleSchema;


//{ type: mongoose.Schema.Types.ObjectId, ref: "courses"}