import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { IUserCard } from '../Components/UserCard/UserCard';

interface State {
  forms: IUserCard[];
}

const formsTableSlice = createSlice({
  name: 'search',
  initialState: {
    forms: [],
  } as State,
  reducers: {
    formSubmit(state, { payload }: PayloadAction<IUserCard>) {
      state.forms.push(payload);
    },
  },
});

export const { formSubmit } = formsTableSlice.actions;
export const formsTableReducer = formsTableSlice.reducer;
