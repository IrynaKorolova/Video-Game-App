import "./Sort.css";

import { setCatalogParams } from "../../store/catalogParams/actionCreators";
import { useDispatch } from "react-redux";

export default function Sort() {
  const dispatch = useDispatch();
  function selectSort(event) {
    const sortValue = event.target.value;
    dispatch(setCatalogParams({ ordering: sortValue, page: 1, more: false }));
  }
  return (
    <select className="sort-select" defaultValue="" onChange={selectSort}>
      <option value="" disabled>
        Sort by rating
      </option>
      <option value="rating">Rating up</option>
      <option value="-rating">Rating down</option>
    </select>
  );
}
