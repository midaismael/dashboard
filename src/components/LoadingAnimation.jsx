import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../public/Animation - 1741098768850.json"; // Adjust the path
import { Box, Typography } from "@mui/material";

const LoadingScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // After 4 seconds, remove loading
    }, 4000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      // @ts-ignore
      style={styles.container}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Lottie
          animationData={animationData}
          loop
          style={{ width: 200, height: 200 }}
        />
        <Typography
          sx={{
            textTransform: "uppercase",
            fontFamily: "Zentry", // Ensure you import the font in Tailwind config
            fontSize: { xs: "1rem", sm: "2rem", md: "3rem", lg: "4rem" },
          }}
        >
          Setti<b style={{ fontFeatureSettings: '"ss01" on' }}>n</b>g{" "}
          <b style={{ fontFeatureSettings: '"ss01" on' }}>u</b>p y
          <b style={{ fontFeatureSettings: '"ss01" on' }}>o</b>ur w
          <b style={{ fontFeatureSettings: '"ss01" on' }}>o</b>rkspace...{" "}
          <b style={{ fontFeatureSettings: '"ss01" on' }}>A</b>
          lmost t<b style={{ fontFeatureSettings: '"ss01" on' }}>h</b>ere!
        </Typography>
      </Box>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Change if needed
    zIndex: 9999,
  },
  animation: {
    width: 200,
    height: 200,
  },
};

export default LoadingScreen;
