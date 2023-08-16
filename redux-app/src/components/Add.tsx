import { useRef } from "react"
import { useAppDispatch, useAppSelector } from "../store/store"
import { addPerson, removePerson } from "../store/features/personSlice";


export const Add = () => {
  const ref = useRef<string>("")

  const dispatch = useAppDispatch();
  const persons = useAppSelector( store => store.person ) 

  return (
    <form onSubmit={(e)=> e.preventDefault() }>
      <label htmlFor="">Person Name:</label>
      <input type="text" onChange={ e=> ref.current = e.target.value }/>
      <button onClick={()=> dispatch(addPerson( { name: ref.current } ))}>Add</button>
      <button onClick={()=> dispatch(removePerson( { name:ref.current, id:5 } ))}>Remove</button>
    </form>
  )
}
