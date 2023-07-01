import { Home } from "@components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
export const metadata = {
  title: "Air CnC || Home",
};
export const revalidate = 60;
async function getAllPlaces() {
  try {
    if (process.env.DEVELOPMENT) {
      const response = await fetch("http://localhost:3000/api/client/places");
      const data = await response.json();
      return data;
    } else {
      const response = await fetch(
        "https://air-cnc-bd.vercel.app/api/client/places",
        { next: { revalidate: 60 } }
      );
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
export default async function IndexPage() {
  const places = await getAllPlaces();
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Home places={places} />
    </>
  );
}
