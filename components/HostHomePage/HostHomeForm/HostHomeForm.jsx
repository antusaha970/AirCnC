"use client";

import { useUser } from "@clerk/nextjs";
import { Box, Button, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const arrayOfInputs = [
  "placeTitle",
  "location",
  "description",
  "additionalDescription",
];
const HostHomeForm = () => {
  const { user } = useUser();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      placeTitle: "",
      location: "",
      description: "",
      additionalDescription: "",
    },
  });
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
        {arrayOfInputs.map((input, id) => (
          <Controller
            key={input}
            name={input}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                color="primary"
                fullWidth
                label={`Enter ${input.toLocaleLowerCase()}`}
                id={id.toString()}
                margin="normal"
              />
            )}
          />
        ))}
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default HostHomeForm;
