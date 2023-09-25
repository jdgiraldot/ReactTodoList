import { useState } from 'react'
import { TodoCounter } from './Components/TodoCounter'
import { TodoSearch } from './Components/TodoSearch'
import { TodoList } from './Components/TodoList'
import { TodoItem } from './Components/TodoItem'
import { CreateTodoButton } from './Components/CreateTodoButton'
import "./App.css"

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tómar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

function App() {

  const [todos, setTodos] = useState(() => {
    const todosFromStorage = window.localStorage.getItem('TODOS_V1')
    return todosFromStorage ? JSON.parse(todosFromStorage) : []
  })
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter(todo => todo.completed === true).length
  const totalTodos = todos.length
  const searchedTodos = todos.filter(todo => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos)) // Persistencia de datos
    setTodos(newTodos)
  }

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex( todo => todo.text == text )
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex( todo => todo.text == text )
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <nav>
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
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
