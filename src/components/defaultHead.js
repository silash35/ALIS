import Head from "next/head";

export default function DefaultHead(props) {
  return (
    <Head>
      {/* usual meta tags */}
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="content-type" content="text/html" charset="UTF-8" />
      <meta name="description" content="O Agregador de Locais Inclusivos para Surdos" />
      <meta name="author" content="Silas Henrique Alves Araújo" />

      {/* Cards */}
      <meta property="og:title" content="ALIS" />
      <meta property="og:description" content="O Agregador de Locais Inclusivos para Surdos" />
      <meta property="og:image" content="/card.png" />
      <meta property="og:image:alt" content="ALIS logo: um texto azul escrito alis" />
      <meta property="og:url" content="https://alis.silash35.vercel.app/" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content="/card.png"></meta>

      {/* Fonts */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
        as="style"
        onload="this.onload=null;this.rel='stylesheet'"
      />
      <noscript>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
        />
      </noscript>

      {/* PWA */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#2d89ef" />
      <meta name="theme-color" content="#ffffff" />

      <link rel="manifest" href="/manifest.json" />

      {/* etc */}
      {props.children}
    </Head>
  );
}
