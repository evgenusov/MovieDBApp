import { combineReducers } from '@reduxjs/toolkit';
import { homeScreenReducer } from './home/reducer';
import { genresReducer } from './movie.ts/reducer';

export const rootReducer = combineReducers({
  homeScreen: homeScreenReducer,
  genres: genresReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
