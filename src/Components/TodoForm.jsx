import { useState } from 'react'
import { useTodoContext } from '../context/useTodoContext'
import './TodoForm.css'

export function TodoForm() {

    const { setOpenModal , addTodo } = useTodoContext()
    const [newTodo , setNewTodo] = useState('') // usamos un estado local, porque no tiene sentido que sea global (Context)

    const onChange = (e) => {
        setNewTodo(e.target.value)
    }
    const onCancel = (e) => {
        e.preventDefault()  // evita que el formulario reinicie la pagina
        setOpenModal(false)
    }    
    const onSubmit = (e) => {
        e.preventDefault()
        addTodo(newTodo)
        setOpenModal(false)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder='. . . ✏️'
                value={newTodo}
                onChange={onChange}
            />
            <div className='btnFormContainer'>
                <button 
                    type='button'
                    className='btnFormCancel'
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    type='submit'
                    className='btnFormAdd'
                    onClick={onSubmit}
                >Agregar</button>
            </div>
        </form>
    )
}