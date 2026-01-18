import Places from "database.json";
import { useState } from "react";

import Cards from "@/components/common/PlaceCards";
import Title from "@/components/common/Title";
import Search from "@/components/index/Search";

import TPlaces from "../TPlaces";
import styles from "./main.module.scss";

const Main = () => {
  const [searchPlaces, setSearchPlaces] = useState([] as TPlaces);
  const [isSearching, setIsSearching] = useState(false);

  const allPlaces: TPlaces = Places;

  return (
    <main className={styles.main}>
      <Title cursive>
        <h1>
          Bem&nbsp;vindo ao&nbsp;<span>alis</span>
        </h1>
        <p>O Agregador de Locais Inclusivos para Surdos</p>
      </Title>

      <Search setIsSearching={setIsSearching} setSearchPlaces={setSearchPlaces} />

      <Cards places={isSearching ? searchPlaces : allPlaces} />
    </main>
  );
};

export default Main;
