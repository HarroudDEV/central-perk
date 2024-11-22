// import * as React from "react";
// import {
//   FormControl,
//   MenuItem,
//   Select,
//   Input,
//   TextField,
//   Button,
//   Box,
//   Modal,
//   Alert,
// } from "@mui/material";
// import Grid from "@mui/material/Grid2";
// import CheckIcon from "@mui/icons-material/Check";

// import {
//   modalOpen,
//   Product as ProductType,
//   updateProduct,
// } from "../../Store/Reducer";
// import { useDispatch, useSelector } from "react-redux";
// import { RootStore } from "../../Store";
// import { SubmitHandler, useForm, Controller } from "react-hook-form";
// import { addNewProduct } from "../../Store/Reducer";
// import { v4 as uuidv4 } from "uuid";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 700,
//   height: 400,
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   borderRadius: "0.5rem",
//   p: 4,
// };

// type FormFields = {
//   id: string;
//   title: string;
//   category: string;
//   rewardPoints: number;
//   description: string;
// };

// const AddRewardsModal = () => {
//   const open = useSelector((state: RootStore) => state.addRewardsModal);
//   const dispatch = useDispatch();
//   const {
//     formState: { errors },
//     register,
//     handleSubmit,
//     control,
//   } = useForm<FormFields>({});

//   function closeModal() {
//     dispatch(modalOpen({ target: "ADD" }));
//   }

//   const addProductHandler: SubmitHandler<FormFields> = (formData) => {
//     const uniqueID = uuidv4();
//     dispatch(addNewProduct({ ...formData, id: uniqueID }));
//     closeModal();
//   };

//   return (
//     <div>
//       <Modal
//         open={open}
//         onClose={() => closeModal()}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Grid container spacing={2}>
//             <Grid size={6}>
//               <form onSubmit={handleSubmit(addProductHandler)}>
//                 <FormControl>
//                   <Input
//                     placeholder="Reward Title"
//                     {...register("title", { required: true })}
//                     sx={{
//                       background: "#FFF4E4",
//                       marginTop: "0.5rem", // Margin on top
//                       width: "100%", // Full width
//                       padding: "10px", // Padding inside the input
//                       "&:focus": {
//                         outline: "none", // Remove focus outline
//                         boxShadow: "none", // Remove the blue focus box-shadow
//                       },
//                       "& .MuiInputBase-input": {
//                         padding: "10px", // Padding inside the input field
//                       },
//                     }}
//                     style={{
//                       background: "#FFF4E4",
//                       marginTop: "0.5rem",
//                       borderRadius: "0.5rem",
//                       padding: "0.5rem",
//                     }}
//                   ></Input>
//                   <Controller
//                     name="category"
//                     control={control}
//                     render={({ field }) => (
//                       <Select
//                         {...field}
//                         required
//                         label="Select Category"
//                         sx={{
//                           background: "#FFF4E4",
//                           marginTop: "0.5rem",
//                           borderRadius: "0.5rem",
//                         }}
//                       >
//                         <MenuItem value={"Coffee"}>Coffee</MenuItem>
//                         <MenuItem value={"Snacks"}>Snacks</MenuItem>
//                         <MenuItem value={"Merch"}>Merch</MenuItem>
//                       </Select>
//                     )}
//                   />
//                   <Input
//                     type="number"
//                     placeholder="Reward price"
//                     {...register("rewardPoints", { required: true })}
//                     style={{
//                       background: "#FFF4E4",
//                       marginTop: "0.5rem",
//                       padding: "0.5rem",
//                       borderRadius: "0.5rem",
//                     }}
//                     sx={{
//                       background: "#FFF4E4", // Background color
//                       marginTop: "0.5rem", // Margin on top
//                       width: "100%", // Full width
//                       padding: "10px", // Padding inside the input
//                       "&:focus": {
//                         outline: "none", // Remove focus outline
//                         boxShadow: "none", // Remove the blue focus box-shadow
//                       },
//                       "& .MuiInputBase-input": {
//                         padding: "10px", // Padding inside the input field
//                       },
//                     }}
//                   />
//                   <TextField
//                     placeholder="Reward Description"
//                     multiline
//                     rows={6}
//                     {...register("description", { required: true })}
//                     variant="standard"
//                     style={{ borderRadius: "0.5rem" }}
//                     sx={{
//                       background: "#FFF4E4",
//                       marginTop: "0.5rem",
//                       border: "none",
//                       width: "100%",
//                       padding: "10px", // Control internal padding
//                       "& .MuiInputBase-root": {
//                         height: "100px", // Set height of the input
//                         paddingTop: "3rem", // Padding inside the input box
//                       },
//                     }}
//                   />
//                   <Button type="submit">Save</Button>
//                   <Button onClick={() => closeModal()}>Cancel</Button>
//                 </FormControl>
//               </form>
//             </Grid>
//             <Grid size={6}>
//               {errors.root && (
//                 <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">
//                   {errors.root?.message}
//                 </Alert>
//               )}
//             </Grid>
//           </Grid>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default AddRewardsModal;

import * as React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  Input,
  TextField,
  Button,
  Box,
  Modal,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import { modalOpen, Product as ProductType } from "../../Store/Reducer";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../Store";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { addNewProduct } from "../../Store/Reducer";
import { v4 as uuidv4 } from "uuid";
import Product from "../Product";
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

const AddRewardsModal = () => {
  const open = useSelector((state: RootStore) => state.addRewardsModal);
  const [productImage, setProductImage] = React.useState<null | string>(null);
  const dispatch = useDispatch();
  const {
    formState: { errors },
    register,
    handleSubmit,
    control,
  } = useForm<FormFields>({});

  function closeModal() {
    dispatch(modalOpen({ target: "ADD" }));
  }

  const addProductHandler: SubmitHandler<FormFields> = (formData) => {
    const uniqueID = uuidv4();
    const img = productImage as string;
    console.log(img);
    dispatch(addNewProduct({ ...formData, id: uniqueID, image: img }));
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
        <form onSubmit={handleSubmit(addProductHandler)}>
          <Box sx={style}>
            <Grid container spacing={2}>
              <Grid size={6}>
                <FormControl fullWidth>
                  {/* Use TextField instead of Input for Reward Title */}
                  <TextField
                    label="Reward Title"
                    variant="outlined"
                    required
                    {...register("title", { required: true })}
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
                        required
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
                    required
                    {...register("rewardPoints", { required: true })}
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
                    required
                    rows={6}
                    {...register("description", { required: true })}
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
                      background: "green",
                      padding: "0.3rem 2rem",
                      borderRadius: "1rem",
                      border: "none",
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    onClick={() => closeModal()}
                    variant="outlined"
                    style={{
                      background: "#F0F0F0",
                      padding: "0.3rem 2rem",
                      borderRadius: "1rem",
                      border: "none",
                    }}
                  >
                    Cancel
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

export default AddRewardsModal;
