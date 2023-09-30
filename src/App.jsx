import { useTodoContext } from './context/useTodoContext'
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'
import "./App.css"

function App() {

  const {searchedTodos, completeTodo, deleteTodo} = useTodoContext()
  
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
    </>
  )
}

export default App