import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { SyntheticEvent, useRef } from "react";

import TPlaces from "../TPlaces";
import styles from "./search.module.scss";
import Places from "database.json";

interface Props {
  setSearchPlaces(places: TPlaces): void;
  setIsSearching(isSearching: boolean): void;
}

const SearchBar = ({ setSearchPlaces, setIsSearching }: Props) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const search = searchInputRef.current?.value?.trim().toLowerCase();

    if (!search) {
      setIsSearching(false);
      setSearchPlaces("NotFound");
      return;
    }

    setIsSearching(true);

    const results = Places.filter(
      (place) =>
        place.name.toLowerCase().includes(search) ||
        place.address.toLowerCase().includes(search) ||
        place.description.toLowerCase().includes(search),
    );

    if (results.length > 0) {
      setSearchPlaces(results);
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
