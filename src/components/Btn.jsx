import { useTheme } from "@mui/material";
import { Button } from "@mui/material";

export default function Btn({ icon, title, type }) {
  const theme = useTheme();
  return (
    <Button
      type={type}
      sx={{
        padding: "6px 8px",
        fontFamily: "general",
        position: "relative",
        overflow: "hidden",
        border: `1px solid ${theme.palette.info.main}`,
        textTransform: "none",
        "&:hover": {
          color: "#110d1a",
          backgroundColor: "transparent",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "120%",
          height: "120%",
          backgroundColor: theme.palette.info.main,
          borderRadius: "50%",
          transform: "scale(0) translateY(140%)",
          transition: "transform 0.9s cubic-bezier(0.215, 0.61, 0.355, 1)",
          zIndex: -1,
        },
        "&:hover::after": {
          transform: "scale(1.5) translateY(0)",
        },
      }}
      variant="contained"
      color="primary"
    >
      {icon}
      {title}
    </Button>
  );
}
