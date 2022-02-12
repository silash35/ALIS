import { Place } from "@prisma/client";
import { GetServerSideProps } from "next";
import Head from "next/head";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import PlaceInformation from "@/components/locais/PlaceInformation";
import placesManager from "@/database/placesManager";

interface Props {
  place: Place;
}

const PlacePage = ({ place }: Props) => {
  return (
    <>
      <Head>
        <title>{place.name}</title>

        <meta property="og:title" content={place.name} key="ogTitle" />
        <meta name="twitter:title" content={place.name} key="twitterTitle" />
        <meta property="og:description" content={place.description} key="ogDescription" />
        <meta name="twitter:description" content={place.description} key="twitterDescription" />
      </Head>

      <Header />

      <main>
        <PlaceInformation place={place} />
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
