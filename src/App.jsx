import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import GameInfo from "./components/GameInfo/GameInfo";

import GameList from "./components/GameList/GameList";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<GameList />} />
          <Route path="/games/:slug" element={<GameInfo />} />
          <Route path="*" element={<h1>Page Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
