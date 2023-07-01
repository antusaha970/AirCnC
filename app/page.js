import { Home } from "@components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
export const metadata = {
  title: "Air CnC || Home",
};
export const revalidate = 60;

export default async function IndexPage() {
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
      <Home />
    </>
  );
}
