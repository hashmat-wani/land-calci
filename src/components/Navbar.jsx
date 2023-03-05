import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      backgroundColor="teal"
      color="white"
      p="15px 20px"
      display="flex"
      gap="20px"
      position="sticky"
      zIndex={1}
      top={0}
    >
      <Link to="/" style={{ fontSize: "18px" }}>
        Area Calculator
      </Link>
      <Link to="/saved" style={{ fontSize: "18px" }}>
        Saved
      </Link>
    </Box>
  );
};

export default Navbar;
