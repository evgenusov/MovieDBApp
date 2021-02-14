import {
  FabriceSliceState,
  FabriceSliceStatusEnum,
  fabricSlice,
} from '../../core/slices';
import { GenreType } from '../../core/types';

const initialState: FabriceSliceState<GenreType> = {
  status: FabriceSliceStatusEnum.INIT,
};

export const genresSlice = fabricSlice<GenreType>('genres', initialState);

export const genresReducer = genresSlice.reducer;
export const genresActions = genresSlice.actions;
