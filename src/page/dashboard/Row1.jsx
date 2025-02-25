import { Stack, useTheme } from "@mui/material";
import Card from "./Card";
import { Email, PersonAdd, PointOfSale, Traffic } from "@mui/icons-material";
import { data1, data2, data3, data4 } from "./Data";

export default function Row1() {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Card
        icons={
          <Email
            sx={{ fontSize: "23px", color: theme.palette.text.secondary }}
          />
        }
        title={"12,351"}
        subTitle={"Emails Sent"}
        increase={"+14%"}
        data={data1}
        scheme={"nivo"}
      />

      <Card
        icons={
          <PointOfSale
            sx={{ fontSize: "23px", color: theme.palette.text.secondary }}
          />
        }
        title={"431,225"}
        subTitle={"Sales Obtained"}
        increase={"+21%"}
        data={data2}
        scheme={"category10"}
      />
      <Card
        icons={
          <PersonAdd
            sx={{ fontSize: "23px", color: theme.palette.text.secondary }}
          />
        }
        title={"32,441"}
        subTitle={"New Clinets"}
        increase={"+5%"}
        data={data3}
        scheme={"accent"}
      />
      <Card
        icons={
          <Traffic
            sx={{ fontSize: "23px", color: theme.palette.text.secondary }}
          />
        }
        title={"1,325,134"}
        subTitle={"Traffic Received"}
        increase={"+43%"}
        data={data4}
        scheme={"dark2"}
      />
    </Stack>
  );
}
