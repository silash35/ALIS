import Head from "next/head";

export default function DefaultHead(props) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="content-type" content="text/html" />

      {/* SEO Meta Tags */}
      <meta name="author" content="Silas Henrique Alves Araújo" />
      <meta name="description" content="O Agregador de Locais Inclusivos para Surdos" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://alis.vercel.app/" />
      <meta property="og:title" content="ALIS" />
      <meta property="og:image" content="https://alis.vercel.app/card.png" />
      <meta property="og:image:alt" content="A letra 'a' azul e cursiva, que a um olhar atento lembra uma orelha" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:description" content="O Agregador de Locais Inclusivos para Surdos" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://alis.vercel.app/" />
      <meta name="twitter:title" content="ALIS" />
      <meta name="twitter:image" content="https://alis.vercel.app/card.png" />
      <meta name="twitter:creator" content="@silash35" />
      <meta name="twitter:description" content="O Agregador de Locais Inclusivos para Surdos" />

      {/* Icons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/icons/site.webmanifest" />
      <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#0070f3" />
      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <meta name="apple-mobile-web-app-title" content="ALIS" />
      <meta name="application-name" content="ALIS" />
      <meta name="msapplication-TileColor" content="#2d89ef" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />

      {/* etc */}
      {props.children}
    </Head>
  );
}
