import axios from "axios";

import { API_KEY } from "../constants";

export const gamesApi = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: API_KEY,
    exclude_additions: true,
    exclude_parents: true,
    exclude_game_series: true,
  },
});

export function getGames(params) {
  return gamesApi.get("/games", { params });
}
export function getGameDetails(slug) {
  return gamesApi.get(`/games/${slug}`);
}
export function getParentPlatforms() {
  return gamesApi.get("/platforms/lists/parents");
}
export function getGenres() {
  return gamesApi.get("/genres");
}
export function getScreenshots(game_pk) {
  return gamesApi.get(`/games/${game_pk}/screenshots`);
}
