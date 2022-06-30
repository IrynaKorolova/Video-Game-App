import "./Pagination.css";

import { useDispatch, useSelector } from "react-redux";

import { setCatalogParams } from "./../../store/catalogParams/actionCreators";
import { catalogParamsSelector } from "./../../store/catalogParams/selectors";

export default function Pagination() {
  const catalogParams = useSelector(catalogParamsSelector);
  const dispatch = useDispatch();

  function loadMore() {
    return dispatch(
      setCatalogParams({
        ...catalogParams,
        page: catalogParams.page + 1,
        more: true,
      })
    );
  }
  return (
    <div className="game-btn-wrap">
      <button className="game-btn load-btn" onClick={loadMore}>
        Load more
      </button>
    </div>
  );
}
