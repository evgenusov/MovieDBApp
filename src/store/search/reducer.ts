import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  FabriceSliceState,
  FabriceSliceStatusEnum,
  fabricSlice,
} from '../../core/slices';
import { MovieType } from '../../core/types';
import { DiscoverMoviesParams } from '../../services/api/types';

const discover = createAction<DiscoverMoviesParams>('discover');
const search = createAction<string>('search');

const initialState: FabriceSliceState<MovieType> = {
  status: FabriceSliceStatusEnum.INIT,
};

const extraReducers = createReducer(0, (builder) =>
  builder
    .addCase(discover, (state, _) => {
      return state;
    })
    .addCase(search, (state, _: PayloadAction<string>) => {
      return state;
    }),
);

export const searchSlice = fabricSlice<MovieType>('search', initialState, {
  ...extraReducers,
});

export const searchReducer = searchSlice.reducer;
export const searchActions = {
  ...searchSlice.actions,
  discover,
  search,
};
