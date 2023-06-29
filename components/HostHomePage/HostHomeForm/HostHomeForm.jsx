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
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BathtubIcon from "@mui/icons-material/Bathtub";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

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
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size.toLocaleString()} bytes
    </li>
  ));

  if (acceptedFiles.length > 0) {
    console.log(acceptedFiles);
  }
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
        <Box
          sx={{
            width: "100%",
            height: "250px",
            border: "3px dashed gray",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            my: 2,
          }}
        >
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <Typography
              variant="p"
              component="p"
              sx={{
                textAlign: "center",
                color: "gray",
              }}
            >
              Drag&apos;n&apos; drop 2 image of your home here, or click to
              select images
            </Typography>
          </div>
          <Box
            component="aside"
            sx={{
              display: "block",
              px: 3,
            }}
          >
            <h4>Your selected images</h4>
            <ul>{files}</ul>
          </Box>
        </Box>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default HostHomeForm;
