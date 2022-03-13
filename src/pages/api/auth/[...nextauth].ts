import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import { CredentialsConfig, OAuthConfig } from "next-auth/providers";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";

import variables from "@/styles/variables.module.scss";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const providers: (OAuthConfig<GoogleProfile> | CredentialsConfig)[] = [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ];

  if (process.env.ALLOW_CREDENTIALS === "true") {
    // Only Available for testing and development
    const CredentialsProvider = await import("next-auth/providers/credentials").then(
      (module) => module.default
    );
    const credentialsProvider = CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (process.env.ALLOW_CREDENTIALS !== "true") {
          return null;
        }

        const users = await import("../../../../cypress/fixtures/users.json").then(
          (module) => module.users
        );
        const user = users.find((user) => {
          if (credentials?.username === user.name && credentials?.password === user.password) {
            return user;
          }
        });

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    });
    providers.push(credentialsProvider);
  }

  return await NextAuth(req, res, {
    providers,
    pages: {
      signIn: "/auth/signIn",
    },
    theme: {
      colorScheme: "auto",
      brandColor: variables.primary,
      logo: "/icon.svg",
    },
  });
}
