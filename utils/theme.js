import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    // Name of the component
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          fontFamily: "'Open Sans', sans-serif",
        },
      },
    },
  },
});

export default theme;
