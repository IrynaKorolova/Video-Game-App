import { SET_PARAMS } from './actionTypes';

export function setCatalogParams(params) {
  return {
    type: SET_PARAMS,
    payload: params,
  };
}
