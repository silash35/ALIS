import Fab from "@material-ui/core/Fab";
import SunIcon from "@material-ui/icons/Brightness7";
import MoonIcon from "@material-ui/icons/Brightness4";
import styles from "../styles/themeButton.module.scss";

export default function ThemeButton(props) {
  let theme = "light";
  let body;

  const changeTheme = () => {
    if (theme == "light") {
      theme = "dark";
    } else {
      theme = "light";
    }
    localStorage.setItem("theme", theme);
    body.className = theme;
    props.setTheme(theme);
  };

  if (typeof window !== "undefined") {
    body = document.getElementsByTagName("body")[0];
    if (localStorage.getItem("theme") == undefined) {
      localStorage.setItem("theme", theme);
    } else {
      if (localStorage.getItem("theme") != theme) {
        changeTheme();
      }
    }
  }

  if (theme == "light") {
    return (
      <Fab
        color="primary"
        aria-label="change theme to dark"
        id={styles.themeButton}
        onClick={changeTheme}
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
        onClick={changeTheme}
      >
        <SunIcon />
      </Fab>
    );
  }
}
