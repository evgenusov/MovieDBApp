import { takeLatest, call, put } from 'redux-saga/effects';
import { MovieType, TVShowType } from '../../core/types';
import { DiscoverAPI } from '../../services/api/discover';
import { MoviesAPI } from '../../services/api/movies';
import { TvShowAPI } from '../../services/api/tv';
import { ApiPagedResponse } from '../../services/api/types';
import { homeScreenActions } from './reducer';
import { HomeScreenSection, HomeScreenCarouselTypeEnum } from './types';

/**
 * Saga for fetching data for home screen's sections
 */
function* fetchHomeSaga() {
  try {
    yield put(homeScreenActions.start());
    const familyGenreId = '10751';
    const documentaryGenreId = '99';

    const popularMoviesResponse: ApiPagedResponse<MovieType> = yield call(
      MoviesAPI.fetchPopularMovies,
    );
    const popularSeriesResponse: ApiPagedResponse<TVShowType> = yield call(
      TvShowAPI.fetchPopularSeries,
    );
    const documenaryMovieResponse: ApiPagedResponse<MovieType> = yield call(
      DiscoverAPI.discoverMovies,
      {
        with_genres: documentaryGenreId,
      },
    );
    const familyMovieResponse: ApiPagedResponse<MovieType> = yield call(
      DiscoverAPI.discoverMovies,
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

/**
 * Sagas for home screen
 */
export function* HomeScreenSagas() {
  yield takeLatest(homeScreenActions.run, fetchHomeSaga);
}
