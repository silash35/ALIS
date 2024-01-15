import { Place } from "@prisma/client";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { getSession } from "next-auth/react";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Title from "@/components/common/Title";
import FormChange from "@/components/places/FormChange";
import placesManager from "@/database/placesManager";

interface Props {
  place: Place;
}

const PlacePage = ({ place }: Props) => (
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

export default PlacePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  let data: Place | null = null;

  try {
    if (context.query.id && !Array.isArray(context.query.id)) {
      data = await placesManager.getByID(context.query.id);
    }
  } catch {
    data = null;
  }

  return {
    redirect: (() => {
      if (session === null) {
        return {
          permanent: false,
          destination: "/auth/signIn",
        };
      } else if (session.user?.email !== data?.userMail) {
        return {
          permanent: false,
          destination: "/places/" + data?.id,
        };
      } else {
        return undefined;
      }
    })(),

    props: {
      place: data,
    },
    notFound: !data,
  };
};
