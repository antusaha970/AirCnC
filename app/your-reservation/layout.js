import { HostHomeWithOutAuth, PrivateRoute } from "@components";
import React from "react";

const layout = ({ children }) => {
  return (
    <PrivateRoute WithOutAuth={HostHomeWithOutAuth}>{children}</PrivateRoute>
  );
};

export default layout;
