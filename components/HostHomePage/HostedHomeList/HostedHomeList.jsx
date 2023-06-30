"use client";

import { useUser } from "@clerk/nextjs";
import { PlaceCard } from "@components";
import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
export const fetchCache = "force-no-store";
const HostedHomeList = () => {
  const {
    user: { id },
  } = useUser();
  const [homes, setHomes] = useState([]);
  useEffect(() => {
    fetchData();
    async function fetchData() {
      try {
        const { data } = await axios.get(`/api/order/get-hosted-places/${id}`);
        setHomes(data.hostedPlaces);
      } catch (error) {
        console.error(error);
      }
    }
  }, [id]);

  const handleDelete = async (id) => {
    console.log(id);
  };
  return (
    <Box
      sx={{
        mx: { sm: 1, md: 3, xs: 1 },
      }}
    >
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

      <Stack
        direction={{ md: "row", sm: "column" }}
        justifyContent="center"
        alignItems="center"
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
