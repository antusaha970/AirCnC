"use client";

import { useUser } from "@clerk/nextjs";
import { MyContentLoader, PlaceCard } from "@components";
import { Box, Stack, Typography } from "@mui/material";
import Aos from "aos";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const ViewReserved = () => {
  const { user } = useUser();
  const [ownerReserved, setOwnerReserved] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Aos.init({ once: true });
    getClientReservations();
    async function getClientReservations() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `/api/reservation/get-reservation/${user.id}?operation=owner`
        );
        setOwnerReserved(data.ownerReservation);
      } catch (error) {
        console.error(error);
        toast.error(`${error.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } finally {
        setIsLoading(false);
      }
    }
  }, [user]);
  const handleCancelReservation = async (id) => {
    try {
      const { data } = await axios.delete(
        `/api/reservation/get-reservation/${id}`
      );
      if (data.result) {
        const newReservationList = ownerReserved.filter((r) => r._id !== id);
        setOwnerReserved(newReservationList);
        toast.success(`Reservation deleted successfully`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(`${error.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <Box
      sx={{
        mx: 2,
      }}
    >
      <ToastContainer />
      <Stack
        direction={{ md: "row", sm: "column" }}
        justifyContent={{ sm: "center", md: "start" }}
        alignItems="start"
        gap={2}
        sx={{
          flexWrap: "wrap",
          mt: 3,
        }}
      >
        {isLoading && <MyContentLoader />}
        {ownerReserved?.map((reservation) => (
          <PlaceCard
            key={reservation._id}
            place={reservation.placeDetails}
            isPaid={reservation.isPaid}
            reservationDate={reservation.reservationDate}
            cancelReservationId={reservation._id}
            clientMessage={reservation.clientMessage}
            handleCancelReservation={handleCancelReservation}
          />
        ))}
        {!isLoading && ownerReserved.length === 0 && (
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
            }}
            component="h3"
          >
            You have no reservation
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

export default ViewReserved;
