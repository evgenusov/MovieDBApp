import { MovieType, TVShowType } from '../../core/types';
import { handleApiResponse, http } from '../http';
import { ApiPagedResponse, DiscoerMoviesParams, GenreResponse } from './types';

export const MoviesAPI = {
  async fetchPopularMovies(): Promise<ApiPagedResponse<MovieType>> {
    const response = await http.request({
      url: 'movie/popular',
    });
    return handleApiResponse(response);
  },

  async fetchPopularSeries(): Promise<ApiPagedResponse<TVShowType>> {
    const response = await http.request({
      url: 'tv/popular',
    });
    return handleApiResponse(response);
  },

  async fetchMovieGenres(): Promise<GenreResponse> {
    const response = await http.request({
      url: 'genre/movie/list',
    });
    return handleApiResponse(response);
  },

  async discoverMovies(params: DiscoerMoviesParams): Promise<ApiPagedResponse<MovieType>> {
    const response = await http.request({
      url: 'discover/movie',
      params
    });
    return handleApiResponse(response);
  }
};
