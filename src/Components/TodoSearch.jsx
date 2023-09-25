import './TodoSearch.css';
import { PropTypes } from 'prop-types'

export function TodoSearch({searchValue , setSearchValue}) {
  return (
    <>
      <img src="src/assets/lupa.png" alt="Search" className="iconSearch" />
      <input
        placeholder="Search"
        className="TodoSearch"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
    </>
  );
}

TodoSearch.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func
}