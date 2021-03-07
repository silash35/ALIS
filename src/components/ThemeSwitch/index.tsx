import Fab from "@material-ui/core/Fab";
import MoonIcon from "@material-ui/icons/Brightness4";
import SunIcon from "@material-ui/icons/Brightness7";
import { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./themeButton.module.scss";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  if (theme == "light") {
    return (
      <Fab
        color="primary"
        aria-label="change theme to dark"
        id={styles.themeButton}
        onClick={toggleTheme}
      >
        <MoonIcon />
      </Fab>
    );
  } else {
    return (
      <Fab
        color="primary"
        aria-label="change theme to light"
        id={styles.themeButton}
        onClick={toggleTheme}
      >
        <SunIcon />
      </Fab>
    );
  }
};

export default ThemeSwitch;
