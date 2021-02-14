import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum FabriceSliceStatusEnum {
  INIT = 'INIT',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export type FabriceSliceState<T> = {
  data?: T[];
  status: FabriceSliceStatusEnum;
  error?: string;
};

/**
 * This is fabrice for slice that can help avoid boilerplate to create new reducers
 * @param name – name for reducer
 * @param initialState – defaultState for reducers
 * @returns
 */
export const fabricSlice = <T>(
  name: string,
  initialState: FabriceSliceState<any>,
  extraReducers?: Record<string, CaseReducer>,
) => {
  return createSlice({
    name,
    initialState,
    reducers: {
      init: (state) => {
        state.data = undefined;
        state.status = FabriceSliceStatusEnum.INIT;

        return state;
      },
      run: (state) => {
        return state;
      },
      start: (state) => {
        state.status = FabriceSliceStatusEnum.LOADING;
        return state;
      },
      success: (state, action: PayloadAction<T[]>) => {
        state.status = FabriceSliceStatusEnum.SUCCESS;
        state.data = action.payload;

        return state;
      },
      failed: (state, action: PayloadAction<string | undefined>) => {
        state.status = FabriceSliceStatusEnum.FAILURE;
        state.error = action.payload;

        return state;
      },
      ...extraReducers,
    },
  });
};
