import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import styles from "./search.module.scss";

export default function Search(props) {
  const handleSearch = async (event) => {
    event.preventDefault();
    const search = document.getElementById("searchField").value;

    const res = await fetch("/api/places", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ search }),
    });

    const data = await res.json();

    props.setPlaces(data.body);
  };

  return (
    <form onSubmit={handleSearch} className={styles.form}>
      <label className={styles.pesquisa}>
        <input type="text" id="searchField"></input>
        <IconButton aria-label="pesquisar" type="submit">
          <SearchIcon />
        </IconButton>
      </label>
    </form>
  );
}
