import { GenreType } from "../../core/types";

export type ApiPagedResponse<T> = {
  page: number;
  results: Array<T>;
  total_pages: number;
  total_results: number;
};

export type GenreResponse = {
  genres: GenreType[];
};

export type DiscoerMoviesParams = {
  with_genres?: string
}