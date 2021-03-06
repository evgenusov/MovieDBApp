import { MovieType } from '../../core/types';
import { handleApiResponse, http } from '../http';
import { ApiPagedResponse } from './types';

/**
 * Object for work with movies  API
 */
export const MoviesAPI = {
  /**
   * Endpoint for getting popular movies
   * @returns
   */
  async fetchPopularMovies(): Promise<ApiPagedResponse<MovieType>> {
    const response = await http.request({
      url: 'movie/popular',
    });
    return handleApiResponse(response);
  },
};
