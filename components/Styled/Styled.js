import styled from "@emotion/styled";
import { ButtonBase, FormControl } from "@mui/material";

export const SignInButton = styled(ButtonBase)`
  margin-left: 10px;
  background-image: linear-gradient(to right, #2bde8c, #83f147);
  font-size: 20px;
  border-radius: 22px;
  width: 106px;
  height: 22px;
  padding: 15px;
  color: #fff;
`;

export const CustomFormControl = styled(FormControl)({
  "& label": {
    color: "gray", // Change the label color
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#2BDE8C", // Change the focused border color
    },
    "&:hover fieldset": {
      borderColor: "#86F244", // Change the border color on hover
    },
    "& fieldset": {
      borderColor: "#2BDE8C", // Change the default border color
    },
  },
});
