import Places from "@models/PlacesModel/place";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export const revalidate = 60;
export async function GET(req) {
  try {
    await connectToDB();
    const allPlaces = await Places.find({});
    return NextResponse.json({ result: allPlaces }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
