import { Todo, TodoState } from '../interfaces/interfaces';

type TodoAction = 
    | { type: 'addTodo', payload: Todo }
    | { type: 'toggleTodo', payload: { id: string } }
    | { type: 'deleteTodo', payload: { id: string } }

export const todoReducer = ( state:TodoState, action:TodoAction ):TodoState =>{
    switch ( action.type ) {
        case 'addTodo':
            return {
                ...state,
                todos: [ ...state.todos, action.payload ]
            }
        
        case 'deleteTodo':
            return{
                ...state,
                todos: state.todos.filter( todo=> (
                    ( todo.id !== action.payload.id )
                    ? todo
                    : console.log('este id ha sido eliminado', action.payload.id)
                ))
            }
            
        case 'toggleTodo':
            return {
                ...state,
                todos: state.todos.map( ({...todo}) => {
                    if( todo.id === action.payload.id ){
                        todo.completed = !todo.completed
                    }
                    return todo;
                })
            }
    
        default:
            return state
    }

}