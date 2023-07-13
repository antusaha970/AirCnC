"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { settings } from "@utils/helperFunctions";
import HomeIcon from "@mui/icons-material/Home";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
import PersonIcon from "@mui/icons-material/Person";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PlaceLanding = ({ place }) => {
  const {
    result: {
      placeDetails: {
        images,
        placeTitle,
        location,
        roomsAndGuest: { guest, bedRooms, beds, bartRoom },
        options: { entireHome, selfCheckIn },
        additionalDescription,
      },
      userProfile,
    },
  } = place;

  return (
    <Box component="section">
      <Box
        sx={{
          width: "100%",
          minHeight: "75vh",
          overflow: "hidden",
          mt: 1,
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: "40px",
            textAlign: "center",
            fontWeight: "bold",
            my: 2,
          }}
        >
          {placeTitle}
        </Typography>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={image}>
              <Box
                sx={{
                  position: "relative",
                  width: { sm: "100%", md: "600px" },
                  height: "50vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "auto",
                }}
              >
                <Image
                  src={images[index]}
                  alt="corusel image"
                  fill
                  sizes="(min-width: 768px) 100%, (min-width: 1200px) 100%, 100%"
                />
              </Box>
            </div>
          ))}
        </Slider>
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          mb: 5,
        }}
      >
        <Stack direction={{ sm: "column-reverse", md: "row" }} gap={2}>
          <Box flex={2}>
            <Box>
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h1"
                  component="h5"
                  sx={{
                    fontSize: "35px",
                    textAlign: "left",
                    fontWeight: "600",
                  }}
                >
                  {placeTitle}
                </Typography>
                <Box>
                  <Image
                    src={userProfile}
                    alt="user profile picture"
                    width={50}
                    height={50}
                    style={{
                      borderRadius: "25px",
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#3C3C3C",
                      fontSize: "12px",
                      textAlign: "center",
                    }}
                  >
                    Owner
                  </Typography>
                </Box>
              </Stack>
              <Typography
                sx={{
                  color: "#6A6A6A",
                  mb: 1,
                }}
                component="p"
              >
                {location}
              </Typography>
              <Typography
                sx={{
                  color: "#6A6A6A",
                }}
                component="p"
              >
                {guest} guests &nbsp; &nbsp; {bedRooms} bedrooms &nbsp; &nbsp;{" "}
                {beds} beds&nbsp; &nbsp; {bartRoom} baths
              </Typography>
              <Divider
                sx={{
                  my: 1,
                }}
              />

              {entireHome && (
                <Box
                  sx={{
                    mb: 2,
                  }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#6A6A6A",
                    }}
                  >
                    <HomeIcon
                      sx={{
                        pr: 1,
                      }}
                    />{" "}
                    {"  "} Entire home
                  </Typography>
                  <Typography
                    sx={{
                      pl: 3,
                      color: "#6A6A6A",
                    }}
                  >
                    You’ll have the condominium to yourself.
                  </Typography>
                </Box>
              )}
              {selfCheckIn && (
                <Box>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#6A6A6A",
                    }}
                  >
                    <CheckBoxIcon
                      sx={{
                        pr: 1,
                      }}
                    />{" "}
                    {"  "} Self check-in
                  </Typography>
                  <Typography
                    sx={{
                      pl: 3,
                      color: "#6A6A6A",
                    }}
                  >
                    You can check in with the doorman.
                  </Typography>
                </Box>
              )}

              <Box
                sx={{
                  mb: 2,
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#6A6A6A",
                  }}
                >
                  <CleanHandsIcon
                    sx={{
                      pr: 1,
                    }}
                  />{" "}
                  {"  "} Sparkling clean
                </Typography>
                <Typography
                  sx={{
                    pl: 3,
                    color: "#6A6A6A",
                  }}
                >
                  10 recent guests said this place was sparkling clean.
                </Typography>
              </Box>
              <Box
                sx={{
                  mb: 2,
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#6A6A6A",
                  }}
                >
                  <PersonIcon
                    sx={{
                      pr: 1,
                    }}
                  />{" "}
                  owner is a Superhost
                </Typography>
                <Typography
                  sx={{
                    pl: 3,
                    color: "#6A6A6A",
                  }}
                >
                  Superhosts are experienced, highly rated hosts who are
                  committed to providing great stays for guests.
                </Typography>
                <Divider
                  sx={{
                    my: 1,
                  }}
                />
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="more-info-content"
                    id="more-info-header"
                  >
                    <Typography
                      sx={{
                        color: "#0377FF",
                      }}
                    >
                      Read more about the space
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: "#6A6A6A",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {additionalDescription}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Typography
                  component="p"
                  sx={{
                    my: 1,
                  }}
                >
                  Reviews
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box flex={1}>fasdfdsf</Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default PlaceLanding;
