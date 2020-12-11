import "../styles/globals.scss";
import dark from "../styles/dark.module.scss";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = React.useState("light");

  const muiTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#0070f3",
      },
      type: theme,
    },
  });

  if (theme == "light") {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <Component {...pageProps} setTheme={setTheme} />
      </MuiThemeProvider>
    );
  } else {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <div className={dark.dark}>
          <Component {...pageProps} setTheme={setTheme} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default MyApp;
