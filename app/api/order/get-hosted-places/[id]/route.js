import Places from "@models/PlacesModel/place";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const id = params.id;
    await connectToDB();
    const hostedPlaces = await Places.find({ userId: id.toString() });
    return NextResponse.json({ hostedPlaces }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 404 });
  }
}
