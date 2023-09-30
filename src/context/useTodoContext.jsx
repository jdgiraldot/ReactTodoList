import { createContext, useContext, useState } from 'react';
import { useLocaleStorage } from '../hooks/useLocaleStorage';
import PropTypes from 'prop-types';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    
    // ... Nuestra lógica de la App
    const [todos, saveTodos] = useLocaleStorage('TODOS_V1', [])
    const [searchValue, setSearchValue] = useState('')
    const [openModal, setOpenModal] = useState(false)
  
    const completedTodos = todos.filter(todo => todo.completed === true).length
    const totalTodos = todos.length
    const searchedTodos = todos.filter(todo => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
  
    const addTodo = (text) => {
      const newTodos = [...todos]
      newTodos.unshift({
        text: text,
        completed: false
      })
      saveTodos(newTodos)
    }

    const completeTodo = (text) => {
      const newTodos = [...todos]
      const todoIndex = newTodos.findIndex( todo => todo.text == text )
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed    // toggle del estado completed
      saveTodos(newTodos)
    }
    const deleteTodo = (text) => {
      const newTodos = [...todos]
      const todoIndex = newTodos.findIndex( todo => todo.text == text )
      newTodos.splice(todoIndex, 1)
      saveTodos(newTodos)
    }

    return (
        <TodoContext.Provider value={{
            // ... Nuestros valores a exportar
            searchValue,
            setSearchValue,
            completedTodos,
            totalTodos,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider>
    )
}

TodoProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTodoContext = () => useContext(TodoContext);