import { GetServerSideProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { getProviders, getSession } from "next-auth/react";

import FormLogin from "@/components/auth/FormLogin";

export default function Login({ providers }: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Entrar no ALIS</title>
      </Head>

      <FormLogin providers={providers} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  }

  const providers = await getProviders();
  return {
    props: { providers },
  };
};
