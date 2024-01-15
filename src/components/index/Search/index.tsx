import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { SyntheticEvent, useRef } from "react";

import TPlaces from "../TPlaces";
import styles from "./search.module.scss";

interface Props {
  setSearchPlaces(places: TPlaces): void;
  setIsSearching(isSearching: boolean): void;
}

const SearchBar = ({ setSearchPlaces, setIsSearching }: Props) => {
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

    const res = await fetch("/api/public/places", {
      method: "POST",
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
    <form className={styles.form} onSubmit={handleSearch}>
      <label className={styles.pesquisa}>
        <input ref={searchInputRef} type="text"></input>
        <IconButton aria-label="pesquisar" type="submit">
          <SearchIcon />
        </IconButton>
      </label>
    </form>
  );
};

export default SearchBar;
