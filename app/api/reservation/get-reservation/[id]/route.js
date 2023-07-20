import Reservation from "@models/ReservationModel/reservation";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectToDB();
    const { id } = params;
    const clientReservation = await Reservation.find({ clientId: `${id}` });
    return NextResponse.json({ clientReservation }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectToDB();
    const { id } = params;
    await Reservation.findByIdAndDelete(`${id}`);
    return NextResponse.json({ result: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ result: false }, { status: 500 });
  }
}
