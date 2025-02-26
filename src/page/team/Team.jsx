import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./Data";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header";
export default function Team() {
  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      align: "center",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      align: "center",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      align: "center",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      align: "center",
      flex: 1,
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
              marginTop: "10px",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined
                sx={{ color: "#fff" }}
                fontSize="small"
              />
            )}
            {access === "Manager" && (
              <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}
            {access === "User" && (
              <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}
            <Typography
              sx={{
                fontSize: "13px",
                color: "#fff",
                fontFamily: "circular-web",
              }}
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Header title={"Team"} subTitle={"Managing The Team Members"} />

      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}
