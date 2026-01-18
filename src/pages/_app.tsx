import "@/styles/globals.scss";

import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

import { ThemeContextProvider } from "@/contexts/ThemeContext";

// Configure the loading bar
Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps: { ...pageProps } }: AppProps) => (
  <>
    <Head>
      {/* Viewport meta tag should not be used in _document.tsx. That's why it's in this file */}
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />

      {/* These meta tags need to be here for the key attribute to work properly */}
      <meta content="ALIS" key="ogTitle" property="og:title" />
      <meta content="ALIS" key="twitterTitle" name="twitter:title" />
      <meta
        content="O Agregador de Locais Inclusivos para Surdos"
        key="ogDescription"
        property="og:description"
      />
      <meta
        content="O Agregador de Locais Inclusivos para Surdos"
        key="twitterDescription"
        name="twitter:description"
      />
    </Head>
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  </>
);

export default MyApp;
