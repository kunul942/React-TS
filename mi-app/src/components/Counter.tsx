import { useState } from "react"


export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = (number:number = 1):void =>{
        setCounter( counter + number )
    }

    return (
        <>
            <h2>Counter</h2>
            <span>Valor: { counter }</span>
            <br />
            <button onClick={ ()=> increment() }>+1</button>
            <button onClick={ ()=> increment( 2 ) }>+2</button>
            <button onClick={ ()=> setCounter(0) }>Reset</button>
        </>
    )
}
