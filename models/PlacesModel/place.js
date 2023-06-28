import { Schema, model, models } from "mongoose";
import { placeDetailsSchema } from "./placesHelperSchemas";

// Main Schema
const placeSchema = new Schema({
  userId: {
    type: String,
    require: [true, "User ID is required "],
  },
  userProfile: {
    type: String,
    require: [true, "User ID is required "],
  },
  placeDetails: {
    type: placeDetailsSchema,
    require: true,
  },
});

const Places = models.Places || model("Places", placeSchema);

export default Places;
