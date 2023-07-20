"use client";

import { useUser } from "@clerk/nextjs";
import { MyContentLoader, PlaceCard } from "@components";
import { Box, Container, Stack, Typography } from "@mui/material";
import Aos from "aos";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const ReservationContainer = () => {
  const { user } = useUser();
  const [clientReservations, setClientReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Aos.init({ once: true });
    getClientReservations();
    async function getClientReservations() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `/api/reservation/get-reservation/${user.id}`
        );
        setClientReservations(data.clientReservation);
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
        const newReservationList = clientReservations.filter(
          (r) => r._id !== id
        );
        setClientReservations(newReservationList);
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
    <Container component="section" maxWidth="lg">
      <ToastContainer />
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          mt: 5,
        }}
      >
        <Stack
          direction={{ md: "row", sm: "column" }}
          justifyContent={{ sm: "center", md: "start" }}
          alignItems="start"
          gap={2}
          sx={{
            flexWrap: "wrap",
          }}
        >
          {isLoading && <MyContentLoader />}
          {clientReservations?.map((reservation) => (
            <PlaceCard
              key={reservation._id}
              place={reservation.placeDetails}
              isPaid={reservation.isPaid}
              reservationDate={reservation.reservationDate}
              handleCancelReservation={handleCancelReservation}
              cancelReservationId={reservation._id}
            />
          ))}
          {!isLoading && clientReservations.length === 0 && (
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
    </Container>
  );
};

export default ReservationContainer;
