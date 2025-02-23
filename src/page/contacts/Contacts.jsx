import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import { rows, columns } from "./data";

export default function Contacts() {
  const theme = useTheme();
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Typography
        sx={{
          fontSize: "30px",
          letterSpacing: "2px",
          fontWeight: "bold",
          color: theme.palette.primary.dark,
          fontFamily: "circular-web",
        }}
      >
        CONTACTS
      </Typography>
      <DataGrid
        slots={{ toolbar: GridToolbar }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}
