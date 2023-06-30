import Places from "@models/PlacesModel/place";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const id = params.id;
    await connectToDB();
    const result = await Places.findByIdAndDelete(id);
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
