"use client";

import { useUser } from "@clerk/nextjs";
import { Box, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const HostHomeForm = () => {
  const { user } = useUser();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      select: {},
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
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              color="primary"
              fullWidth
              label="fullWidth"
              id="fullWidth"
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default HostHomeForm;
