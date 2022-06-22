import "./Header.css";

import Logo from "./components/Logo/Logo";
import SearchBar from "./components/SearchBar/SearchBar";

export default function Header() {
  return (
    <header className="header">
      <div className="header-wrap container">
        <Logo />
        <div className="header-search">
         <SearchBar />
        </div>
      </div>
    </header>
  );
}
