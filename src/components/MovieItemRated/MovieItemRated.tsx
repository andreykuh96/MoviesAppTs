import React from 'react';
import s from './MovieItemRated.module.scss';
import no_image from '../MovieItem/no_image.png';
import { format, parseISO } from 'date-fns';
import { Rate } from 'antd';

interface MovieItemProps {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  rating: number;
}

const MovieItemRated: React.FC<MovieItemProps> = ({
  id,
  original_title,
  overview,
  poster_path,
  release_date,
  rating,
}) => {
  return (
    <li className={s.movieItem}>
      <div className={s.img}>
        <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : no_image} alt="poster" />
      </div>
      <div className={s.body}>
        <h3 className={s.title}>{original_title}</h3>
        <div className={s.date}>{release_date ? format(parseISO(release_date), 'MMMM d, yyyy') : 'Неизвестно'}</div>
        <div className={s.genres}>
          <div className={s.genre}>Action</div>
          <div className={s.genre}>Action</div>
        </div>
        <div className={s.description}>{overview ? overview.slice(0, 100) : 'Нет описания'}</div>
        <Rate disabled value={rating} className={s.rate} count={10} allowHalf allowClear={false} defaultValue={0} />
      </div>
    </li>
  );
};

export default MovieItemRated;
