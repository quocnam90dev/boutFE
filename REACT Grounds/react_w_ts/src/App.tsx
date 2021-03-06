import { Grid } from "@material-ui/core";
import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import ToggleThemeBtn from "./components/ToggleThemeBtn";
import TopMovies from "./components/TopMovies";
import AuthContextProvider from "./contexts/AuthContext";
import MovieContextProvider from "./contexts/MoviesContext";
import ProgressContextProvider from "./contexts/ProgressContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import TopMoviesContextProvider from "./contexts/TopMovieContext";

function App() {
  return (
    <div>
      <TopMoviesContextProvider>
        <AuthContextProvider>
          <MovieContextProvider>
            <ThemeContextProvider>
              <ProgressContextProvider>
                <Navbar />
                <Grid container>
                  <Grid item xs={4}>
                    <TopMovies />
                  </Grid>
                  <Grid item xs={4}>
                    <Movies />
                  </Grid>
                </Grid>
                <ToggleThemeBtn />
              </ProgressContextProvider>
            </ThemeContextProvider>
          </MovieContextProvider>
        </AuthContextProvider>
      </TopMoviesContextProvider>
    </div>
  );
}

export default App;
