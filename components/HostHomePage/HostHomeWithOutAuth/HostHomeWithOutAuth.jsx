"use client";
import { Box, Button, Container, Fade, Modal, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { SignIn } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#fff",
  boxShadow: 24,
  p: 1,
};
const HostHomeWithOutAuth = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container maxWidth="lg">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {pathname === "/your-reservation" ? (
              <SignIn
                afterSignInUrl="/your-reservation"
                redirectUrl="/your-reservation"
                path="/your-reservation"
                appearance={{
                  elements: {
                    card: {
                      boxShadow: "none",
                    },
                  },
                }}
              />
            ) : (
              <SignIn
                afterSignInUrl="/host/view/profile"
                redirectUrl="/host/view/profile"
                path="/host/view/hosting"
                appearance={{
                  elements: {
                    card: {
                      boxShadow: "none",
                    },
                  },
                }}
              />
            )}
          </Box>
        </Fade>
      </Modal>
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
        variant="h4"
        component="p"
        sx={{
          textAlign: "center",
          pt: 2,
          fontWeight: "bold",
        }}
      >
        Please <Button onClick={handleOpen}>Sign In</Button> for{" "}
        {pathname === "/your-reservation"
          ? "View Your reservation"
          : `hosting your home`}
      </Typography>
    </Container>
  );
};

export default HostHomeWithOutAuth;
