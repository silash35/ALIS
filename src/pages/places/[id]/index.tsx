import { Place } from "@prisma/client";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Error from "next/error";
import Head from "next/head";
import { useState } from "react";
import { SWRConfig } from "swr";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import PlaceInformation from "@/components/places/PlaceInformation";
import placesManager from "@/database/placesManager";

const PlacePage = ({ place, id }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [placeExists, setPlaceExists] = useState(place?.id !== undefined);

  if (!placeExists) {
    return <Error statusCode={404} />;
  }

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
        <SWRConfig
          value={{
            fallback: { ["/api/public/place/" + id]: { body: place } },
            fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
          }}
        >
          <PlaceInformation id={id} setPlaceExists={setPlaceExists} />
        </SWRConfig>
      </main>

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
  let data: Place | null = null;

  try {
    if (context?.params?.id && !Array.isArray(context.params.id)) {
      data = await placesManager.getByID(context.params.id);
    }
  } catch (error) {
    return {
      props: {},
      revalidate: 60, // 1 Minute
      notFound: !data,
    };
  }

  return {
    props: {
      place: data,
      id: context?.params?.id,
    },
    revalidate: 3600, // 1 hour
    notFound: !data,
  };
};
