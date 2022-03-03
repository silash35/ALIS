import CircularProgress from "@mui/material/CircularProgress";
import Head from "next/head";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Cards from "@/components/common/PlaceCards";
import TPlaces from "@/components/index/TPlaces";
import UserCard from "@/components/profile/UserCard";

export default function Profile() {
  const [userPlaces, serUserPlaces] = useState("Loading" as TPlaces);
  const data = useSession();

  useEffect(() => {
    if (data.status === "unauthenticated") {
      signIn();
    }

    if (data.status === "authenticated") {
      (async () => {
        const res = await fetch("/api/protected/places", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const { body } = await res.json();

        if (Array.isArray(body) && body.length > 0) {
          serUserPlaces(body);
        } else {
          serUserPlaces("NotFound");
        }
      })();
    }
  }, [data.status]);

  return (
    <>
      <Head>
        <title>Meu Perfil</title>
      </Head>
      <Header />
      <main>
        {data.status === "authenticated" && data.data?.user ? (
          <>
            <UserCard user={data.data.user} />

            <h2>Seus Locais</h2>

            <Cards places={userPlaces} />
          </>
        ) : (
          <CircularProgress />
        )}
      </main>
      <Footer />
    </>
  );
}
