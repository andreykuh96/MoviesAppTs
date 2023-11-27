import axios from 'axios';

const API_KEY = '9e54e6e53abe1264e8e16b2f1df47997';

export const apiMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: API_KEY,
  },
});

export default class MovieService {
  async addRating(id: number, rating: number) {
    const postData = {
      value: rating,
    };

    const response = await apiMovies.post(
      `movie/${id}/rating?guest_session_id=${JSON.parse(localStorage.getItem('session')!)}`,
      postData
    );

    console.log(response.data);
  }

  async getGenres() {
    const response = await apiMovies.get('genre/movie/list');
    return response.data.genres;
  }

  async getMovies(query: string, page: number) {
    const response = await apiMovies.get(`search/movie?query=${query}&page=${page}`);
    return response.data.results;
  }

  async getRatedMovies() {
    const response = await apiMovies.get(
      `guest_session/${JSON.parse(
        localStorage.getItem('session')!
      )}/rated/movies?language=en-US&page=1&sort_by=created_at.asc`
    );
    return response.data.results;
  }
}
