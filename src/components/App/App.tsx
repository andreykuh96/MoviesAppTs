import React from 'react';
import s from './App.module.scss';
import { Tabs } from 'antd';
import SearchMovies from '../SearchMovies/SearchMovies';
import RatedMovies from '../RatedMovies/RatedMovies';
import { IMoviesRated } from '../../types/types';
import MyProvider from '../MyProvider/MyProvider';

export const API_KEY = '9e54e6e53abe1264e8e16b2f1df47997';

const App: React.FC = () => {
  const [dataRatedMovies, setDataRatedMovies] = React.useState<IMoviesRated[]>([]);

  React.useEffect(() => {
    fetch(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((response) => localStorage.setItem('session', JSON.stringify(response.guest_session_id)))
      .catch((err) => console.error(err));
  }, []);

  const getRatedMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/guest_session/${JSON.parse(
        localStorage.getItem('session')!
      )}/rated/movies?language=en-US&page=1&sort_by=created_at.asc&api_key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((response) => setDataRatedMovies(response.results))
      .catch((err) => console.error(err));
  };

  const handleTabClick = (key: string) => {
    if (key === '2') {
      getRatedMovies();
    }
  };

  return (
    <div className={s.app}>
      <MyProvider>
        <Tabs
          onTabClick={handleTabClick}
          defaultActiveKey="1"
          centered
          items={[
            {
              key: '1',
              label: 'Search',
              children: <SearchMovies />,
            },
            {
              key: '2',
              label: 'Rated',
              children: <RatedMovies dataRatedMovies={dataRatedMovies} />,
            },
          ]}
        />
      </MyProvider>
    </div>
  );
};

export default App;
