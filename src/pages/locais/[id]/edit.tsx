import { Place } from "@prisma/client";
import { GetServerSideProps } from "next";
import Head from "next/head";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Title from "@/components/common/Title";
import FormChange from "@/components/locais/FormChange";
import placesManager from "@/database/placesManager";

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
  let data = null;

  if (context.query.id && !Array.isArray(context.query.id)) {
    data = await placesManager.getByID(context.query.id);
  }

  return {
    props: {
      place: data,
    },
    notFound: !data,
  };
};
