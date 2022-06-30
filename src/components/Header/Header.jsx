import "./Header.css";

import Logo from "./components/Logo/Logo";
import SearchBar from "./components/SearchBar/SearchBar";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-wrap container">
        <Logo />

        {location.pathname === "/" && <SearchBar />}
      </div>
    </header>
  );
}
