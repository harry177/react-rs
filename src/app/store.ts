import { configureStore } from '@reduxjs/toolkit';
import { searchBarReducer } from './searchBarSlice';
import { apiSlice } from './apiSlice';

export const store = configureStore({
  reducer: {
    search: searchBarReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
