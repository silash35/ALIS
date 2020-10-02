import Head from 'next/head'

function DefaultHead() {
  return (
      <Head>
        <title>Movie Finder</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      </Head>
  )
}

export default DefaultHead;