import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { catalogParamsReducer } from "./catalogParams/reducer";
import { gamesReducer } from "./games/reducer";

const rootReducer = combineReducers({
  catalogParams: catalogParamsReducer,
  games: gamesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
