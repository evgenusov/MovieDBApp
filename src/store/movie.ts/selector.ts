import { GenreType } from '../../core/types';
import { RootState } from '../reducer';

export const genreSelector = (state: RootState, genreIds: number[]) => {
  const genres: GenreType[] = state.genres.data || [];

  return genres.filter((genre) => genreIds.includes(genre.id));
};

export const genresSelector = (state: RootState) => {
  return state.genres;
};
