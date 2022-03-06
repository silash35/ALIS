import Head from "next/head";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Title from "@/components/common/Title";
import FormRegistration from "@/components/new/FormRegistration";

const Novo = () => {
  const session = useSession();

  useEffect(() => {
    if (session.status === "unauthenticated") {
      signIn();
    }
  }, [session.status]);

  return (
    <>
      <Head>
        <title>Adicionar Local</title>
      </Head>
      <Header />
      <main>
        <Title>
          <h1>
            Adicionar novo <span>Local</span>
          </h1>
          <p>Insira os dados abaixo para efetuar o cadastro de um novo local</p>
        </Title>

        <FormRegistration />
      </main>
      <Footer />
    </>
  );
};

export default Novo;
