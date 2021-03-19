import { GetServerSideProps } from "next";
import Error from "next/error";
import Head from "next/head";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Place from "@/components/Place";
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
        <title>{place.name}</title>
      </Head>

      <Header home />

      <main>
        <Title>
          <h1 style={{ overflowWrap: "anywhere" }}>{place.name}</h1>
        </Title>
        <Place place={place} key={place._id}></Place>
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
