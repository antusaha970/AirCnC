"use client";

import { useUser } from "@clerk/nextjs";
import { AccountCircle } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BathtubIcon from "@mui/icons-material/Bathtub";
import { useState } from "react";

const HostHomeForm = () => {
  const { user } = useUser();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      placeTitle: "",
      location: "",
      description: "",
      additionalDescription: "",
      guest: 2,
      bedRooms: 1,
      beds: 1,
      bartRoom: 1,
      perNightFees: 0,
      cleaningFees: 0,
      serviceFees: 0,
      entireHome: true,
      selfCheckIn: false,
    },
  });
  const [images, setImages] = useState([]);

  const handleChange = (event) => {
    const files = event.target.files;
    setImages(files);
  };
  console.log(images);
  const onSubmit = (data) => console.log(data);
  return (
    <Box
      sx={{
        marginLeft: { md: "50px", sm: 0 },
        mt: 2,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: "90%",
          margin: "auto",
        }}
      >
        <Controller
          name="placeTitle"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              color="primary"
              fullWidth
              label={"Enter your place title"}
              id="titles"
              margin="normal"
            />
          )}
        />
        <Controller
          name="location"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              color="primary"
              fullWidth
              label={"Enter your place location"}
              id="titles"
              margin="normal"
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              color="primary"
              fullWidth
              label={"Describe your place"}
              id="titles"
              margin="normal"
            />
          )}
        />
        <Controller
          name="guest"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              color="primary"
              fullWidth
              label={"Enter guest number you want to accept"}
              id="titles"
              type="number"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Controller
          name="bedRooms"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              color="primary"
              fullWidth
              label={"Enter number of bedrooms you have"}
              id="titles"
              type="number"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalHotelIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Controller
          name="beds"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              color="primary"
              fullWidth
              label={"Enter number beds in bedrooms"}
              id="titles"
              type="number"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalHotelIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Controller
          name="bartRoom"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              color="primary"
              fullWidth
              label={"Enter number bathrooms in your house"}
              id="titles"
              type="number"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BathtubIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Controller
          name="perNightFees"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              color="primary"
              fullWidth
              label={"Enter fare per night"}
              id="titles"
              type="number"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Controller
          name="cleaningFees"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              color="primary"
              fullWidth
              label={"Enter cleaning fees"}
              id="titles"
              type="number"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Controller
          name="serviceFees"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              color="primary"
              fullWidth
              label={"Enter service fees"}
              id="titles"
              type="number"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <FormControl fullWidth>
          <Controller
            name="entireHome"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                {...field}
                control={<Radio />}
                label="Entire Home"
              />
            )}
          />
          <Controller
            name="selfCheckIn"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                {...field}
                value="true"
                control={<Radio />}
                label="Self check in"
              />
            )}
          />
        </FormControl>
        <input
          type="file"
          multiple
          placeholder="Enter your place images"
          accept="image/*"
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default HostHomeForm;
