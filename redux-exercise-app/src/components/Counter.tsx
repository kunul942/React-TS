import { useAppDispatch, useAppSelector } from "../store/store"
import { decrementar, incrementar, reset } from "../store/counter/counterSlice"


export const Counter = () => {
    const counter = useAppSelector( ( store )=> store.counters.counter )
    const dispatch = useAppDispatch()


    const handleClickIncrement = ( number: number = 1 )=>{
        dispatch( incrementar( number ) )
    }

    const handleClickDecrement = ( number: number = 1 ) =>{
        dispatch( decrementar( number ) )
    }

    const handleReset = () =>{
        dispatch( reset( 0 ) )
    }

  return (
   <>
        <div>
            Counter: { counter }
        </div>

        {/* <button onClick={ incrementar }></button> */}
        <button onClick={ ()=> handleClickIncrement(2) }>
            Click para incrementar
        </button>

        <button onClick={()=> handleClickDecrement() }>
            Click para decrementar
        </button>

        <button onClick={ handleReset }>Reset</button>
   </>
  )
}
