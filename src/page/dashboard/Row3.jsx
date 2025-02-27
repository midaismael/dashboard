import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../page/pieChart/Pie";
import Bar from "../../page/barChart/Bar";
import Geo from "../../page/geography/Geo";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack gap={1.5} direction={"row"} flexWrap={"wrap"} mt={1.4}>
      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "28%" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px", fontFamily: "anton" }}
          variant="h6"
        >
          Campaign
        </Typography>

        <Pie isDashboard={true} />
        <Typography
          variant="h6"
          align="center"
          sx={{ fontFamily: "robert-medium", mt: "15px" }}
        >
          $48,352 revenue generated
        </Typography>
        <Typography
          sx={{ fontFamily: "robert-medium" }}
          variant="body2"
          px={0.7}
          pb={3}
          align="center"
        >
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          sx={{ padding: "30px 30px 0 30px", fontFamily: "anton" }}
        >
          Sales Quantity
        </Typography>

        <Bar isDashboard={true} />
      </Paper>

      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <Geo isDashboard={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;
