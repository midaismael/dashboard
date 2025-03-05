import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Line from "../../page/lineChart/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./Data";

const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1.5}
      mt={2}
    >
      <Paper sx={{ maxWidth: 900, flexGrow: 1, minWidth: "400px" }}>
        <Stack
          alignItems={"center"}
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
              sx={{ fontFamily: "anton" }}
            >
              Revenue Generated
            </Typography>
            <Typography
              sx={{
                fontFamily: "numbers-font",
                fontSize: "18px",
              }}
              ml={4}
            >
              $59,342.32
            </Typography>
          </Box>

          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>

        <Line isDashboard={true} />
      </Paper>

      <Box
        sx={{
          overflow: "auto",
          borderRadius: "4px",
          minWidth: "280px",
          maxHeight: 355,
          flexGrow: 1,
        }}
      >
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            p={1.2}
            variant="h6"
            sx={{ fontFamily: "anton" }}
          >
            Recent Transactions
          </Typography>
        </Paper>

        {Transactions.map((item) => {
          return (
            <Paper
              sx={{
                mt: 0.4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.2} sx={{ minWidth: "100px" }}>
                <Typography sx={{ fontFamily: "circular-web" }}>
                  {item.txId}
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: "circular-web" }}>
                  {item.user}
                </Typography>
              </Box>
              <Typography sx={{ fontFamily: "robert-medium" }}>
                {item.date}
              </Typography>

              <Typography
                borderRadius={0.8}
                p={1}
                mr={1}
                minWidth={"70px"}
                textAlign={"center"}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                sx={{ fontFamily: "zentry" }}
              >
                ${item.cost}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
};

export default Row2;
