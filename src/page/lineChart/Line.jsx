import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
const data = [
  {
    id: "france",
    color: "hsl(217, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 173,
      },
      {
        x: "helicopter",
        y: 213,
      },
      {
        x: "boat",
        y: 30,
      },
      {
        x: "train",
        y: 211,
      },
      {
        x: "subway",
        y: 195,
      },
      {
        x: "bus",
        y: 110,
      },
      {
        x: "car",
        y: 147,
      },
      {
        x: "moto",
        y: 150,
      },
      {
        x: "bicycle",
        y: 146,
      },
      {
        x: "horse",
        y: 283,
      },
      {
        x: "skateboard",
        y: 2,
      },
      {
        x: "others",
        y: 298,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(212, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 196,
      },
      {
        x: "helicopter",
        y: 198,
      },
      {
        x: "boat",
        y: 141,
      },
      {
        x: "train",
        y: 294,
      },
      {
        x: "subway",
        y: 289,
      },
      {
        x: "bus",
        y: 238,
      },
      {
        x: "car",
        y: 19,
      },
      {
        x: "moto",
        y: 19,
      },
      {
        x: "bicycle",
        y: 72,
      },
      {
        x: "horse",
        y: 126,
      },
      {
        x: "skateboard",
        y: 81,
      },
      {
        x: "others",
        y: 106,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(90, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 121,
      },
      {
        x: "helicopter",
        y: 274,
      },
      {
        x: "boat",
        y: 133,
      },
      {
        x: "train",
        y: 104,
      },
      {
        x: "subway",
        y: 92,
      },
      {
        x: "bus",
        y: 121,
      },
      {
        x: "car",
        y: 235,
      },
      {
        x: "moto",
        y: 20,
      },
      {
        x: "bicycle",
        y: 169,
      },
      {
        x: "horse",
        y: 270,
      },
      {
        x: "skateboard",
        y: 164,
      },
      {
        x: "others",
        y: 222,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(35, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 127,
      },
      {
        x: "helicopter",
        y: 174,
      },
      {
        x: "boat",
        y: 131,
      },
      {
        x: "train",
        y: 257,
      },
      {
        x: "subway",
        y: 137,
      },
      {
        x: "bus",
        y: 29,
      },
      {
        x: "car",
        y: 187,
      },
      {
        x: "moto",
        y: 166,
      },
      {
        x: "bicycle",
        y: 136,
      },
      {
        x: "horse",
        y: 147,
      },
      {
        x: "skateboard",
        y: 52,
      },
      {
        x: "others",
        y: 123,
      },
    ],
  },
];
export default function Line({ isDashboard = false }) {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>
      <ResponsiveLine
        data={data}
        curve="catmullRom"
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            wrapper: {},
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "transportation",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "count",
          legendOffset: -40,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
}
