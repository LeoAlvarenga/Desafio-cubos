export interface IMoviesListResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: IMovie[];
}

export interface IMovie {
  id: number;
  poster_path: string;
  overview: string;
  release_date: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
}
