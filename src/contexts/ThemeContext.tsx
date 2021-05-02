import { PaletteType } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { createContext, ReactNode, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "light" as PaletteType,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: function (): void {},
});
export { ThemeContext };

interface Props {
  children: ReactNode;
}

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<PaletteType>("light");

  let body: HTMLBodyElement;

  const toggleTheme = () => {
    const newTheme = theme == "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (body == undefined) {
      body = document.querySelector("body") as HTMLBodyElement;
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
};
