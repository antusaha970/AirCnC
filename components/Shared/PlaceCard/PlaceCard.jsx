"use client";

import {
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

const PlaceCard = ({ place, handleDelete }) => {
  const {
    placeTitle,
    images,
    location,
    fees: { perNightFees },
  } = place?.placeDetails;
  const pathName = usePathname();

  return (
    <Card sx={{ maxWidth: 300, boxShadow: "none" }} data-aos="zoom-in">
      <CardActionArea>
        <Image src={images[0]} height={164} width={300} alt={placeTitle} />
        <CardContent>
          <Typography
            component="p"
            sx={{
              color: "#009AB4",
              fontSize: "14px",
              pb: 1,
            }}
          >
            {location}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontWeight: "600",
              fontSize: "18px",
              color: "#464646",
            }}
          >
            {placeTitle}
          </Typography>
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
        </CardContent>
      </CardActionArea>
      <CardActions>
        {pathName === "/host/view/your-places" && (
          <Button
            color="danger"
            variant="contained"
            onClick={() => handleDelete(place._id)}
          >
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default PlaceCard;
