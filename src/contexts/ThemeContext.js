import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext({});
export { ThemeContext };

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  let body;

  const toggleTheme = () => {
    const newTheme = theme == "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (body == undefined) {
      body = document.querySelector("body");
    }
    body.className = newTheme;
  };

  useEffect(() => {
    if (window != undefined) {
      if (localStorage.getItem("theme") == undefined) {
        localStorage.setItem("theme", theme);
      } else {
        if (localStorage.getItem("theme") != theme) {
          toggleTheme();
        }
      }
    }
  }, []);

  const muiTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#0070f3",
      },
      type: theme,
    },
    shape: { borderRadius: 10 },
  });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
