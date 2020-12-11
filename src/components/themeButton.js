import Fab from "@material-ui/core/Fab";
import SunIcon from "@material-ui/icons/Brightness7";
import MoonIcon from "@material-ui/icons/Brightness4";
import styles from "../styles/themeButton.module.scss";

export default function ThemeButton(props) {
  let theme = "light";

  const changeTheme = () => {
    if (theme == "light") {
      props.setTheme("dark");
      theme = "dark";
    } else {
      props.setTheme("light");
      theme = "light";
    }
    localStorage.setItem("theme", theme);
  };

  if (typeof window !== "undefined") {
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
