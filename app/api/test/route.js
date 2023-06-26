import { connectToDB } from "@utils/database";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    return new Response("Connect to database", { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
