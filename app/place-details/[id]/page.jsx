import { PlaceLanding } from "@components";
import axios from "axios";

export const getPlaceData = async (id) => {
  try {
    if (process.env.DEVELOPMENT) {
      const { data } = await axios.get(
        `http://localhost:3000/api/client/places/by-id/${id}`
      );
      return data;
    } else {
      const { data } = await axios.get(
        `https://air-cnc-bd.vercel.app/api/client/places/by-id/${id}`
      );
      return data;
    }
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default async function Page({ params }) {
  const placeData = await getPlaceData(params.id);
  return (
    <>
      <PlaceLanding place={placeData} />
    </>
  );
}
