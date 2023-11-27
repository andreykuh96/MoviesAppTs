import React from 'react';
import MovieList from '../MovieList/MovieList';
import { IMovies } from '../../types/types';
import MovieService, { apiMovies } from '../../service/MovieService';

const movieService = new MovieService();

const RatedMovies: React.FC = () => {
  const [dataRatedMovies, setDataRatedMovies] = React.useState<IMovies[]>([]);

  const fetchRatedMovies = async () => {
    const data = await movieService.getRatedMovies();
    setDataRatedMovies(data);
  };

  const getGuestSession = async () => {
    const response = await apiMovies.get('authentication/guest_session/new');
    localStorage.setItem('session', JSON.stringify(response.data.guest_session_id));
  };

  React.useEffect(() => {
    getGuestSession();
    fetchRatedMovies();
  }, []);

  return <MovieList dataMovies={dataRatedMovies} />;
};

export default RatedMovies;
