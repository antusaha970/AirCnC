import { Schema, model, models } from "mongoose";

const reservationSchema = new Schema({
  clientId: {
    type: String,
    require: [true, "Client Id is required"],
  },
  placeDetails: {
    type: Object,
    require: [true, "Place details is required"],
  },
  clientMessage: {
    type: String,
  },
  reservationDate: {
    arrival: String,
    departure: String,
  },
  isPaid: {
    type: Boolean,
    require: [true, "is Paid is required"],
  },
});

const Reservation =
  models.Reservation || model("Reservation", reservationSchema);
export default Reservation;
