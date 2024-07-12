import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  all_content: [],
  error: ''
};

export const fetchContent = createAsyncThunk('content/fetchContent', async () => {
  const response = await axios.get('http://136.228.158.126:50003/api/contents/all_content/');
  return response.data;
});

const contentSlice = createSlice({
  name: 'content',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContent.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContent.fulfilled, (state, action) => {
        state.loading = false;
        state.all_content = action.payload;
        state.error = '';
      })
      .addCase(fetchContent.rejected, (state, action) => {
        state.loading = false;
        state.all_content = [];
        state.error = action.error.message;
      });
  }
});

export default contentSlice.reducer;
