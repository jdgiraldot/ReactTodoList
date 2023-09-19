import './TodoSearch.css';

export function TodoSearch() {
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      onChange={(e) => {
        console.log('Escribiste en el TodoSearch');
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
      }}
    />
  );
}