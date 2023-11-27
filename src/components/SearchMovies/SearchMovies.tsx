import React from 'react';
import MovieList from '../MovieList/MovieList';
import MySpinner from '../MySpinner/MySpinner';
import MyError from '../MyError/MyError';
import MyInput from '../MyInput/MyInput';
import MyPagination from '../MyPagination/MyPagination';
import MovieService, { apiMovies } from '../../service/MovieService';

const movieService = new MovieService();

const SearchMovies: React.FC = () => {
  const [dataMovies, setDataMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState('');
  const [query, setQuery] = React.useState('');
  const [page, setPage] = React.useState(1);

  const fetchMovies = async (query: string, page: number) => {
    try {
      setIsLoading(true);
      const data = await movieService.getMovies(query, page);
      setIsLoading(false);
      setDataMovies(data);
    } catch (error) {
      if (error instanceof Error) {
        setIsLoading(false);
        setIsError(error.message);
      }
    }
  };

  React.useEffect(() => {
    fetchMovies(query, page);
  }, [query, page]);

  const changeQuery = (query: string) => {
    setQuery(query);
  };

  const changePage = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <MyInput changeQuery={changeQuery} />
      {query !== '' && dataMovies.length === 0 ? <h1>Нет фильма</h1> : null}
      {isLoading ? <MySpinner /> : <MovieList dataMovies={dataMovies} />}
      {isError ? <MyError msg={isError} /> : null}
      <MyPagination changePage={changePage} />
    </>
  );
};

export default SearchMovies;
