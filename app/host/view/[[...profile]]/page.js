import { UserProfile } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        height: "auto",
        width: "100%",
        margin: "10px",
      }}
    >
      <UserProfile
        path="/host/view/profile"
        routing="path"
        appearance={{
          elements: {
            card: {
              boxShadow: "none",
            },
          },
        }}
      />
    </div>
  );
};

export default page;
