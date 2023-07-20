import Reservation from "@models/ReservationModel/reservation";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const reservationDetails = await req.json();
    await connectToDB();
    const newReservation = new Reservation(
      reservationDetails.reservationDataForDb
    );
    await newReservation.save();
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
