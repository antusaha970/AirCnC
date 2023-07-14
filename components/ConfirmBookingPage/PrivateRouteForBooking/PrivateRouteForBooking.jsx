"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const PrivateRouteForBooking = ({ children }) => {
  const router = useRouter();
  const isReserving = useSelector((state) => state.reservation.isReserving);
  useEffect(() => {
    console.log(isReserving);
    if (!isReserving) {
      router.replace("/");
    }
  }, [isReserving, router]);
  return <>{isReserving && children}</>;
};

export default PrivateRouteForBooking;
