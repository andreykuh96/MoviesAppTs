export interface IMovies {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}
export interface IMoviesRated extends IMovies {
  rating: number;
}
