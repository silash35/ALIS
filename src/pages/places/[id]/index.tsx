import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Places from "database.json";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import PlaceInformation from "@/components/places/PlaceInformation";
import { TPlace } from "@/components/index/TPlaces";

const PlacePage = ({ place }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{place.name}</title>

        <meta content={place.name} key="ogTitle" property="og:title" />
        <meta content={place.name} key="twitterTitle" name="twitter:title" />
        <meta content={place.description} key="ogDescription" property="og:description" />
        <meta content={place.description} key="twitterDescription" name="twitter:description" />
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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Places.map((place) => ({
      params: { id: place.id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;

  if (!id || Array.isArray(id)) {
    return { notFound: true };
  }

  const place: TPlace | undefined = Places.find((p) => p.id === id);

  if (!place) {
    return { notFound: true };
  }

  return {
    props: {
      place,
      id,
    },
  };
};
