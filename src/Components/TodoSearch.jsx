import './TodoSearch.css';

export function TodoSearch() {
  return (
    <>
      <img src="src/assets/lupa.png" alt="Search" className="iconSearch" />
      <input
        placeholder="Search"
        className="TodoSearch"
        onChange={(e) => {
          console.log('Escribiste en el TodoSearch');
          console.log(e);
          console.log(e.target);
          console.log(e.target.value);
        }}
      />
    </>
  );
}