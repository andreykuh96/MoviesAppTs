import React from 'react';
import { IMoviesRated } from '../../types/types';
import MovieItemRated from '../MovieItemRated/MovieItemRated';
import s from './RatedMovies.module.scss';

interface RatedMoviesProps {
  dataRatedMovies: IMoviesRated[];
}

const RatedMovies: React.FC<RatedMoviesProps> = ({ dataRatedMovies }) => {
  return (
    <ul className={s.movieList}>
      {dataRatedMovies.map((item) => {
        const { ...itemProps } = item;
        return <MovieItemRated key={item.id} {...itemProps} />;
      })}
    </ul>
  );
};

export default RatedMovies;
