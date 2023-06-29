"use client";

import { useUser } from "@clerk/nextjs";
import { AccountCircle } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BathtubIcon from "@mui/icons-material/Bathtub";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";

const apiKey = "bccff53654f10f82c9c8a2ba645ab87a";
const HostHomeForm = () => {
  const {
    user: { imageUrl, id },
  } = useUser();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      placeTitle: "",
      location: "",
      description: "",
      additionalDescription: "",
      guest: 2,
      bedRooms: 1,
      beds: 1,
      bartRoom: 1,
      perNightFees: 10,
      cleaningFees: 0,
      serviceFees: 0,
      entireHome: true,
      selfCheckIn: false,
    },
  });

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const imageToBase64 = (img) => {
    const promise = new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        const imgBase64 = reader.result.split(",")[1];
        resolve(imgBase64);
      };
      reader.readAsDataURL(img);
    });

    return promise;
  };
  const imagesOnlineUrl = async (arr, ind) => {
    const imgbase64 = await imageToBase64(arr[ind]);
    const formData = new FormData();
    formData.append("image", imgbase64);
    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?&key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const imgUpLoadRes = await response.json();
      const {
        data: {
          image: { url },
        },
      } = imgUpLoadRes;
      return url;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };
  const onSubmit = async (data) => {
    if (acceptedFiles.length >= 2) {
      try {
        const imgLink1 = await imagesOnlineUrl(acceptedFiles, 0);
        const imgLink2 = await imagesOnlineUrl(acceptedFiles, 1);

        const dataForUpload = {
          userId: id,
          userProfile: imageUrl,
          placeDetails: {
            images: [imgLink1, imgLink2],
            placeTitle: data.placeTitle,
            location: data.location,
            roomsAndGuest: {
              guest: Number(data.guest),
              bedRooms: Number(data.bedRooms),
              beds: Number(data.beds),
              bartRoom: Number(data.bartRoom),
            },
            description: data.description,
            additionalDescription: data.additionalDescription,
            fees: {
              perNightFees: Number(data.perNightFees),
              cleaningFees: Number(data.cleaningFees),
              serviceFees: Number(data.serviceFees),
            },
            options: {
              entireHome: true,
              selfCheckIn: true,
            },
          },
        };

        // console.log(dataForUpload);
        const response = await axios.post(
          "/api/order/place-order",
          dataForUpload
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    } else {
      toast.warn("Please select at least two image", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <Box
      sx={{
        marginLeft: { md: "50px", sm: 0 },
        my: 2,
      }}
    >
      <ToastContainer />
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
          rules={{
            required: true,
            minLength: {
              value: 10,
            },
          }}
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
        {errors.placeTitle && (
          <Typography
            sx={{
              color: "red",
              fontSize: "16px",
              p: 1,
            }}
          >
            Title is required and must be 10 character long
          </Typography>
        )}
        <Controller
          name="location"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Location</InputLabel>
              <Select
                {...field}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Location"
              >
                <MenuItem value="Dhaka,Bangladesh">Dhaka, Bangladesh</MenuItem>
                <MenuItem value="Chottogram,Bangladesh">
                  Chottogram, Bangladesh
                </MenuItem>
                <MenuItem value="Cox's Bazar,Bangladesh">
                  Cox&apos;s Bazar, Bangladesh
                </MenuItem>
              </Select>
            </FormControl>
          )}
        />
        {errors.location && (
          <Typography
            sx={{
              color: "red",
              fontSize: "16px",
              p: 1,
            }}
          >
            Please select your location
          </Typography>
        )}
        <Controller
          name="description"
          control={control}
          rules={{
            required: true,
            minLength: {
              value: 30,
            },
          }}
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
        {errors.description && (
          <Typography
            sx={{
              color: "red",
              fontSize: "16px",
              p: 1,
            }}
          >
            Description is required and must be 30 characters long
          </Typography>
        )}
        <Controller
          name="guest"
          control={control}
          rules={{
            required: true,
            min: {
              value: 1,
            },
          }}
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
        {errors.guest && (
          <Typography
            sx={{
              color: "red",
              fontSize: "16px",
              p: 1,
            }}
          >
            Must accept at least one guest
          </Typography>
        )}
        <Controller
          name="bedRooms"
          control={control}
          rules={{
            required: true,
            min: {
              value: 1,
            },
          }}
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
        {errors.bedRooms && (
          <Typography
            sx={{
              color: "red",
              fontSize: "16px",
              p: 1,
            }}
          >
            Must have at least one bed room
          </Typography>
        )}
        <Controller
          name="beds"
          control={control}
          rules={{
            required: true,
            min: {
              value: 1,
            },
          }}
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
        {errors.beds && (
          <Typography
            sx={{
              color: "red",
              fontSize: "16px",
              p: 1,
            }}
          >
            Must have at least one bed
          </Typography>
        )}
        <Controller
          name="bartRoom"
          control={control}
          rules={{
            required: true,
            min: {
              value: 1,
            },
          }}
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
        {errors.bartRoom && (
          <Typography
            sx={{
              color: "red",
              fontSize: "16px",
              p: 1,
            }}
          >
            Must have at least one bathroom
          </Typography>
        )}
        <Controller
          name="perNightFees"
          control={control}
          rules={{
            required: true,
            min: {
              value: 10,
            },
            max: {
              value: 100,
            },
          }}
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
        {errors.perNightFees && (
          <Typography
            sx={{
              color: "red",
              fontSize: "16px",
              p: 1,
            }}
          >
            Must be more than 10 dollars and less than 100
          </Typography>
        )}
        <Controller
          name="cleaningFees"
          control={control}
          rules={{
            required: true,
            max: {
              value: 10,
            },
          }}
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
        {errors.cleaningFees && (
          <Typography
            sx={{
              color: "red",
              fontSize: "16px",
              p: 1,
            }}
          >
            Must be less than 10 dollars
          </Typography>
        )}
        <Controller
          name="serviceFees"
          control={control}
          rules={{
            required: true,
            max: {
              value: 10,
            },
          }}
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
        {errors.serviceFees && (
          <Typography
            sx={{
              color: "red",
              fontSize: "16px",
              p: 1,
            }}
          >
            Must be less than 10 dollars
          </Typography>
        )}
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
                cursor: "pointer",
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
            <ul>
              {acceptedFiles.map((file) => (
                <li key={file.path}>
                  {file.path} - {file.size.toLocaleString()} bytes
                </li>
              ))}
            </ul>
          </Box>
        </Box>
        <Controller
          name="additionalDescription"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              color="primary"
              fullWidth
              label={"Full details of your home"}
              id="titles"
              margin="normal"
              multiline
              rows={5}
            />
          )}
        />
        {errors.additionalDescription && (
          <Typography
            sx={{
              color: "red",
              fontSize: "16px",
              p: 1,
            }}
          >
            Must have additional description
          </Typography>
        )}
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default HostHomeForm;
