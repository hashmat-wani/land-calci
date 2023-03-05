import React from "react";
import freecodecampLogo from "../assets/freecodecampLogo.png";
import { Box, Typography, useMediaQuery } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  const isMobile = useMediaQuery("(max-width:500px)");

  if (["/"].includes(pathname))
    return (
      <Box p="20px" backgroundColor="teal" color="white">
        {/* footer social links*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            justifyContent: { xs: "center", md: "space-between" },
            gap: "10px",
          }}
        >
          <Typography fontSize="16px" fontFamily="'Noto Serif JP', serif">
            hashtech © 2017–2023
          </Typography>
          {isMobile && (
            <>
              <Typography fontFamily="'Noto Serif JP', serif">
                <a style={{ fontSize: "15px" }} href="tel:7006600835">
                  +91 7006600835
                </a>
              </Typography>
              <Typography fontFamily="'Noto Serif JP', serif">
                <a style={{ fontSize: "15px" }} href="mailto: abc@example.com">
                  hashmatwani@icloud.com
                </a>
              </Typography>
            </>
          )}

          <Box display="flex" gap={4} justifyContent="flex-end">
            <a
              rel="noreferrer"
              href="https://github.com/hashmat-noorani"
              title="github"
              target="_blank"
            >
              <GitHubIcon />
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/hashmat-noorani/"
              title="Linkedin"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
            <a
              rel="noreferrer"
              href="https://www.facebook.com/hwx.75"
              title="facebook"
              target="_blank"
            >
              <FacebookTwoToneIcon />
            </a>
            <a
              rel="noreferrer"
              href="https://twitter.com/hashmatwani_x"
              title="Twitter"
              target="_blank"
            >
              <TwitterIcon />
            </a>
            <a
              rel="noreferrer"
              href="https://www.freecodecamp.org/HashmatNoorani"
              title="freeCodeCamp"
              target="_blank"
            >
              <img
                style={{ marginTop: "-5px" }}
                width="20px"
                src={freecodecampLogo}
                alt=""
              />
            </a>
          </Box>
        </Box>
      </Box>
    );

  return null;
};

export default Footer;
