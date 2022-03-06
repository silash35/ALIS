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

        let user = null;

        const doctor = await import("../../../../cypress/fixtures/users/doctor.json").then(
          (module) => module.default
        );
        const brigadier = await import("../../../../cypress/fixtures/users/brigadier.json").then(
          (module) => module.default
        );

        if (credentials?.username === doctor.name && credentials?.password === doctor.password) {
          user = doctor;
        } else if (
          credentials?.username === brigadier.name &&
          credentials?.password === brigadier.password
        ) {
          user = brigadier;
        }

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  theme: {
    colorScheme: "auto",
    brandColor: variables.primary, // Hex color code
    logo: "/icon.svg", // Absolute URL to image
  },
});
