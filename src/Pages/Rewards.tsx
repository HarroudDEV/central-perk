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
          <Grid size={10}>
            {/* this is grid for charts */}
            <Box style={{ padding: "0.5rem 2rem" }}>
              <h3>Categories</h3>
              <Grid container spacing={2} className="categories">
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
                      Merch
                    </p>
                  </div>{" "}
                </Grid>
              </Grid>
            </Box>
            <Box style={{ padding: "0.5rem 2rem" }}>
              <Grid container spacing={2}>
                <Grid size={3}>
                  <h3>Manage Rewards</h3>
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
                    Add Reward
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <Box style={{ padding: "0.5rem 2rem" }}>
              <Grid container spacing={1} sx={{ rowGap: 4, columnGap: 2 }}>
                {(filter &&
                  products
                    .filter((e) => e.category === filter)
                    .map((e: ProductType, index: number) => (
                      <Grid size={2} key={e.id}>
                        <Product product={{ ...e }} key={e.id} />
                      </Grid>
                    ))) ||
                  products
                    .slice(0, displayCount)
                    .map((e: ProductType, index: number) => (
                      <Grid size={2} key={e.id}>
                        <Product product={{ ...e }} key={e.id} />
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
