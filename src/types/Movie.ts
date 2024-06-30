export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  genre_ids: number[];
  poster_path: string;
  vote_average: number;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}
