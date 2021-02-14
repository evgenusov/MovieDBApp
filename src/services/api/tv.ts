import { TVShowType } from '../../core/types';
import { handleApiResponse, http } from '../http';
import { ApiPagedResponse } from './types';

/**
 * Object for work with genre API
 */
export const TvShowAPI = {
  /**
   * Endpoint for getting popular tv series
   * @returns
   */
  async fetchPopularSeries(): Promise<ApiPagedResponse<TVShowType>> {
    const response = await http.request({
      url: 'tv/popular',
    });
    return handleApiResponse(response);
  },
};
