import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity++;
        existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
        const remainingProducts = state.filter((item) => item.id !== existingProduct.id);
        state = [...remainingProducts, existingProduct];
      } else {
        state.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price });
      }
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const existingProduct = state.find((item) => item.id === action.payload);
      existingProduct.quantity++;
      existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
      const remainingProducts = state.filter((item) => item.id !== existingProduct.id);
      state = [...remainingProducts, existingProduct];
    },
    decrementQuantity: (state, action) => {
      const existingProduct = state.find((item) => item.id === action.payload);
      if (existingProduct.quantity > 1) {
        existingProduct.quantity--;
        existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
        const remainingProducts = state.filter((item) => item.id !== existingProduct.id);
        state = [...remainingProducts, existingProduct];
      }
    },
    emptyCart: () => {
      return []; // Clears the cart
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
