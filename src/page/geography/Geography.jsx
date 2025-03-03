import { Box } from "@mui/material";
import Geo from "./Geo";
import Header from "../../components/Header";

export default function Geography() {
  return (
    <Box>
      <Header title="Geography" subTitle="Simple Geography Chart" />
      <Geo />
    </Box>
  );
}
