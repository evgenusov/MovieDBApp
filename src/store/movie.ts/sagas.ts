import { takeLatest, call, put } from 'redux-saga/effects';
import { MoviesAPI } from '../../services/api/movies';
import { GenreResponse } from '../../services/api/types';
import { genresActions } from './reducer';

function* getGenresSaga() {
  try {
    const results: GenreResponse = yield call(MoviesAPI.fetchMovieGenres);
    yield put(genresActions.success(results.genres));
  } catch (e) {
    yield put(genresActions.failed(e));
  }
}

export function* GenresSagas() {
  yield takeLatest(genresActions.run, getGenresSaga);
}
