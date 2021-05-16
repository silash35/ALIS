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
        <meta property="og:image" content="https://alis.vercel.app/card.png" key="ogImage" />
        <meta
          property="og:image:alt"
          content="A letra 'a' azul e cursiva, que a um olhar atento lembra uma orelha"
          key="ogImageAlt"
        />

        <meta name="twitter:title" content="ALIS" key="twitterTitle" />
        <meta name="twitter:image" content="https://alis.vercel.app/card.png" key="twitterImage" />
      </Head>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  );
}

export default MyApp;
