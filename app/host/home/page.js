import {
  HostHomeDashBoard,
  HostHomeWithOutAuth,
  PrivateRoute,
} from "@components";

export const metadata = {
  title: "Air CnC || Host your home",
  description: "Host Your Home",
};
const HostYourHome = async () => {
  return (
    <PrivateRoute WithOutAuth={HostHomeWithOutAuth}>
      <HostHomeDashBoard />
    </PrivateRoute>
  );
};

export default HostYourHome;
