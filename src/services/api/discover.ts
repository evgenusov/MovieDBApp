import { MovieType } from '../../core/types';
import { handleApiResponse, http } from '../http';
import { ApiPagedResponse, DiscoverMoviesParams } from './types';

/**
 * Object for work with discover API
 */
export const DiscoverAPI = {
  /**
   * Search movie by params
   * @param params – params for discover [url: https://www.themoviedb.org/documentation/api/discover]
   * @returns
   */
  async discoverMovies(
    params: DiscoverMoviesParams,
  ): Promise<ApiPagedResponse<MovieType>> {
    const response = await http.request({
      url: 'discover/movie',
      params,
    });
    return handleApiResponse(response);
  },
};
