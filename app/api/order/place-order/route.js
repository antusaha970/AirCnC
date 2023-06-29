import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log(body);
    await connectToDB();

    return NextResponse.json({ body });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error });
  }
}
