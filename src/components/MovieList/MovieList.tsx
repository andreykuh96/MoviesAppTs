import React from 'react';
import s from './MovieList.module.scss';
import MovieItem from '../MovieItem/MovieItem';
import { IMovies } from '../../types/types';

interface MovieListProps {
  dataMovies: IMovies[];
}

const MovieList: React.FC<MovieListProps> = ({ dataMovies }) => {
  return (
    <ul className={s.movieList}>
      {dataMovies.map((item) => {
        const { ...itemProps } = item;
        return <MovieItem key={item.id} {...itemProps} />;
      })}
    </ul>
  );
};

export default MovieList;
