import { red } from "@mui/material/colors";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export type Product = {
  id: string;
  title: string;
  image: string;
  category: string;
  rewardPoints: number;
  description: string;
};

export type initialState = {
  products: Product[] | [];
  selectedProduct: Product | {};
  updateRewardsModal: boolean;
  addRewardsModal: boolean;
};
const data: initialState = {
  products: new Array(10).fill(0).map((e) => ({
    id: uuidv4(),
    title: "Espresso",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tf1AO6sclOo4UQwAQ5xSfva7f5WF7IaEqQ&s",
    category: "Coffee",
    rewardPoints: 2500,
    description: "lorem ipsum",
  })),
  selectedProduct: {},
  updateRewardsModal: false,
  addRewardsModal: false,
};

const reducer = createSlice({
  name: "products",
  initialState: data,
  reducers: {
    selectedProductForUpdate: (state: initialState, action) => {
      // pick selected product
      return {
        ...state,
        selectedProduct: {
          ...state.selectedProduct,
          ...action.payload,
        },
      };
    },
    addNewProduct: (state, action: { payload: Product; type: string }) => {
      // add new product to store
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    },
    removeProduct: (state, action) => {
      // remove product from store
      const { id } = action.payload;
      let productsCopy = state.products;
      productsCopy = productsCopy.filter((e, index) => e.id != id);
      return {
        ...state,
        products: [...productsCopy],
      };
    },
    updateProduct: (state, action) => {
      // modify product
      const { id, category, description, rewardPoints, title, image } =
        action.payload;
      // Update the target product in the products array
      let productsCopy = state.products;
      productsCopy = state.products.map((product) => {
        if (product.id === id) {
          if (image) {
            return {
              ...product,
              category,
              description,
              rewardPoints,
              title,
              image,
            };
          }
          return {
            ...product,
            category,
            description,
            rewardPoints,
            title,
          };
        }
        return product;
      });
      return {
        ...state,
        products: [...productsCopy],
      };
    },
    modalOpen: (state, action) => {
      const { target } = action.payload;
      switch (target) {
        case "ADD": {
          state.addRewardsModal = !state.addRewardsModal;
          return state;
        }
        case "UPDATE": {
          state.updateRewardsModal = !state.updateRewardsModal;
          return state;
        }
        default: {
          return state;
        }
      }
    },
  },
});

export default reducer.reducer;
export const {
  selectedProductForUpdate,
  addNewProduct,
  removeProduct,
  updateProduct,
  modalOpen,
} = reducer.actions;
