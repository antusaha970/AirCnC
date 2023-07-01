"use client";

import { useUser } from "@clerk/nextjs";
import { Loader, PlaceCard } from "@components";
import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
export const fetchCache = "force-no-store";
const HostedHomeList = () => {
  const {
    user: { id },
  } = useUser();
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
    async function fetchData() {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/order/get-hosted-places/${id}`);
        setHomes(data.hostedPlaces);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  }, [id]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/order/delete-place/${id}`);
      if (response) {
        const newHomes = homes.filter((home) => home._id !== id);
        setHomes(newHomes);
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
      console.error(error);
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
      {loading && <Loader />}
      <Stack
        direction={{ md: "row", sm: "column" }}
        justifyContent="center"
        alignItems="center"
        gap={2}
        sx={{
          flexWrap: "wrap",
        }}
      >
        {homes?.map((place) => (
          <PlaceCard
            key={place._id}
            place={place}
            handleDelete={handleDelete}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default HostedHomeList;
