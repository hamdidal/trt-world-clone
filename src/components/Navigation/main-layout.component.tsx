import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Navigation } from "./navigation/navigation.component";
import Logo from "../../assets/logo/logo";
import "./topbar.css";
import { Link } from "react-router-dom";

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box height="100vh">
      <div className="topbar">
        <Box flexGrow={1}>
          <Link to="/">
            <Box
              display="flex"
              color={"white"}
              alignItems="center"
              gap={0.5}
              sx={{ cursor: "pointer" }}
            >
              <Logo />
            </Box>
          </Link>
        </Box>
        <Navigation isSmall={isSmall} />
      </div>
      <Box sx={{ padding: "48px 0px 0px 0px" }}>{children}</Box>
    </Box>
  );
};
