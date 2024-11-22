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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 400,
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

const ManageRewardsModal = () => {
  const [productImage, setProductImage] = React.useState<null | string>(null);

  const selectedProduct = useSelector(
    (state: RootStore) => state.selectedProduct
  ) as ProductType;
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

  const deleteProduct = (productID: string) => {
    dispatch(removeProduct({ id: productID }));
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
            <Grid container spacing={2}>
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
              <Grid size={6}>
                <Input type="file" onChange={handleProductImage} />
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
                    onClick={() => deleteProduct(selectedProduct.id)}
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
