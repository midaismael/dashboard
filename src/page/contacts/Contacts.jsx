import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import { rows, columns } from "./data";
import Header from "../../components/Header";

export default function Contacts() {
  const theme = useTheme();
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Header
        title={"CONTACTS"}
        subTitle={"List Of Contacts For Future Reference "}
      />
      <DataGrid
        slots={{ toolbar: GridToolbar }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}
