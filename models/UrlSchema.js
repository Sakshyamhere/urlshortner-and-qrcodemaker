import mongoose from 'mongoose';
const { Schema } = mongoose;

const UrlSchema = new Schema({
 url: { type: String, required: true},
 ourUrl : String
});

export default mongoose.models.Url ||
  mongoose.model("Url", UrlSchema);