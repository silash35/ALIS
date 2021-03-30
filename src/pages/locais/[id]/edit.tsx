import { GetServerSideProps } from "next";
import Error from "next/error";
import Head from "next/head";

import Footer from "@/components/Footer";
import FormChange from "@/components/FormChange";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { IPlace } from "@/types/IPlace";

interface Props {
  place: IPlace;
  placeExists: boolean;
}

const PlacePage = ({ place, placeExists }: Props) => {
  if (!placeExists) {
    return <Error statusCode={404} />;
  }

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
  let url = process.env.VERCEL_URL;
  if (url == undefined) {
    url = "http://localhost:3000";
  } else {
    url = "https://" + url;
  }

  const res = await fetch(url + `/api/place?id=${context.query.id}`);
  const data = await res.json();

  return {
    props: {
      place: data.body,
      placeExists: res.status == 200,
    },
  };
};
