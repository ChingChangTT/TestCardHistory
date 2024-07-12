import { configureStore } from '@reduxjs/toolkit';
import contentReducer from '../../Components/Card/CardSlice';

const store = configureStore({
  reducer: {
    content: contentReducer
  }
});

export default store;
