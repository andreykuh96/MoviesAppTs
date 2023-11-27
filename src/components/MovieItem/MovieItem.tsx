import React, { useContext } from 'react';
import s from './MovieItem.module.scss';
import no_image from './no_image.png';
import { format, parseISO } from 'date-fns';
import { Rate } from 'antd';
import { MyContext } from '../MyProvider/MyProvider';
import MovieService from '../../service/MovieService';

interface MovieItemProps {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  rating: number;
}

const movieService = new MovieService();

const MovieItem: React.FC<MovieItemProps> = ({
  original_title,
  overview,
  poster_path,
  release_date,
  id,
  genre_ids,
  vote_average,
  rating,
}) => {
  const [value, setValue] = React.useState(0);
  const genres = useContext(MyContext);
  const classes = [s.rating];

  if (vote_average > 3 && vote_average <= 5) classes.push(s.rating_1);
  if (vote_average > 5 && vote_average <= 7) classes.push(s.rating_2);
  if (vote_average > 7) classes.push(s.rating_3);

  const changeValue = (num: number) => {
    setValue(num);
    movieService.addRating(id, num);
  };

  return (
    <li className={s.movieItem}>
      <div className={s.img}>
        <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : no_image} alt="poster" />
      </div>
      <div className={s.body}>
        <h3 className={s.title}>{original_title}</h3>
        <div className={classes.join(' ')}>{vote_average.toFixed(1)}</div>
        <div className={s.date}>{release_date ? format(parseISO(release_date), 'MMMM d, yyyy') : 'Неизвестно'}</div>
        <div className={s.genres}>
          {genre_ids.map((item) => {
            const matchedGenre = genres && genres.genres ? genres.genres.find((g) => g.id === item) : null;
            return (
              <div key={item} className={s.genre}>
                {matchedGenre ? matchedGenre.name : null}
              </div>
            );
          })}
        </div>
        <div className={s.description}>{overview ? overview.slice(0, 100) : 'Нет описания'}</div>
        <Rate
          value={rating ? rating : value}
          onChange={changeValue}
          className={s.rate}
          count={10}
          allowHalf
          allowClear={false}
          defaultValue={0}
        />
      </div>
    </li>
  );
};

export default MovieItem;
