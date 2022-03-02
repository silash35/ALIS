import CircularProgress from "@mui/material/CircularProgress";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Cards from "@/components/index/Cards";
import TPlaces from "@/components/index/TPlaces";
import UserCard from "@/components/profile/UserCard";

export default function Profile() {
  const [userPlaces, serUserPlaces] = useState("Loading" as TPlaces);
  const router = useRouter();
  const data = useSession();

  useEffect(() => {
    if (data.status === "unauthenticated") {
      router.replace("/auth/login");
    }

    if (data.status === "authenticated") {
      (async () => {
        const res = await fetch("/api/places", {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ getByUser: true }),
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
