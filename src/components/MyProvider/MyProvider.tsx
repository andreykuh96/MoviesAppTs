import React from 'react';
import { API_KEY } from '../App/App';

interface MyContextProps {
  genres: any[];
}

export const MyContext = React.createContext<MyContextProps | undefined>(undefined);

interface MyProviderProps {
  children: React.ReactNode;
}

const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [genres, setGenres] = React.useState([]);

  const fetchGenres = () => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((response) => setGenres(response.genres))
      .catch((err) => console.error(err));
  };

  React.useEffect(() => {
    fetchGenres();
  }, []);

  return <MyContext.Provider value={{ genres }}>{children}</MyContext.Provider>;
};

export default MyProvider;
