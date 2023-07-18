import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    return NextResponse.json(
      { publishableKey: process.env.STRIPE_PUBLISHABLE_KEY },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 404 });
  }
}
