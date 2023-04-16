import { configureStore } from '@reduxjs/toolkit';
import { searchBarReducer } from './searchBarSlice';
import { formsTableReducer } from './formsTableSlice';
import { apiSlice } from './apiSlice';

export const store = configureStore({
  reducer: {
    search: searchBarReducer,
    forms: formsTableReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
