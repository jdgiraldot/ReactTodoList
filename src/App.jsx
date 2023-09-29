import { useState } from 'react'
import { useLocaleStorage } from './hooks/useLocaleStorage';
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'
import "./App.css"

function App() {

  const [todos, saveTodos] = useLocaleStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter(todo => todo.completed === true).length
  const totalTodos = todos.length
  const searchedTodos = todos.filter(todo => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

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
