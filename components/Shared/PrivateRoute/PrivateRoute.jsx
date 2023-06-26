"use client";

import { useUser } from "@clerk/nextjs";
import Loader from "../Loader/Loader";

const PrivateRoute = ({ children, WithOutAuth }) => {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) {
    return <Loader />;
  }
  if (!isSignedIn) {
    return <WithOutAuth />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
