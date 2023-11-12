import React from 'react';
import { IMoviesRated } from '../../types/types';
import MovieItemRated from '../MovieItemRated/MovieItemRated';

interface RatedMoviesProps {
  dataRatedMovies: IMoviesRated[];
}

const RatedMovies: React.FC<RatedMoviesProps> = ({ dataRatedMovies }) => {
  return (
    <div>
      {dataRatedMovies.map((item) => {
        const { ...itemProps } = item;
        return <MovieItemRated key={item.id} {...itemProps} />;
      })}
    </div>
  );
};

export default RatedMovies;
