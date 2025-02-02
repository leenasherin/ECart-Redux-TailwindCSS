import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetching products from the API
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const result = await axios.get('https://dummyjson.com/products');
  sessionStorage.setItem('allProducts', JSON.stringify(result.data.products));
  return result.data.products;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
    filteredProducts: [],
    loading: false,
    errorMsg: '',
    searchQuery: '', // To store the search query
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      // Filter products based on search query
      state.filteredProducts = state.allProducts.filter((product) =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, apiResult) => {
      state.allProducts = apiResult.payload;
      state.filteredProducts = apiResult.payload; // Initially, display all products
      state.loading = false;
      state.errorMsg = '';
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.allProducts = [];
      state.filteredProducts = [];
      state.loading = true;
      state.errorMsg = '';
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.allProducts = [];
      state.filteredProducts = [];
      state.loading = false;
      state.errorMsg = 'API CALL FAILED';
    });
  },
});

export const { setSearchQuery } = productSlice.actions;
export default productSlice.reducer;
