import { Box, Typography, useTheme } from "@mui/material";
import { keyframes } from "@mui/system";

export default function Header({ title, subTitle, isDashboard = false }) {
  const theme = useTheme();

  const glow = keyframes`
   from {
    text-shadow: 0 0 0px #2d9da9;
  }
  to {
    text-shadow: 0 0 30px #34b3c1, 0 0 10px #4dbbc7;
  }
`;
  return (
    <Box mb={isDashboard ? 2 : 4}>
      <Typography
        sx={{
          color: theme.palette.info.light,
          fontFamily: "anton",
          fontSize: "30px",
          letterSpacing: "3px",
          mb: "10px",
          textTransform: "uppercase",
          animation: `${glow} 1.5s infinite alternate ease-in-out`,
          transition: "transform 0.3s ease",
        }}
        variant="h5"
      >
        {title}
      </Typography>
      <Typography sx={{ fontFamily: "anton", letterSpacing: "1px" }}>
        {subTitle}
      </Typography>
    </Box>
  );
}
