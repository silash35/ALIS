import Head from "next/head";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Title from "@/components/common/Title";
import Privacy from "@/components/help/Privacy";

const PrivacyPage = () => {
  return (
    <>
      <Head>
        <title>Política de Privacidade</title>
      </Head>

      <Header />

      <main>
        <Title small>
          <h1>
            Política de Privacidade do <span>ALIS</span>
          </h1>
        </Title>

        <Privacy />
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPage;
