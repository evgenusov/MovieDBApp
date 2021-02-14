import { FabriceSliceStatusEnum } from '../../core/slices';
import { RootState } from '../reducer';

export const searchResultSelector = (state: RootState) =>
  state.search.data || [];

export const searchResultLoading = (state: RootState) =>
  state.search.status === FabriceSliceStatusEnum.LOADING;
