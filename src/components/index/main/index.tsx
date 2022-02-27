import { Place } from "@prisma/client";
import { useState } from "react";
import useSWR from "swr";

import Title from "@/components/common/Title";
import styles from "./main.module.scss";

import Cards from "@/components/index/Cards";
import Search from "@/components/index/Search";

const Main = () => {
  const [searchPlaces, setSearchPlaces] = useState([] as Place[] | "NotFound" | "Loading");
  const [isSearching, setIsSearching] = useState(false);

  const { data } = useSWR("/api/places");
  const allPlaces = data?.body as Place[] | undefined;

  return (
    <main className={styles.main}>
      <Title cursive>
        <h1>
          Bem&nbsp;vindo ao&nbsp;<span>alis</span>
        </h1>
        <p>O Agregador de Locais Inclusivos para Surdos</p>
      </Title>

      <Search setSearchPlaces={setSearchPlaces} setIsSearching={setIsSearching} />

      <Cards places={isSearching ? searchPlaces : allPlaces} />
    </main>
  );
};

export default Main;
