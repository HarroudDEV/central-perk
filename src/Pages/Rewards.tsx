import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Product from "../Components/Product";
import ManageRewardsModal from "../Components/Modals/ManageProductModal";
import AddRewardsModal from "../Components/Modals/AddRewardsModal";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../Store";
import { modalOpen, type Product as ProductType } from "../Store/Reducer";
import { useState } from "react";
import SideNavbar from "../Components/SideNavbar";
import MobileSideNavbar from "../Components/MobileSideNavbar";
import AddIcon from "@mui/icons-material/Add";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

function Rewards() {
  const updateModal = useSelector(
    (state: RootStore) => state.updateRewardsModal
  );
  const newRewardModal = useSelector(
    (state: RootStore) => state.addRewardsModal
  );
  const products = useSelector((state: RootStore) => state.products);
  const dispatch = useDispatch();

  const [displayCount, setDisplayCount] = useState<number>(4);
  const [filter, setCategoryFilter] = useState<string>("");

  function filterProductsByCategory(category: string) {
    setCategoryFilter(category);
  }
  return (
    <>
      <Box>
        <Grid
          container
          spacing={2}
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Grid size={2} sx={{ display: { xs: "none", sm: "flex" } }}>
            <SideNavbar />
          </Grid>
          <Grid size={2} sx={{ display: { xs: "block", sm: "none" } }}>
            <MobileSideNavbar />
          </Grid>

          <Grid size={10} className="full-display-mobile">
            {/* this is grid for charts */}
            <Box sx={{ padding: "1rem" }}>
              <h3 style={{ color: "#434D55" }}>Categories</h3>
              <Grid
                container
                className="categories"
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid size={4}>
                  <div
                    style={{
                      height: "6rem",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    onClick={() => filterProductsByCategory("Coffee")}
                  >
                    <img
                      src=""
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(0.4)",
                        borderRadius: "0.75rem",
                      }}
                      srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQF7Vm0gnqruOw1v0hDS7tek4eAWez9sDSnw&s"
                    />
                    <p
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "#FFF",
                      }}
                    >
                      Coffee
                    </p>
                  </div>
                </Grid>
                <Grid size={4}>
                  <div
                    style={{
                      height: "6rem",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    onClick={() => filterProductsByCategory("Snacks")}
                  >
                    <img
                      src=""
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(0.4)",
                        borderRadius: "0.75rem",
                      }}
                      srcSet="data:image/jpeg;base64,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"
                    />
                    <p
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "#FFF",
                      }}
                    >
                      Snack
                    </p>
                  </div>{" "}
                </Grid>
                <Grid size={4}>
                  <div
                    style={{
                      height: "6rem",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    onClick={() => filterProductsByCategory("Merch")}
                  >
                    <img
                      src=""
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(0.4)",
                        borderRadius: "0.75rem",
                      }}
                      srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9urbO_QzaPfvgIphhqgUSHeBVmzJhuQcj3A&s"
                    />
                    <p
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "#FFF",
                      }}
                    >
                      Merch
                    </p>
                  </div>{" "}
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ padding: "1rem" }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid size={3}>
                  <h3 style={{ color: "#434D55" }}>Manage Rewards</h3>
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
                    onClick={() => {
                      setDisplayCount(products.length);
                      setCategoryFilter("");
                    }}
                  >
                    View All
                  </Button>
                </Grid>
                <Grid
                  size={6}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    style={{
                      background: "#2D8856",
                      color: "#FFF",
                      padding: "1rem 1.5rem",
                      borderRadius: "1rem",
                      maxHeight: "2.5rem",
                    }}
                    onClick={() => dispatch(modalOpen({ target: "ADD" }))}
                  >
                    <AddCircleRoundedIcon />
                    Add Reward
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ padding: "1rem" }}>
              <Grid
                container
                // spacing={1}
                sx={{ rowGap: 4, columnGap: 2 }}
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {(filter &&
                  products
                    .filter((e) => e.category === filter)
                    .map((e: ProductType, index: number) => (
                      <Grid size={2} key={e.id}>
                        <Product product={{ ...e }} key={e.id} manage={true} />
                      </Grid>
                    ))) ||
                  products
                    .slice(0, displayCount)
                    .map((e: ProductType, index: number) => (
                      <Grid size={2} key={e.id}>
                        <Product product={{ ...e }} key={e.id} manage={true} />
                      </Grid>
                    ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {updateModal && <ManageRewardsModal />}
      {newRewardModal && <AddRewardsModal />}
    </>
  );
}

export default Rewards;
