import { all } from 'redux-saga/effects';
import { HomeScreenSagas } from './home/sagas';
import { GenresSagas } from './movie/sagas';
import { SearchSagas } from './search/sagas';

export default function* rootSaga() {
  yield all([HomeScreenSagas(), GenresSagas(), SearchSagas()]);
}
