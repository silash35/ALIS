import "../styles/globals.scss";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import React from "react";

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

  return (
    <MuiThemeProvider theme={muiTheme}>
      <Component {...pageProps} setTheme={setTheme} />
    </MuiThemeProvider>
  );
}

export default MyApp;
