import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const myStore = configureStore({
  reducer: { user: userReducer },
  // user - name of slice - state
  // userReducer - is the reducer who can interact with state
});
