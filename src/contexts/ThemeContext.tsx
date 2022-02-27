import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { createContext, ReactNode, useEffect, useState } from "react";

type PaletteMode = "light" | "dark";

const ThemeContext = createContext({
  theme: "light" as PaletteMode,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: function (): void {},
});
export { ThemeContext };

interface Props {
  children: ReactNode;
}

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<PaletteMode>("light");

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

  const muiTheme = createTheme({
    palette: {
      primary: {
        main: "#0070f3",
      },
      mode: theme,
    },
    shape: { borderRadius: 10 },
    typography: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    },
  });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
