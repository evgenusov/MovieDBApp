import { MovieType } from '../../core/types';
import { handleApiResponse, http } from '../http';
import { ApiPagedResponse } from './types';

/**
 * Object for work with search API
 */
export const SearchAPI = {
  /**
   * Search movie
   * @param query search query
   * @returns
   */
  async search(query: string): Promise<ApiPagedResponse<MovieType>> {
    const response = await http.request({
      url: '/search/movie',
      params: {
        query,
      },
    });
    return handleApiResponse(response);
  },
};
