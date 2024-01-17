import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          {/* Primary Meta Tags */}
          <meta charSet="utf-8" />
          <meta content="text/html" httpEquiv="content-type" />

          {/* SEO Meta Tags */}
          <meta content="Silas Henrique Alves Araújo" name="author" />
          <meta content="O Agregador de Locais Inclusivos para Surdos" name="description" />

          {/* Open Graph / Facebook */}
          <meta content="website" property="og:type" />
          <meta content="https://alis.vercel.app/" property="og:url" />
          <meta content="pt_BR" property="og:locale" />
          <meta content="https://alis.vercel.app/card.png" property="og:image" />
          <meta
            content="A letra 'a' azul e cursiva, que a um olhar atento lembra uma orelha"
            property="og:image:alt"
          />

          {/* Twitter */}
          <meta content="summary_large_image" name="twitter:card" />
          <meta content="https://alis.vercel.app/" name="twitter:url" />
          <meta content="@silash35" name="twitter:creator" />
          <meta content="https://alis.vercel.app/card.png" name="twitter:image" />

          {/* Icons */}
          <link href="/icons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/icons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/icons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link href="/icons/site.webmanifest" rel="manifest" />
          <link color="#0070f3" href="/icons/safari-pinned-tab.svg" rel="mask-icon" />
          <link href="/icons/favicon.ico" rel="shortcut icon" />
          <meta content="ALIS" name="apple-mobile-web-app-title" />
          <meta content="ALIS" name="application-name" />
          <meta content="#2d89ef" name="msapplication-TileColor" />
          <meta content="/icons/browserconfig.xml" name="msapplication-config" />
          <meta content="#ffffff" name="theme-color" />

          {/* Fonts */}
          <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="light">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
