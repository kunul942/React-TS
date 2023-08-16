import { useRef } from 'react';


export const Example = () => {
    const ref =useRef<number>(0)

    const handleClick = () =>{
        ref.current = ref.current + 1
        alert(`you clicked me ${ ref.current } times`)
    }
    
    return(
        <>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}
