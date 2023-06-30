import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // To change palette colors
  palette: {
    primary: {
      light: "#81e7af",
      main: "#2bde8d",
      dark: "#00ca5c",
      contrastText: "#e1faec",
    },
    danger: {
      light: "#ff2615",
      main: "#ed0808",
      dark: "#d50000",
      contrastText: "#ffe8e7",
    },
  },
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
