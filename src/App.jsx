import { useTodoContext } from './context/useTodoContext'
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'
import { Modal } from './components/Modal'
import { TodoForm } from './components/TodoForm'
import "./App.css"

function App() {

  const {searchedTodos, completeTodo, deleteTodo, openModal} = useTodoContext()
  
  return (
    <>
      <TodoCounter />
      <nav>
        <TodoSearch />
        <CreateTodoButton />
      </nav>

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal ? <Modal> <TodoForm/> </Modal> : null}
    </>
  )
}

export default App