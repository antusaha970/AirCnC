import Places from "@models/PlacesModel/place";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    await connectToDB();
    const newPlace = new Places(body);
    await newPlace.save();

    return NextResponse.json({ status: "new place created" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error });
  }
}
