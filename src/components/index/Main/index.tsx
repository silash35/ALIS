import { useState } from "react";
import useSWR from "swr";

import Cards from "@/components/common/PlaceCards";
import Title from "@/components/common/Title";
import Search from "@/components/index/Search";

import DeprecationWarning from "../DeprecationWarning";
import TPlaces from "../TPlaces";
import styles from "./main.module.scss";

const Main = () => {
  const [searchPlaces, setSearchPlaces] = useState([] as TPlaces);
  const [isSearching, setIsSearching] = useState(false);

  const { data, error } = useSWR("/api/public/places");
  const SWRtoTPlaces = (): TPlaces => {
    if (Array.isArray(data?.body)) {
      if (data.body.length > 0) {
        return data.body;
      } else {
        return "NotFound";
      }
    } else if (error) {
      return "Error";
    } else {
      return "Loading";
    }
  };
  const allPlaces = SWRtoTPlaces();

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

      <DeprecationWarning />
    </main>
  );
};

export default Main;
