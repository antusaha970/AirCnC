import { HostHomeForm, HostHomeTitle } from "@components";

export const metadata = {
  title: "Air CnC || Host your home",
  description: "Host Your Home",
};

const page = () => {
  return (
    <>
      <HostHomeTitle />
      <HostHomeForm />
    </>
  );
};

export default page;
