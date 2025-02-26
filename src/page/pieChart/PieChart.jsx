import { Box } from "@mui/material";
import Pie from "./Pie";
import Header from "../../components/Header";

export default function PieChart() {
  return (
    <Box>
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />
      <Pie />
    </Box>
  );
}
