import * as React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  TextField,
  Button,
  Box,
  Modal,
  Input,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  modalOpen,
  Product as ProductType,
  updateProduct,
} from "../../Store/Reducer";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../Store";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { removeProduct } from "../../Store/Reducer";
import ImageIcon from "@mui/icons-material/Image";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: { xs: "90%", sm: "450px", m: "450px" },
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "0.5rem",
  p: 4,
};

type FormFields = {
  id: string;
  title: string;
  category: string;
  rewardPoints: number;
  description: string;
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
const ManageRewardsModal = () => {
  const selectedProduct = useSelector(
    (state: RootStore) => state.selectedProduct
  ) as ProductType;
  const [productImage, setProductImage] = React.useState<null | string>(
    selectedProduct.image
  );

  const open = useSelector((state: RootStore) => state.updateRewardsModal);
  const dispatch = useDispatch();
  const { formState, register, handleSubmit, control } = useForm<FormFields>({
    defaultValues: {
      id: selectedProduct.id,
      title: selectedProduct.title || "no title",
      category: selectedProduct.category,
      rewardPoints: selectedProduct.rewardPoints,
      description: selectedProduct.description,
    },
  });

  function closeModal() {
    dispatch(modalOpen({ target: "UPDATE" }));
  }

  const updateProductHandler: SubmitHandler<FormFields> = (formData) => {
    dispatch(updateProduct({ ...formData, image: productImage }));
    closeModal();
  };

  const deleteProduct = (productID: string, rewardPoints: number) => {
    dispatch(removeProduct({ id: productID, rewardPoints }));
    closeModal();
  };
  function handleProductImage(e: React.ChangeEvent<HTMLInputElement>) {
    const { target } = e;
    if (target.files) {
      const productImageBlob = URL.createObjectURL(target.files[0]);
      setProductImage(productImageBlob);
    }
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={() => closeModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit(updateProductHandler)}>
          <Box sx={style}>
            <h4 style={{ color: "#AA6450" }}>Update Reward</h4>
            <h6 style={{ color: "#434D55" }}>Reward details</h6>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid size={6}>
                <FormControl fullWidth>
                  {/* Use TextField instead of Input for Reward Title */}
                  <TextField
                    label="Reward Title"
                    variant="outlined"
                    {...register("title")}
                    sx={{
                      background: "#FFF4E4",
                      marginTop: "0.5rem",
                      borderRadius: "0.5rem",
                      color: "#434D55",
                    }}
                  />

                  {/* Category Select */}
                  <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        label="Select Category"
                        sx={{
                          background: "#FFF4E4",
                          marginTop: "0.5rem",
                          borderRadius: "0.5rem",
                          color: "#434D55",
                        }}
                      >
                        <MenuItem value="" disabled>
                          Select a category
                        </MenuItem>
                        <MenuItem value={"Coffee"}>Coffee</MenuItem>
                        <MenuItem value={"Snacks"}>Snacks</MenuItem>
                        <MenuItem value={"Merch"}>Merch</MenuItem>
                      </Select>
                    )}
                  />

                  {/* Use TextField for Reward Points */}
                  <TextField
                    type="number"
                    label="Reward Price"
                    {...register("rewardPoints")}
                    sx={{
                      background: "#FFF4E4",
                      marginTop: "0.5rem",
                      borderRadius: "0.5rem",
                    }}
                  />

                  {/* Use TextField for Reward Description */}
                  <TextField
                    label="Reward Description"
                    multiline
                    rows={6}
                    {...register("description")}
                    variant="outlined"
                    sx={{
                      background: "#FFF4E4",
                      marginTop: "0.5rem",
                      width: "100%",
                      borderRadius: "0.5rem",
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid size={6} sx={{ padding: "0.5rem" }}>
                <div
                  className="upload-file-container"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "2rem",
                    borderRadius: "0.75rem",
                    alignItems: "center",
                    height: "12rem",
                    background: "#FFF4E4",
                    padding: "1rem 1rem",
                  }}
                >
                  <div
                    className="file-uploaded-img"
                    style={{ maxWidth: "5rem" }}
                  >
                    {(productImage && (
                      <img
                        src=""
                        alt=""
                        srcSet={productImage}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    )) || (
                      <ImageIcon sx={{ color: "#2E8956", fontSize: "3rem" }} />
                    )}
                  </div>
                  <div className="upload-btn">
                    <Button
                      component="label"
                      role={undefined}
                      variant="contained"
                      tabIndex={-1}
                      startIcon={<CloudUploadIcon sx={{ color: "#2E8956" }} />}
                      style={{
                        color: "#2E8956 !important",
                        boxShadow: "none",
                        background: "#FFF4E4",
                      }}
                    >
                      <span
                        style={{
                          color: "#2E8956",
                        }}
                      >
                        Upload Image
                      </span>
                      <VisuallyHiddenInput
                        type="file"
                        onChange={handleProductImage}
                        multiple
                      />
                    </Button>
                    <br />
                  </div>
                  <span style={{ fontSize: "0.7rem", color: "#434D55" }}>
                    Upload a cover image for your product
                  </span>
                </div>
                <Box sx={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      background: "#AA6450",
                      padding: "0.3rem 2rem",
                      borderRadius: "1rem",
                      border: "none",
                      color: "#FFF",
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    style={{
                      background: "#FE5150",
                      padding: "0.3rem 2rem",
                      borderRadius: "1rem",
                      border: "none",
                      color: "#FFF",
                    }}
                    onClick={() =>
                      deleteProduct(
                        selectedProduct.id,
                        selectedProduct.rewardPoints
                      )
                    }
                    variant="outlined"
                  >
                    Delete
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Modal>
    </div>
  );
};

export default ManageRewardsModal;
