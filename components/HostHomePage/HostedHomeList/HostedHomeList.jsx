"use client";

import { useUser } from "@clerk/nextjs";
import { MyContentLoader, PlaceCard } from "@components";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { deletePlaceById, getAllPlacesById } from "@redux/slices/placesSlice";

export const fetchCache = "force-no-store";
const HostedHomeList = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const {
    user: { id },
  } = useUser();
  const personalHostedPlaces = useSelector(
    (state) => state.places.personalHostedPlaces
  );
  const loading = useSelector((state) => state.places.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPlacesById(id));
  }, [id, dispatch]);

  const handleDelete = async (id) => {
    try {
      const response = await dispatch(deletePlaceById(id)).unwrap();
      if (response) {
        toast.success("Deleted successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error("Can't delete at this moment please try again later", {
        position: "top-right",
        autoClose: 3000,
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
        mx: { sm: 1, md: 3, xs: 1 },
      }}
    >
      <ToastContainer />
      <Typography
        component="h1"
        sx={{
          fontWeight: "bold",
          fontSize: "28px",
          textAlign: "center",
          py: 3,
        }}
        variant="h1"
      >
        Your Hosted Homes
      </Typography>
      {loading && <MyContentLoader />}
      <Stack
        direction={{ md: "row", sm: "column" }}
        justifyContent="center"
        alignItems="center"
        gap={2}
        sx={{
          flexWrap: "wrap",
        }}
      >
        {personalHostedPlaces?.map((place) => (
          <PlaceCard
            place={place}
            key={place._id}
            handleDelete={handleDelete}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default HostedHomeList;
