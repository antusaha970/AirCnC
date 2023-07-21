"use client";

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./PlaceCard.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const PlaceCard = ({
  place,
  handleDelete,
  isPaid,
  reservationDate,
  handleCancelReservation,
  cancelReservationId,
  clientMessage,
}) => {
  const {
    placeTitle,
    images,
    location,
    fees: { perNightFees },
  } = place?.placeDetails;
  const pathName = usePathname();
  const [operation, setOperation] = useState(false);
  const [showCancelButton, setShowCancelButton] = useState(false);
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const [showDateInfo, setShowDateInfo] = useState(false);
  useEffect(() => {
    if (
      pathName === "/your-reservation" ||
      pathName === "/host/view/reserved"
    ) {
      setShowCancelButton(true);
      setShowPaymentInfo(true);
      setShowDateInfo(true);
    }
  }, [pathName]);
  return (
    <Card
      sx={{ maxWidth: { sm: "300px", md: "220px" }, boxShadow: "none" }}
      data-aos="zoom-in"
    >
      <CardActionArea>
        <Image
          src={images[0]}
          height={164}
          width={220}
          alt={placeTitle}
          className="card-img"
        />
        <CardContent>
          <Typography
            component="p"
            sx={{
              color: "#009AB4",
              fontSize: { sm: "14px", md: "12px" },
              pb: 1,
            }}
          >
            {location}
          </Typography>
          <Link href={`/place-details/${place._id}`}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontWeight: "600",
                fontSize: { sm: "18px", md: "16px" },
                color: "#464646",
              }}
            >
              {placeTitle}
            </Typography>
          </Link>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: "16px",
            }}
          >
            ${perNightFees} per night
          </Typography>
          <Rating
            name="read-only"
            value={5}
            readOnly
            sx={{
              color: "#00A799",
              fontSize: "18px",
            }}
          />
          {showDateInfo && reservationDate !== undefined && (
            <Box
              sx={{
                mt: 1,
              }}
            >
              <Typography
                component="p"
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Arrival&nbsp;:&nbsp;&nbsp;
                {new Date(
                  JSON.parse(reservationDate.arrival)
                ).toLocaleDateString()}
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Departure&nbsp;:&nbsp;&nbsp;
                {new Date(
                  JSON.parse(reservationDate.departure)
                ).toLocaleDateString()}
              </Typography>
            </Box>
          )}
          {showPaymentInfo && isPaid !== undefined && (
            <Typography
              sx={{
                fontSize: "14px",
                color: "primary",
                pt: 1,
              }}
              component="p"
            >
              Payment&nbsp;:&nbsp; {isPaid ? "Paid" : "Unpaid"}
            </Typography>
          )}
          {pathName === "/host/view/reserved" && (
            <Typography
              component="p"
              sx={{
                fontSize: "16px",
                pt: 1,
              }}
            >
              <b>Client-Message&nbsp;:</b> &nbsp; {clientMessage}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {pathName === "/host/view/your-places" && (
          <Button
            color="danger"
            variant="contained"
            onClick={() => handleDelete && handleDelete(place._id)}
          >
            Delete
          </Button>
        )}
        {showCancelButton && (
          <Button
            color="danger"
            variant="contained"
            disabled={operation}
            onClick={() => {
              if (handleCancelReservation) {
                handleCancelReservation(cancelReservationId);
                setOperation(true);
              }
            }}
          >
            {operation ? "Processing..." : "Cancel Reservation"}
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default PlaceCard;
