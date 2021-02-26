import "../styles/globals.scss";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Router from "next/router";
import NProgress from "nprogress";
import React from "react";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

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
