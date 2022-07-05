import "./SearchBar.css";

import { useDispatch } from "react-redux";
import { setCatalogParams } from "../../../../store/catalogParams/actionCreators";

export default function SearchBar() {
  const dispatch = useDispatch();

  function searchGame(event) {
    event.preventDefault();
    const searchQuery = event.target.search.value.trim();
    dispatch(setCatalogParams({ search: searchQuery }));
  }
  return (
    <form className="search-form" onSubmit={searchGame}>
      <input
        className="search-input"
        placeholder="Search 750,236 games"
        type="search"
        name="search"
      />
    </form>
  );
}
