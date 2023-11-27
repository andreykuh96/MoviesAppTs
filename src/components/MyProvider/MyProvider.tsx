import React from 'react';
import MovieService from '../../service/MovieService';

interface Genres {
  id: number;
  name: string;
}

interface MyContextProps {
  genres: Genres[];
}

export const MyContext = React.createContext<MyContextProps | undefined>(undefined);

interface MyProviderProps {
  children: React.ReactNode;
}

const movieService = new MovieService();

const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [genres, setGenres] = React.useState<Genres[]>([]);

  const fetchGenres = async () => {
    const genres = await movieService.getGenres();
    setGenres(genres);
  };

  React.useEffect(() => {
    fetchGenres();
  }, []);

  return <MyContext.Provider value={{ genres }}>{children}</MyContext.Provider>;
};

export default MyProvider;
