import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const matchInCart = state.some(
        (detail) => detail.product.slug === action.payload.product.slug
      );
      if (matchInCart) {
        return state.map((detail) => {
          if (detail.product.slug === action.payload.product.slug) {
            return {
              product: action.payload.product,
              quantity: action.payload.quantity + 1,
              fixedPrice: action.payload.fixedPrice,
            };
          } else {
            return detail;
          }
        });
      } else {
        return [...state, action.payload];
      }
    },
    removeProduct(state, action) {
      if (action.payload.quantity > 1) {
        return state.map((detail) => {
          if (detail.product.slug === action.payload.product.slug) {
            return {
              product: action.payload.product,
              quantity: action.payload.quantity - 1,
              fixedPrice: action.payload.fixedPrice,
            };
          } else {
            return detail;
          }
        });
      } else {
        return state.filter(
          (detail) => detail.product._id !== action.payload.product._id
        );
      }
    },
    removeAllThisProducts(state, action) {
      return state.filter(
        (detail) => detail.product._id !== action.payload.product._id
      );
    },
    removeEveryProducts() {
      return [];
    },
  },
});

export const {
  addProduct,
  removeProduct,
  removeAllThisProducts,
  removeEveryProducts,
} = cartSlice.actions;
export default cartSlice.reducer;
