import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { takeLatest, all, call, put } from 'redux-saga/effects';
import { MovieType, TVShowType } from '../../core/types';
import { MoviesAPI } from '../../services/api/movies';
import { ApiPagedResponse } from '../../services/api/types';
import { homeScreenActions } from './reducer';
import { HomeScreenSection, HomeScreenCarouselTypeEnum } from './types';

function* fetchHomeSaga() {
  try {
    yield put(homeScreenActions.start());
    const familyGenreId = '10751';
    const documentaryGenreId = '99';

    const popularMoviesResponse: ApiPagedResponse<MovieType> = yield call(
      MoviesAPI.fetchPopularMovies,
    );
    const popularSeriesResponse: ApiPagedResponse<TVShowType> = yield call(
      MoviesAPI.fetchPopularSeries,
    );
    const documenaryMovieResponse: ApiPagedResponse<MovieType> = yield call(
      MoviesAPI.discoverMovies,
      {
        with_genres: documentaryGenreId,
      },
    );
    const familyMovieResponse: ApiPagedResponse<MovieType> = yield call(
      MoviesAPI.discoverMovies,
      {
        with_genres: familyGenreId,
      },
    );

    const sections: HomeScreenSection[] = [
      {
        title: 'Popular movies',
        type: HomeScreenCarouselTypeEnum.BIG_ITEMS,
        data: popularMoviesResponse.results,
      },
      {
        title: 'Popular TV shows',
        type: HomeScreenCarouselTypeEnum.BIG_ITEMS,
        data: popularSeriesResponse.results.map((item) => ({
          ...item,
          title: item.name,
          original_title: item.original_name,
        })),
      },
      {
        title: 'Family',
        type: HomeScreenCarouselTypeEnum.SMAILL_ITEMS,
        data: familyMovieResponse.results,
      },
      {
        title: 'Documetary',
        type: HomeScreenCarouselTypeEnum.SMAILL_ITEMS,
        data: documenaryMovieResponse.results,
      },
    ];

    yield put(homeScreenActions.success(sections));
  } catch (e) {
    yield put(homeScreenActions.failed(e));
  }
}

export function* HomeScreenSagas() {
  yield takeLatest(homeScreenActions.run, fetchHomeSaga);
}
