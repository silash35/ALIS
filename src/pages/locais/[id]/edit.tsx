import { Place } from "@prisma/client";
import { GetServerSideProps } from "next";
import Head from "next/head";

import Footer from "@/components/Footer";
import FormChange from "@/components/FormChange";
import Header from "@/components/Header";
import Title from "@/components/Title";
import url from "@/utils/url";

interface Props {
  place: Place;
}

const PlacePage = ({ place }: Props) => {
  return (
    <>
      <Head>
        <title>Editar {place.name}</title>
      </Head>

      <Header />

      <main>
        <Title>
          <h1>
            Atualizar <span>dados</span>
          </h1>
          <p>Modifique os dados do Local por aqui</p>
        </Title>

        <FormChange place={place} />
      </main>

      <Footer />
    </>
  );
};

export default PlacePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(url + `/api/place?id=${context.query.id}`);
  const data = await res.json();

  return {
    props: {
      place: data.body,
    },
    notFound: res.status != 200,
  };
};
