import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { getProviders, getSession } from "next-auth/react";

import FormLogin from "@/components/auth/FormLogin";

export default function SignUp(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Criar Conta</title>
      </Head>

      <FormLogin providers={props.providers} csrfToken={props.csrfToken} signUp />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let csrfToken = null;
  if (process.env.ALLOW_CREDENTIALS === "true") {
    const getCsrfToken = await import("next-auth/react").then((module) => module.getCsrfToken);
    csrfToken = await getCsrfToken(context);
  }

  const session = await getSession(context);
  let redirect = undefined;
  if (session) {
    redirect = {
      permanent: false,
      destination: "/",
    };
  }

  const providers = await getProviders();
  return {
    props: { providers, csrfToken },
    redirect,
  };
};