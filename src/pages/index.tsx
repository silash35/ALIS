import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

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
      <Main places={places} />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      places: await placesManager.getAll(),
    },
  };
};

export default Home;
