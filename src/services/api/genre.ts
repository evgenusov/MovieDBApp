import { handleApiResponse, http } from '../http';
import { GenreResponse } from './types';

/**
 * Object for work with tv series API
 */
export const GenresAPI = {
  /**
   * Endpoint for getting movie genres list
   * @returns
   */
  async fetchMovieGenres(): Promise<GenreResponse> {
    const response = await http.request({
      url: 'genre/movie/list',
    });
    return handleApiResponse(response);
  },
};
