import { useReducer } from 'react'

import { TodoContext } from './TodoContext'
import { todoReducer } from './todoReducer'

import { TodoState } from '../interfaces/interfaces'

const INITIAL_STATE: TodoState = {
    todoCount: 0,
    todos: [
        {
            id: '1',
            desc: 'Recolectar las piedras del infinito',
            completed: false
        },
        {
            id: '2',
            desc: 'Piedra del alma',
            completed: false
        }
    ],
    completed: 0,
    pending: 0
}



interface TodoProviderProps{
    children: JSX.Element | JSX.Element[]
}


export const TodoProvider = ({ children }:TodoProviderProps ) => {

    const [todoState, dispatch] = useReducer( todoReducer, INITIAL_STATE )

    const toggleTodo = ( id:string ) =>{
        dispatch({ type: 'toggleTodo', payload:{ id } })
    }

    const deleteTodo = ( id:string ) =>{
        dispatch({ type: 'deleteTodo', payload:{ id } })
    }
    
    return (
        <TodoContext.Provider value={{ 
            todoState, 
            toggleTodo, 
            deleteTodo
        }}>
            { children }
        </TodoContext.Provider> 
    )
}
