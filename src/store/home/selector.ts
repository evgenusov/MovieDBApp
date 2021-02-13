import { FabriceSliceStatusEnum } from '../../core/slices';
import { RootState } from '../reducer';

export const homeScreensStateSelector = (state: RootState) => state.homeScreen;
export const homeScreensSectionsLoading = (state: RootState) =>
  state.homeScreen.status === FabriceSliceStatusEnum.LOADING;
