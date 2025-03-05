import { Box, Stack, useTheme } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { DownloadOutlined } from "@mui/icons-material";
import Header from "../../components/Header";
import Btn from "../../components/Btn";

export default function Dashboard() {
  const theme = useTheme();

  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header
          title={"Dashboard"}
          subTitle={"Welcome To Your Dashboard"}
          isDashboard={true}
        />
        <Box sx={{ textAlign: "right", mb: 1.3 }}>
          <Btn
            icon={<DownloadOutlined />}
            title={"Download Reports"}
            type={null}
          />
        </Box>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
}
