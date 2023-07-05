import Places from "@models/PlacesModel/place";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const location = searchParams.get("location");
    const filter = searchParams.get("filter");
    if (location) {
      if (!filter) {
        const query = {
          "placeDetails.location": location,
        };
        const availablePlaces = await Places.find(query);
        return NextResponse.json({ availablePlaces }, { status: 200 });
      } else {
        if (filter === "lowest_price") {
          const query = {
            "placeDetails.location": location,
          };
          const availablePlaces = await Places.find(query).sort({
            "placeDetails.fees.perNightFees": 1,
          });
          return NextResponse.json({ availablePlaces }, { status: 200 });
        }
      }
    } else {
      return NextResponse.json("Not found");
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
