import React from 'react';
import s from './App.module.scss';
import { Tabs } from 'antd';
import SearchMovies from '../SearchMovies/SearchMovies';
import RatedMovies from '../RatedMovies/RatedMovies';
import MyProvider from '../MyProvider/MyProvider';

const App: React.FC = () => {
  return (
    <div className={s.app}>
      <MyProvider>
        <Tabs
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
              children: <RatedMovies />,
            },
          ]}
        />
      </MyProvider>
    </div>
  );
};

export default App;
