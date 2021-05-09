import { GetStaticProps } from "next";
import Head from "next/head";

import Footer from "@/components/Footer";
import FormChange from "@/components/FormChange";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { IPlace } from "@/types/IPlace";

interface Props {
  place: IPlace;
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

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  let url = process.env.VERCEL_URL;
  if (url == undefined) {
    url = "http://localhost:3000";
  } else {
    url = "https://" + url;
  }

  const res = await fetch(url + `/api/place?id=${context.params?.id}`);
  const data = await res.json();

  return {
    props: {
      place: data.body,
    },
    revalidate: 2,
    notFound: res.status != 200,
  };
};
