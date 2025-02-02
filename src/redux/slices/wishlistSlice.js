import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: [],
    reducers: {
        addToWishlist: (state, action) => {
            state.push(action.payload);
        },
        removeItem: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
        addToCart: (state, action) => {
            console.log("Item added to cart:", action.payload);
        }
    }
});

// ✅ Export all required actions
export const { addToWishlist, removeItem, addToCart } = wishlistSlice.actions;
export default wishlistSlice.reducer;
