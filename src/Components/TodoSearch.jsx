import { useTodoContext } from '../context/useTodoContext'
import './TodoSearch.css'

export function TodoSearch() {

  const { searchValue , setSearchValue } = useTodoContext()

  return (
    <>
      <img src="src/assets/lupa.png" alt="Search" className="iconSearch" />
      <input
        placeholder="Search"
        className="TodoSearch"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value)
        }}
      />
    </>
  )
}