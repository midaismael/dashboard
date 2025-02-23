import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows, columns } from "./data";

export default function Invoices() {
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
        Invoices
      </Typography>
      <DataGrid
        checkboxSelection
        slots={{ toolbar: GridToolbar }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}
