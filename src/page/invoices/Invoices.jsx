import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows, columns } from "./data";
import Header from "../../components/Header";

export default function Invoices() {
  const theme = useTheme();
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Header title={"INVOICES"} subTitle={"List Of Invoice Balances"} />
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
