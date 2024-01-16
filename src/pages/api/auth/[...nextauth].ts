import NextAuth, { type NextAuthOptions } from "next-auth";
import type { Provider } from "next-auth/providers";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import variables from "@/styles/variables.module.scss";

const providers = [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  }),
] as Provider[];

if (process.env.ALLOW_CREDENTIALS === "true") {
  // Only Available for testing and development
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

      const { users } = await import("../../../../cypress/fixtures/users.json");

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

export const authOptions: NextAuthOptions = {
  providers,
  pages: {
    signIn: "/auth/signIn",
  },
  theme: {
    colorScheme: "auto",
    brandColor: variables.primary,
    logo: "/icon.svg",
  },
};

export default NextAuth(authOptions);
