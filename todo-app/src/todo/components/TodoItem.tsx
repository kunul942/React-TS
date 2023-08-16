// import { useContext } from 'react';
// import { TodoContext } from "../context/TodoContext";
import { useTodos } from '../hooks/useTodos';

import { Todo } from "../interfaces/interfaces"



interface TodoItemProps{
    todo:Todo
}

export const TodoItem = ({ todo }: TodoItemProps) => {
 
  
  // const { toggleTodo, deleteTodo } = useContext( TodoContext )
  const { toggleTodo, deleteTodo } = useTodos()

  const onDoubleClick = () =>{
    toggleTodo( todo.id )
  }
  const onDeleteTodo = () =>{
    deleteTodo( todo.id )
  }
  

  return (
    <>
      <li style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : ''
      }} 
        onDoubleClick={ onDoubleClick }>
        { todo.desc }
      </li>
      <button onClick={onDeleteTodo}>click</button>
    </>
  )
}
