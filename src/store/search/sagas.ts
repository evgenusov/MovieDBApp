import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { MovieType } from '../../core/types';
import { DiscoverAPI } from '../../services/api/discover';
import { SearchAPI } from '../../services/api/search';
import {
  ApiPagedResponse,
  DiscoverMoviesParams,
} from '../../services/api/types';
import { searchActions } from './reducer';

export function* DiscoverMovieSaga({
  payload,
}: PayloadAction<DiscoverMoviesParams>) {
  try {
    yield put(searchActions.start());
    const response: ApiPagedResponse<MovieType> = yield call(
      DiscoverAPI.discoverMovies,
      payload,
    );
    yield put(searchActions.success(response.results));
  } catch (e) {
    yield put(searchActions.failed(e));
  }
}

export function* SearchMovieSaga({ payload }: PayloadAction<string>) {
  try {
    yield put(searchActions.start());
    const response: ApiPagedResponse<MovieType> = yield call(
      SearchAPI.search,
      payload,
    );

    yield put(searchActions.success(response.results));
  } catch (e) {
    yield put(searchActions.failed(e));
  }
}

export function* SearchSagas() {
  yield takeLatest(searchActions.discover, DiscoverMovieSaga);
  yield takeLatest(searchActions.search, SearchMovieSaga);
}
