import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface ISearch {
  search: string;
}

const initialState: ISearch = {
  search: '',
};

const searchBarSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateClick(state, action: PayloadAction<string>) {
      console.log(action);
      state.search = action.payload;
    },
    buttonClick(state, action: PayloadAction<string>) {
      console.log(action);
      state.search = action.payload;
    },
  },
});

export const { updateClick, buttonClick } = searchBarSlice.actions;
export const searchBarReducer = searchBarSlice.reducer;
