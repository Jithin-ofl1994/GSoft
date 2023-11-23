import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CharacterService from '../services/CahracterService';

const initialState = {
  data: [],
  error: false,
  pagination: { offset: 0, tottalCount: 0, page: 0 },
  selectedCharacter: {},
};

const keys = ['name', 'race', 'gender'];

export const getCaharacter = createAsyncThunk(
  '/character/get',
  async ({ data, offset, count, page, filter }) => {
    const filterParam = new URLSearchParams();
    const filterSet = [];

    if (filter?.searchValue?.trim()?.length) {
      // keys.map((key) =>
      //   filterParam.set(key, `/${filter?.searchValue?.trim()}/i`),
      // );
      filterParam.set('name', `/${filter?.searchValue?.trim()}/i`);
    }

    if (filter?.genderValue && filter?.genderValue !== 'any') {
      filterParam.set('gender', filter?.genderValue);
    }

    if (filter?.raceValue && !filter?.raceValue.includes('all')) {
      const raceStrings =
        filter?.raceValue?.length === 1
          ? filter?.raceValue[0]
          : filter?.raceValue?.join(',');
      filterParam.set('race', raceStrings);
    }
    if (filter?.sortValue?.length) {
      const sortValue = `name:${filter?.sortValue}`;
      filterParam.set('sort', sortValue);
    }

    filterParam.set('offset', offset);
    filterParam.set('limit', count);
    const res = await CharacterService.getAll(filterParam.toString());
    return {
      result: res,
      offset: offset + count,
      page,
      prevData: data,
    };
  },
);

export const getCaharacterById = createAsyncThunk(
  '/character/getById',
  async ({ id }) => {
    const res = await CharacterService.getById(id);
    return res;
  },
);

const characterSlice = createSlice({
  name: 'character',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCaharacter.fulfilled, (state, action) => {
      state.data = [
        ...action.payload.prevData,
        ...action.payload.result.data.docs,
      ];
      state.pagination.tottalCount = action.payload.result.data.total;
      state.pagination.page = action.payload.page;
      state.pagination.offset = action.payload.offset;
      state.error = false;
    });

    builder.addCase(getCaharacter.rejected, (state, action) => {
      state.error = true;
    });

    builder.addCase(getCaharacterById.fulfilled, (state, action) => {
      state.pagination = { offset: 0, tottalCount: 0, page: 0 };
      state.selectedCharacter = { ...action.payload.data.docs[0] };
    });
  },
});

const { reducer } = characterSlice;

export default reducer;
