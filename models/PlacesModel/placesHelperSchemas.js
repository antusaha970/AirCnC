import { Schema } from "mongoose";

// Helper schemas
const roomsAndGuestSchema = new Schema({
  guest: {
    type: Number,
    require: [true, "Guest number is required"],
  },
  bedRooms: {
    type: Number,
    require: [true, "Bedroom number is required"],
  },
  beds: {
    type: Number,
    require: [true, "Bed number is required"],
  },
  bartRoom: {
    type: Number,
  },
});

const feesSchema = new Schema({
  perNightFees: {
    type: Number,
    require: [true, "Per night fee is required"],
  },
  cleaningFees: {
    type: Number,
    require: [true, "Cleaning fee is required"],
  },
  serviceFees: {
    type: Number,
    require: [true, "service fee is required"],
  },
});

const optionsSchema = new Schema({
  entireHome: Boolean,
  selfCheckIn: Boolean,
});

const placeDetailsSchema = new Schema({
  images: {
    type: Array,
    require: [true, "Images is required"],
    validate: [
      function (images) {
        if (images.length <= 1) {
          throw new Error("Not enough images");
        }
      },
    ],
  },
  placeTitle: {
    type: String,
    require: [true, "Place Title is required "],
  },
  location: {
    type: String,
    require: [true, "Location is required "],
  },
  roomsAndGuest: {
    type: roomsAndGuestSchema,
    require: [true, "rooms and guest number is required "],
  },
  description: {
    type: String,
    require: [true, "Description is required "],
  },
  additionalDescription: {
    type: String,
    require: [true, "Description is required "],
  },
  fees: {
    type: feesSchema,
    require: [true, "Fees object is required"],
  },
  options: {
    type: optionsSchema,
  },
});

export { placeDetailsSchema };
