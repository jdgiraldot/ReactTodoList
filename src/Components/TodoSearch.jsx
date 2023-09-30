import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useTodoContext } from '../context/useTodoContext'
import './TodoSearch.css'

export function TodoSearch() {

  const { searchValue , setSearchValue } = useTodoContext()

  return (
    <>
      <input
        placeholder='Search'
        className='TodoSearch'
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value)
        }}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className='iconSearch'
      />
    </>
  )
}