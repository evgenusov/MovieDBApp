import {
  FabriceSliceState,
  FabriceSliceStatusEnum,
  fabricSlice,
} from '../../core/slices';
import { HomeScreenSection } from './types';

const initialState: FabriceSliceState<HomeScreenSection> = {
  status: FabriceSliceStatusEnum.INIT,
};

export const homeScreenSlice = fabricSlice<HomeScreenSection>(
  'homeScreen',
  initialState,
);

export const homeScreenReducer = homeScreenSlice.reducer;
export const homeScreenActions = homeScreenSlice.actions;
