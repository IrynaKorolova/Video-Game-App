import "./Header.css";

import Logo from "./components/Logo";

// import { useState } from "react";

export default function Header() {
  // const [wordEntered, setWordEntered] = useState("");

  // const handleFilter = (event) => {
  //   const searchWord = event.target.value;
  //   setWordEntered(searchWord);
  //   const filteredGames = ???.filter((value) => {
  //     return value.name.toLowerCase().includes(searchWord.toLowerCase());
  //   });
  // };

  return (
    <header className="header">
      <div className="header-wrap container">
        <Logo />
        <div className="header-search">
          <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <input
              //value={wordEntered}
              //onChange={handleFilter}
              className="search-input"
              placeholder="Search 750,236 games"
              type="search"
            ></input>
          </form>
        </div>
      </div>
    </header>
  );
}
