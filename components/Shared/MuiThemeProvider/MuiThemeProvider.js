"use client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@utils/theme";

const MuiThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
