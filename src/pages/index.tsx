import Head from "next/head";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Main from "@/components/index/Main";

const Home = () => (
  <>
    <Head>
      <title>ALIS</title>
    </Head>

    <Header />
    <Main />
    <Footer />
  </>
);

export default Home;
