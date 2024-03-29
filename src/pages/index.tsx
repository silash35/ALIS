import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { SWRConfig } from "swr";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Main from "@/components/index/Main";
import placesManager from "@/database/placesManager";

const Home = ({ fallback }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>ALIS</title>
    </Head>

    <Header />
    <SWRConfig
      value={{
        fallback,
        fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Main />
    </SWRConfig>
    <Footer />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const places = await placesManager.getAll();

  return {
    props: {
      fallback: {
        "/api/public/places": { body: places },
      },
    },

    revalidate: 3600, // 1 hour
  };
};

export default Home;
