"use client";
import { Container, Typography } from "@mui/material";
import Link from "next/link";

const HostHomeWithOutAuth = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h5"
        component="h5"
        sx={{
          textAlign: "center",
          pt: 2,
          fontWeight: "bold",
        }}
      >
        Welcome to AirCnC Home hosting service
      </Typography>
      <Typography
        variant="p"
        component="p"
        sx={{
          textAlign: "center",
          pt: 2,
        }}
      >
        Welcome to AirCnC Home Hosting Service, where extraordinary experiences
        await you! Our platform is dedicated to connecting adventurous travelers
        with unique and welcoming accommodations all around the world. Whether
        you&apos;re seeking a cozy cottage nestled in the mountains, a stylish
        urban loft, or a tranquil beachfront villa, AirCnC has the perfect space
        to cater to your desires.
      </Typography>
      <Typography
        variant="h2"
        component="p"
        sx={{
          textAlign: "center",
          pt: 2,
          fontWeight: "bold",
        }}
      >
        Please <Link href="/sign-in">Sign In</Link> for hosting your home
      </Typography>
    </Container>
  );
};

export default HostHomeWithOutAuth;
