import './Filter.css';

import { setCatalogParams } from "../../store/catalogParams/actionCreators";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getParentPlatforms, getGenres } from "../../api/games";

import { useState } from "react";

export default function Filter() {
  const dispatch = useDispatch();
  const [parentPlatforms, setParentPlatforms] = useState([]);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    getParentPlatforms().then((response) =>
      setParentPlatforms(response.data.results)
    );
    getGenres().then((response) => setGenres(response.data.results));
  }, []);

  function selectFilter(event) {
    const filterType = event.target.name;
    const filterValue = event.target.value;
    dispatch(setCatalogParams({ [filterType]: filterValue }));
  }
  return (
    <div>
      <select className='filter-select' defaultValue="" onChange={selectFilter} name="platforms">
        <option value="" disabled>
          Filter by platform
        </option>
        {parentPlatforms.map((parentPlatform) => (
          <option key={parentPlatform.id} value={parentPlatform.id}>
            {parentPlatform.name}
          </option>
        ))}
      </select>
      <select className='filter-select' defaultValue="" onChange={selectFilter} name="genres">
        <option value="" disabled>
          Filter by genre
        </option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
}
