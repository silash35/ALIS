import Head from "next/head";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Title from "@/components/common/Title";
import Terms from "@/components/help/terms";

const TermsPage = () => {
  return (
    <>
      <Head>
        <title>Termos de Uso</title>
      </Head>

      <Header />

      <main>
        <Title small>
          <h1>
            Termos de uso do <span>ALIS</span>
          </h1>
        </Title>

        <Terms />
      </main>
      <Footer />
    </>
  );
};

export default TermsPage;
