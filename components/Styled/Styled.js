import styled from "@emotion/styled";
import { ButtonBase, FormControl, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
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

export const SearchBoxItemText = styled(Typography)`
  font-size: 16px;
  font-weight: bold;
  color: gray;
`;

export const SearchBoxItemStack = styled(Stack)`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const AddIconCustom = styled(AddIcon)`
  cursor: pointer;
`;
export const RemoveIconCustom = styled(RemoveIcon)`
  cursor: pointer;
`;

export const SearchBoxButton = styled(ButtonBase)`
  width: 100%;
  margin-top: 15px;
  height: 69px;
  background-image: linear-gradient(to right, #2bde8c, #86f244);
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const FilterButton = styled(Typography)`
  color: "#6A6A6A";
  border-radius: 25px;
  width: 150px;
  height: 40px;
  font-size: 14px;
  text-align: center;
`;
