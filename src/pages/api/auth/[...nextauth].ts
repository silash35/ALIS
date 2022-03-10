import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import variables from "@/styles/variables.module.scss";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // Only Available for testing and development
    CredentialsProvider({
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
    }),
  ],
  pages: {
    signIn: "/auth/signIn",
  },
  theme: {
    colorScheme: "auto",
    brandColor: variables.primary, // Hex color code
    logo: "/icon.svg", // Absolute URL to image
  },
});
