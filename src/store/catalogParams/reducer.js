import { SET_PARAMS  } from "./actionTypes";


const initialState = {
  page: 1,
  page_size: 12,
};

export function catalogParamsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PARAMS:
      return {...state, ...action.payload};
    default:
      return state;
  }
}
