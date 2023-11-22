import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CharacterService from '../services/CahracterService';

const initialState = {
  character: [],
};

export const getCaharacter = createAsyncThunk(
  '/character/get',
  async () => {
    const res = await CharacterService.getAll();
    return res;
  },
);

const characterSlice = createSlice({
  name: 'character',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCaharacter.fulfilled, (state, action) => {
      state.character = action.payload.data.docs;
    });
  },
});

const { reducer } = characterSlice;

export default reducer;
