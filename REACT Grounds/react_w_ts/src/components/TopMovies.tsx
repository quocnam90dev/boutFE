import React, { useContext, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { TopMoviesContext } from "../contexts/TopMovieContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topMoviesHeader: {
      paddingBottom: 0,
    },
    topMoviesList: {
      paddingTop: 0,
    },
    topMovieItem: {
      paddingTop: "2px",
      paddingBottom: "2px",
    },
  })
);

const TopMovies = () => {
  // styles
  const classes = useStyles();

  // context
  const { getTopMovies, topMovies, toggleWatched } =
    useContext(TopMoviesContext);

  useEffect(() => {
    getTopMovies();
  }, []);

  return (
    <Box mt={1} ml={2}>
      <Card raised>
        <CardHeader
          title="top 10 Movies of all time"
          className={classes.topMoviesHeader}
          titleTypographyProps={{
            variant: "h4",
            align: "center",
            color: "primary",
          }}
        ></CardHeader>
        <CardContent className={classes.topMoviesList}>
          <List>
            {topMovies.map((movie) => (
              <ListItem
                button
                className={classes.topMovieItem}
                key={movie.imdbID}
              >
                <ListItemIcon>
                  <Checkbox
                    checked={movie.Watched}
                    onClick={toggleWatched.bind(this, movie.imdbID)}
                  />
                </ListItemIcon>
                <ListItemText primary={movie.Title} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TopMovies;
