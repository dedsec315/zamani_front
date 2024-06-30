import React from "react";
import Logo from "../Components/Logo";
import ConsultationNumber from "../Components/ConsultationNumber";
import Navigation from "../Components/Navigation";
import { Box } from "@mui/material";

const ByNumber = () => {
  return (
    <div className="overflow-auto w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 items-center justify-center ">
      <Navigation />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="left"
        height="50vh"
      >
        <ConsultationNumber />
      </Box>

      <Logo />
    </div>
  );
};

export default ByNumber;
