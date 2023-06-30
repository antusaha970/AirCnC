"use client";

import { useUser } from "@clerk/nextjs";
import { Box, Typography } from "@mui/material";
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
  console.log(homes);
  return (
    <Box
      sx={{
        mx: { sm: 0, md: 3 },
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
    </Box>
  );
};

export default HostedHomeList;
