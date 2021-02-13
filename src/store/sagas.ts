import { all } from 'redux-saga/effects';
import { HomeScreenSagas } from './home/sagas';
import { GenresSagas } from './movie.ts/sagas';

export default function* rootSaga() {
  yield all([HomeScreenSagas(), GenresSagas()]);
}
