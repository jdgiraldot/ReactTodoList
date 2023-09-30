import { useTodoContext } from '../context/useTodoContext'
import './CreateTodoButton.css'

export function CreateTodoButton() {

  const { setOpenModal } = useTodoContext()

  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
          setOpenModal(state => !state)
        }
      }
    >+</button>
  )
}