import { useTodoContext } from '../context/useTodoContext'
import './TodoCounter.css'

export function TodoCounter() {

  const { completedTodos , totalTodos } = useTodoContext()

  return (
    <h1 className="TodoCounter">
      Has completado <br/> <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
    </h1>
  )
}