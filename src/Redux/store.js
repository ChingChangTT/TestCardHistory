// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { contentApi } from './Feature/contentReducer';

const store = configureStore({
  reducer: {
    [contentApi.reducerPath]: contentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contentApi.middleware),
});

export default store;
