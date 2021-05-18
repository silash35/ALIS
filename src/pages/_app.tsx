import "@/styles/globals.scss";

import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import React from "react";

import { ThemeContextProvider } from "@/contexts/ThemeContext";

// Configure the loading bar
Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  // This is for the "Material UI" to work properly with server-side rendering
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        {/* Viewport meta tag should not be used in _document.tsx. That's why it's in this file */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* These meta tags need to be here for the key attribute to work properly */}
        <meta property="og:title" content="ALIS" key="ogTitle" />
        <meta name="twitter:title" content="ALIS" key="twitterTitle" />
        <meta
          property="og:description"
          content="O Agregador de Locais Inclusivos para Surdos"
          key="ogDescription"
        />
        <meta
          name="twitter:description"
          content="O Agregador de Locais Inclusivos para Surdos"
          key="twitterDescription"
        />
      </Head>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  );
}

export default MyApp;
