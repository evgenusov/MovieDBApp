import { combineReducers } from '@reduxjs/toolkit';
import { homeScreenReducer } from './home/reducer';
import { genresReducer } from './movie/reducer';
import { searchReducer } from './search/reducer';

export const rootReducer = combineReducers({
  homeScreen: homeScreenReducer,
  genres: genresReducer,
  search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
