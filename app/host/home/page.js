import { HostHomeWithOutAuth, PrivateRoute } from "@components";

export const metadata = {
  title: "Air CnC || Host your home",
  description: "Host Your Home",
};
const HostYourHome = async () => {
  return (
    <PrivateRoute WithOutAuth={HostHomeWithOutAuth}>
      <h1>HostHome</h1>
    </PrivateRoute>
  );
};

export default HostYourHome;
