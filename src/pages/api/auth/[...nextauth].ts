import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import variables from "@/styles/variables.module.scss";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
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
