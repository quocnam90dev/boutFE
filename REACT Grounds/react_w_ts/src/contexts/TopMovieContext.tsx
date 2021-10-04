import { createContext, ReactNode, useReducer } from "react";
import topMoviesInfo from "../api/getTopMovies";
import { topMovieReducer, TopMovieState } from "../reducers/TopMovieReducer";
import { TopMovieActonType } from "../reducers/types";

// destructure nó ra
const { GET_TOP_MOVIES, TOGGLE_TOP_MOVIE_WATCHED } = TopMovieActonType;

interface TopMoviesContextProps {
  children: ReactNode;
}

interface TopMoviesContextDefault {
  topMovies: TopMovieState;
  getTopMovies: () => Promise<void>;
  toggleWatched: (id: string) => void;
}

const TopMoviesDefault: TopMovieState = [];

export const TopMoviesContext = createContext<TopMoviesContextDefault>({
  topMovies: TopMoviesDefault,
  getTopMovies: () => Promise.resolve(void 0),
  toggleWatched: (id: string) => {},
});

const TopMoviesContextProvider = ({ children }: TopMoviesContextProps) => {
  const [topMovies, dispatch] = useReducer(topMovieReducer, TopMoviesDefault);

  // get top movies from api
  const getTopMovies = async () => {
    const topMovies = await Promise.all(topMoviesInfo);
    dispatch({
      type: GET_TOP_MOVIES,
      payload: topMovies.map((topMovie) => ({
        ...topMovie.data,
        Watched: false,
      })),
    });
  };

  // toggle watched
  const toggleWatched = (imdbID: string) =>
    dispatch({ type: TOGGLE_TOP_MOVIE_WATCHED, payload: imdbID });

  const TopMoviesContextData = {
    topMovies,
    getTopMovies,
    toggleWatched,
  };

  return (
    <TopMoviesContext.Provider value={TopMoviesContextData}>
      {children}
    </TopMoviesContext.Provider>
  );
};

export default TopMoviesContextProvider;
