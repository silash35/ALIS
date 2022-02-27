import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Error from "next/error";
import Head from "next/head";
import { useState } from "react";
import { SWRConfig, unstable_serialize } from "swr";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import PlaceInformation from "@/components/locais/PlaceInformation";
import placesManager from "@/database/placesManager";

const PlacePage = ({ place, id, fallback }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [placeExists, setPlaceExists] = useState(true);

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
      {placeExists ? (
        <main>
          <SWRConfig
            value={{
              fallback: fallback,
              fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
            }}
          >
            <PlaceInformation id={id} setPlaceExists={setPlaceExists} />
          </SWRConfig>
        </main>
      ) : (
        <Error statusCode={404} />
      )}

      <Footer />
    </>
  );
};

export default PlacePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const allPlaces = await placesManager.getAll();

  return {
    paths: allPlaces.map((place) => {
      return { params: { id: place.id } };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  let data = null;

  try {
    if (context?.params?.id && !Array.isArray(context.params.id)) {
      data = await placesManager.getByID(context.params.id);
    }
  } catch (error) {
    return {
      props: {},
      revalidate: 3600, // 1 hour
      notFound: !data,
    };
  }

  return {
    props: {
      place: data,
      id: context?.params?.id,
      fallback: {
        [unstable_serialize(["api", "place", context?.params?.id])]: data,
      },
    },
    revalidate: 3600, // 1 hour
    notFound: !data,
  };
};
