import {
  AppBar,
  Box,
  Button,
  Chip,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useState, ChangeEvent, useEffect, useContext } from "react";
import WelcomeMessage from "./WelcomeMessage";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ProgressContext } from "../contexts/ProgressContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";
import Login from "./Login";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    positionSelect: {
      color: "white",
      borderBottom: "1px solid white",
    },
  })
);

const Navbar = () => {
  //styles
  const classes = useStyles();

  // state <with ts need to have generic type>
  const [position, setPosition] = useState<string>("Full stack dev");
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));
  const [loginOpen, setLoginOpen] = useState(false);
  // context
  const { lastTime, status } = useContext(ProgressContext);
  const { theme } = useContext(ThemeContext);
  const {
    authInfo: { isAuthenticated },
    toggleAuth,
  } = useContext(AuthContext);

  // useEffect
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000);

    return () => clearInterval(timer);
  }, []);

  // funs

  const onPositionChange = (
    event: ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => setPosition(event.target.value as string); // required is string value as string

  return (
    <AppBar position="static" color={theme}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          py={2}
        >
          <Typography variant="h6">My Movies</Typography>

          <Box textAlign="center">
            <WelcomeMessage position={position} country="Outsite" />
            <Chip
              label={`last time working on this project: ${lastTime} - Status: ${status}`}
            ></Chip>
            <Box mt={1}>
              <FormControl>
                <Select
                  value={position}
                  onChange={onPositionChange}
                  className={classes.positionSelect}
                >
                  <MenuItem value="Full stack dev">Full stack dev</MenuItem>
                  <MenuItem value="FE dev">FE dev</MenuItem>
                  <MenuItem value="BE dev">BE dev</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box textAlign="center">
            <Box my={1}>
              <Typography variant="h6">{time.toUTCString()}</Typography>
            </Box>
            <Button
              variant="contained"
              onClick={
                isAuthenticated
                  ? toggleAuth.bind(this, "")
                  : setLoginOpen.bind(this, true)
              }
            >
              {isAuthenticated ? "LogOut" : "Login"}
            </Button>
          </Box>

          <Login isOpen={loginOpen} handleClose={setLoginOpen} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
