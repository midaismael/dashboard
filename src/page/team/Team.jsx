import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./Data";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { AdminPanelSettingsOutlined } from "@mui/icons-material";
export default function Team() {
  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              bgcolor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined fontSize="small" />
            )}
            {access === "Manager" && (
              <AdminPanelSettingsOutlined fontSize="small" />
            )}
            {access === "User" && (
              <AdminPanelSettingsOutlined fontSize="small" />
            )}
            <Typography sx={{ fontSize: "13px" }}>{access}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </div>
  );
}
