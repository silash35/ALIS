import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { Place } from "@prisma/client";
import { SyntheticEvent, useContext, useRef } from "react";

import { ThemeContext } from "@/contexts/ThemeContext";

import styles from "./search.module.scss";

interface Props {
  setSearchPlaces(places: Place[] | "NotFound" | "Loading"): void;
  setIsSearching(isSearching: boolean): void;
}

export default function SearchBar({ setSearchPlaces, setIsSearching }: Props) {
  const { theme } = useContext(ThemeContext);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const search = searchInputRef.current?.value;

    if (typeof search === "string" && search.length > 0) {
      setIsSearching(true);
      setSearchPlaces("Loading");
    } else {
      setIsSearching(false);
    }

    const res = await fetch("/api/places", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ search }),
    });
    const { body } = await res.json();

    if (Array.isArray(body) && body.length > 0) {
      setSearchPlaces(body);
    } else {
      setSearchPlaces("NotFound");
    }
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
