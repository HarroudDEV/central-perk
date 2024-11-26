import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { LineChart } from "@mui/x-charts";
import { useSelector } from "react-redux";
import { RootStore } from "../Store/index";
import Product from "../Components/Product";
import { Product as ProductType } from "../Store/Reducer";
import Button from "@mui/material/Button";
import { useState } from "react";
import MobileSideNavbar from "../Components/MobileSideNavbar";
import SideNavbar from "../Components/SideNavbar";

function Dashboard() {
  const products = useSelector((state: RootStore) => state.products);
  const rewardedPoints = useSelector(
    (state: RootStore) => state.rewardedPoints
  );
  const redeemPoints = useSelector((state: RootStore) => state.redeemPoints);
  const [displayCount, setDisplayCount] = useState<number>(4);
  return (
    <Box>
      <Grid
        container
        spacing={1}
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Grid size={2} sx={{ display: { xs: "none", sm: "flex" } }}>
          <SideNavbar />
        </Grid>
        <Grid size={2} sx={{ display: { xs: "block", sm: "none" } }}>
          <MobileSideNavbar />
        </Grid>
        <Grid size={10} className="full-display-mobile">
          <Box sx={{ padding: "1rem" }}>
            <Grid
              container
              spacing={2}
              columns={{ xs: 4, sm: 8, md: 12 }}
              justifyContent={"space-between"}
              sx={{
                padding: "1rem",
                background: "#2E8A59",
                borderRadius: "0.75rem",
              }}
            >
              <Grid
                size={4}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  className="gauge"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#FFF4E4",
                    borderRadius: "0.75rem",
                    height: "45%",
                    padding: "0rem 1rem",
                  }}
                >
                  <div className="title" style={{ color: "#91ED91" }}>
                    Redeem points this week
                  </div>
                  <div>
                    <Gauge
                      {...{
                        width: 100,
                        height: 100,
                        valueMax: 10000,
                        value: redeemPoints,
                      }}
                      cornerRadius="50%"
                      sx={(theme) => ({
                        [`& .${gaugeClasses.valueText}`]: {
                          color: "#91ED91",
                        },
                        [`& .${gaugeClasses.valueArc}`]: {
                          fill: "#91ED91",
                        },
                        [`& .${gaugeClasses.referenceArc}`]: {
                          fill: theme.palette.text.disabled,
                        },
                      })}
                    />
                  </div>
                </div>
                <div
                  className="gauge"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#FFF4E4",
                    borderRadius: "0.75rem",
                    height: "45%",
                    padding: "0rem 1rem",
                  }}
                >
                  <div className="title" style={{ color: "#FE5150" }}>
                    Rewarded points this week
                  </div>
                  <div>
                    <Gauge
                      {...{
                        width: 100,
                        height: 100,
                        valueMax: 10000,
                        value: rewardedPoints,
                      }}
                      cornerRadius="50%"
                      sx={(theme) => ({
                        [`& .${gaugeClasses.valueText}`]: {
                          color: "#FE5150",
                        },
                        [`& .${gaugeClasses.valueArc}`]: {
                          fill: "#FE5150",
                        },
                        [`& .${gaugeClasses.referenceArc}`]: {
                          fill: theme.palette.text.disabled,
                        },
                      })}
                    />
                  </div>
                </div>{" "}
              </Grid>
              <Grid
                size={8}
                sx={{ background: "#FFF4E4", borderRadius: "0.75rem" }}
              >
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                  ]}
                  // width={400}
                  height={300}
                  sx={{ width: { sx: "100%" } }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ padding: "1rem" }}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid size={3}>
                <h3 style={{ color: "#434D55" }}>Popular Rewards</h3>
              </Grid>
              <Grid
                size={3}
                style={{
                  display: "flex",
                  justifyContent: "left",
                }}
              >
                <Button
                  style={{
                    background: "none",
                    color: "#2D8856",
                    borderRadius: "0.45rem",
                  }}
                  onClick={() => setDisplayCount(products.length)}
                >
                  View All
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ padding: "1rem" }}>
            <Grid container spacing={2} sx={{ rowGap: 4, columnGap: 2 }}>
              {products
                .slice(0, displayCount)
                .map((e: ProductType, index: number) => (
                  <Grid size={3} key={e.id}>
                    <Product product={{ ...e }} key={e.id} manage={false} />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
