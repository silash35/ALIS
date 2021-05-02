import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { SyntheticEvent, useContext, useRef } from "react";

import { IPlace } from "@/types/IPlace";

import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./search.module.scss";

interface Props {
  setPlaces(places: IPlace[]): void;
}

export default function Search({ setPlaces }: Props) {
  const { theme } = useContext(ThemeContext);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const search = searchInputRef.current?.value;

    const res = await fetch("/api/places", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ search }),
    });

    const data = await res.json();

    setPlaces(data.body);
  };

  return (
    <form onSubmit={handleSearch} className={styles.form}>
      <label className={`${styles.pesquisa} ${styles[theme]}`}>
        <input type="text" ref={searchInputRef}></input>
        <IconButton aria-label="pesquisar" type="submit">
          <SearchIcon />
        </IconButton>
      </label>
    </form>
  );
}
