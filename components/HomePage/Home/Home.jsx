"use client";

import { Typography } from "@mui/material";
import { increment } from "@redux/slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const counter = useSelector((state) => state.counter);
  console.log(counter);
  const dispatch = useDispatch();
  return (
    <Typography
      variant="h1"
      onClick={() => {
        dispatch(increment());
      }}
    >
      {counter.value}
    </Typography>
  );
};

export default Home;
