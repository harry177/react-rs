import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface IInputs {
  text: string;
  date: string;
  language: string;
  approve: boolean;
  gender: string;
  picture: string;
}

const initialState: IInputs = {
  text: '',
  date: '',
  language: '',
  approve: false,
  gender: '',
  picture: '',
};

const inputTextSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    newName(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
    newDate(state, action: PayloadAction<string>) {
      state.date = action.payload;
    },
    newLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
    newApprove(state, action: PayloadAction<boolean>) {
      state.approve = action.payload;
    },
    newGender(state, action: PayloadAction<string>) {
      state.gender = action.payload;
    },
    newPicture(state, action: PayloadAction<string>) {
      state.picture = action.payload;
    },
  },
});

export const { newName, newDate, newLanguage, newApprove, newGender, newPicture } =
  inputTextSlice.actions;
export const inputTextReducer = inputTextSlice.reducer;
