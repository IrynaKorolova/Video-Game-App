import "./Sort.css";

import { setCatalogParams } from '../../store/catalogParams/actionCreators';
import { useDispatch } from 'react-redux';

export default function Sort() {
  const dispatch = useDispatch();
  function selectSort(event) {
    const sortValue = event.target.value;
    dispatch(setCatalogParams({ ordering: sortValue }));
  }
  return (
    <select className="sort-select" defaultValue="" onChange={selectSort}>
      <option value="" disabled>
        Sort by
      </option>
      <option value="rating">Rating up</option>
      <option value="-rating">Rating down</option>
    </select>
  );
}
