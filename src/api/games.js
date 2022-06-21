import axios from 'axios';
import { API_KEY } from '../constants';

export const gamesApi = axios.create({
  baseURL: 'https://api.rawg.io/api/games',
  params: {
    key: API_KEY,
    exclude_additions: true,
    exclude_parents: true,
    exclude_game_series: true,
  },
});

export function getGames(params) {
  return gamesApi.get('', { params });
}
