import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { SWRConfig } from "swr";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Main from "@/components/index/main";
import placesManager from "@/database/placesManager";

const Home = ({ places }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>ALIS</title>
      </Head>

      <Header />
      <SWRConfig
        value={{
          fallback: { "/api/places": places },
          fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
        }}
      >
        <Main />
      </SWRConfig>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      places: await placesManager.getAll(),
    },
    revalidate: 3600, // 1 hour
  };
};

export default Home;
