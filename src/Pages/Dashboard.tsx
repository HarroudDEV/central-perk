import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { LineChart } from "@mui/x-charts";
import SideNavbar from "../Components/SideNavbar";
import { useSelector } from "react-redux";
import { RootStore } from "../Store/index";
import Product from "../Components/Product";
import { Product as ProductType } from "../Store/Reducer";
import Button from "@mui/material/Button";
import { useState } from "react";

function Dashboard() {
  const products = useSelector((state: RootStore) => state.products);
  const [displayCount, setDisplayCount] = useState<number>(4);
  return (
    <Box sx={{ flexGrow: 1 }} style={{ height: "100%", width: "100%" }}>
      <Grid container spacing={2} style={{ height: "100%", width: "100%" }}>
        <Grid
          size={2}
          style={{
            background: "#FFF5E1",
            borderRadius: "0.5rem",
          }}
        >
          <SideNavbar />
        </Grid>
        <Grid size={10} style={{ marginTop: "1rem" }}>
          {/* this is grid for charts */}
          <Box style={{ padding: "0.5rem 2rem" }}>
            <Grid
              container
              spacing={2}
              style={{
                background: "#2E8A57",
                borderRadius: "2rem",
                padding: "2rem",
              }}
            >
              <Grid size={4}>
                <div
                  className="redeemCodes"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#FFF5E1",
                    borderRadius: "1rem",
                  }}
                >
                  <div className="text" style={{ color: "#2E8A57" }}>
                    Reedem Points this week
                  </div>
                  <div className="chart">
                    <Gauge
                      width={100}
                      height={100}
                      value={60}
                      sx={(theme) => ({
                        [`& .${gaugeClasses.valueText}`]: {
                          fontSize: 20,
                        },
                        [`& .${gaugeClasses.valueArc}`]: {
                          fill: "#2E8A57",
                        },
                        [`& .${gaugeClasses.referenceArc}`]: {
                          fill: theme.palette.text.disabled,
                        },
                      })}
                    />
                  </div>
                </div>
                <div
                  className="rewarderCodes"
                  style={{
                    display: "flex",
                    marginTop: "1rem",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#FFF5E1",
                    borderRadius: "1rem",
                  }}
                >
                  <div className="text" style={{ color: "#FE5150" }}>
                    Rewarder Points this week
                  </div>
                  <div className="chart">
                    <Gauge
                      width={100}
                      height={100}
                      value={60}
                      sx={(theme) => ({
                        [`& .${gaugeClasses.valueText}`]: {
                          fontSize: 20,
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
                </div>
              </Grid>
              <Grid
                size={8}
                style={{
                  borderRadius: "1rem",
                  background: "#FFF5E1",
                }}
              >
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                  ]}
                  width={500}
                  height={200}
                />
              </Grid>
            </Grid>
          </Box>
          <Box style={{ padding: "0.5rem 2rem" }}>
            <Grid container spacing={2}>
              <Grid size={3}>
                <h3>Popular Rewards</h3>
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
                    padding: "0rem",
                    borderRadius: "0.45rem",
                  }}
                  onClick={() => setDisplayCount(products.length)}
                >
                  View All
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box style={{ padding: "0.5rem 2rem" }}>
            <Grid container spacing={2} sx={{ rowGap: 4, columnGap: 2 }}>
              {products
                .slice(0, displayCount)
                .map((e: ProductType, index: number) => (
                  <Grid size={3} key={e.id}>
                    <Product product={{ ...e }} key={e.id} />
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
