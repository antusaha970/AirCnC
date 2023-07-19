import { connectToDB } from "@utils/database";

export async function POST(req) {
  try {
    const reservationDetails = await req.json();
    await connectToDB();
    console.log(reservationDetails);
  } catch (error) {
    console.log(error);
  }
}
