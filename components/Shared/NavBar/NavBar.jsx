"use client";
import styled from "@emotion/styled";
import { MenuOpen } from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  Menu,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import "./NavBar.css";
import { SignInButton } from "@components/Styled/Styled";

const LogoText = styled(Typography)`
  font-size: 30px;
  font-weight: 800;
  color: #2bde8c;
  @media (max-width: 765px) {
    font-size: 20px;
  }
`;

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        borderBottom: "1px solid rgba(112,112,112,0.5)",
        py: 1,
      }}
      component="nav"
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          sx={{
            py: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Link href="/">
              <LogoText component="p" variant="p">
                AirCnC
              </LogoText>
            </Link>
          </Box>
          <Box display={{ lg: "block", md: "block", sm: "none", xs: "none" }}>
            <Stack direction="row" alignItems="center">
              <Link href="/" className="nav-item">
                Host your Home
              </Link>
              <Link href="/" className="nav-item">
                Host your Experience
              </Link>
              <Link href="/" className="nav-item">
                Help
              </Link>
              <SignInButton>Sign Up</SignInButton>
            </Stack>
          </Box>
          <Box display={{ lg: "none", md: "none", sm: "block", xs: "block" }}>
            <IconButton
              size="large"
              aria-label="open website menubar"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuOpen
                sx={{
                  color: "#000000",
                  fontSize: "40px",
                }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Stack
                direction="column"
                justifyContent="center"
                gap={2}
                pl={1}
                color="#000"
                sx={{
                  p: 2,
                }}
              >
                <Link href="/" className="nav-item">
                  Host your home
                </Link>
                <Link href="/" className="nav-item">
                  Host your experience
                </Link>
                <Link href="/" className="nav-item">
                  Help
                </Link>
                <Link href="/" className="nav-item">
                  Login
                </Link>
                <SignInButton>Sign Up</SignInButton>
              </Stack>
            </Menu>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default NavBar;
