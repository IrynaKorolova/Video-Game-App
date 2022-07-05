import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import GameCatalog from "./components/GameCatalog/GameCatalog";
import GameInfo from "./components/GameInfo/GameInfo";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<GameCatalog />} />
          <Route path="/games/:slug" element={<GameInfo />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
