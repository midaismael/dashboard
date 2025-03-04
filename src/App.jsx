import * as React from "react";
import { createTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { ThemeProvider } from "@mui/material/styles";
import { getDesignTokens } from "./theme";
import { Outlet } from "react-router-dom";
import "./index.css";
import LoadingAnimation from "./components/LoadingAnimation";
import { useState } from "react";
import { Typography } from "@mui/material";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mode, setMode] = React.useState(
    Boolean(localStorage.getItem("currentMode"))
      ? localStorage.getItem("currentMode")
      : "light"
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation onFinish={() => setIsLoading(false)} />
      ) : (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: "flex" }}>
            <CssBaseline />

            {/* top bar nav */}
            <TopBar
              open={open}
              handleDrawerOpen={handleDrawerOpen}
              setMode={setMode}
            />
            {/* top bar nav */}

            {/* side bar nav */}
            <SideBar open={open} handleDrawerClose={handleDrawerClose} />
            {/* side bar nav */}

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <DrawerHeader />
              <Outlet />
            </Box>
          </Box>
        </ThemeProvider>
      )}
    </>
  );
}
