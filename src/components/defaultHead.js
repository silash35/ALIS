import Head from "next/head";

export default function DefaultHead(props) {
  return (
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="/favicon.ico" />

      {props.children}
    </Head>
  );
}
