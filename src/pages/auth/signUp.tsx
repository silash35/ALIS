import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { authOptions } from "pages/api/auth/[...nextauth]";

import FormLogin from "@/components/auth/FormLogin";

const SignUp = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <>
    <Head>
      <title>Criar Conta</title>
    </Head>

    <FormLogin csrfToken={props.csrfToken} providers={props.providers} signUp />
  </>
);

export default SignUp;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let csrfToken = null;
  if (process.env.ALLOW_CREDENTIALS === "true") {
    const getCsrfToken = await import("next-auth/react").then((module) => module.getCsrfToken);
    csrfToken = await getCsrfToken(context);
  }

  const session = await getServerSession(context.req, context.res, authOptions);
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
