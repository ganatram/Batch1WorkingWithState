import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const myStore = configureStore({
  reducer: { user: userReducer },
});

export type RootState = ReturnType<typeof myStore.getState>;
