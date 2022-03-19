import "@/styles/globals.scss";

import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { SessionProvider } from "next-auth/react";
import NProgress from "nprogress";
import React from "react";

import { ThemeContextProvider } from "@/contexts/ThemeContext";

// Configure the loading bar
Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
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
      <SessionProvider session={session}>
        <ThemeContextProvider>
          <Component {...pageProps} />
        </ThemeContextProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
