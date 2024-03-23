import mongoose from "mongoose";

// The costs collection should hold documents that (at the minimum) include the following properties: user_id, year, month, day, id, description, category, and sum

const CostsSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  id: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    lowercase: true,
    enum: [
      "food",
      "health",
      "housing",
      "sport",
      "education",
      "transportation",
      "other",
    ],
    required: true,
  },
  sum: {
    type: Number,
    required: true,
  },
});

const Cost = mongoose.model("users", CostsSchema);

export default Cost;
