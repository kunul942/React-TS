import { useState, useEffect, useRef } from 'react';

// type TimerArgs = {    
//     miliSegundos: number
// }

// export const Timer = ( { miliSegundos }: TimerArgs ) => {

//     const [segundos, setSegundos] = useState(0);
//     const ref = useRef<number>()

//     useEffect(() => {
//         ref.current && clearInterval( ref.current )

//         ref.current = setInterval(()=> setSegundos( s => s + 1 ), miliSegundos)
//     }, [miliSegundos])
    

//     return (
//         <>
//             <h4>Timer: <small>{ segundos }</small></h4>
//         </>
//     )
// }



type milisegundos = {
    miliSegundos: number
}

export const Timer = ({ miliSegundos }: milisegundos) => {

    const [segundos, setSegundos] = useState(0)
    const ref = useRef<number>();

    useEffect(() => {

        ref.current && clearInterval( ref.current )
        ref.current = setInterval( () => {
            setSegundos(( s ) => s + 1 )
        }, miliSegundos )

    }, [miliSegundos])
    
    

    return(

        <h1>Timer: { segundos }</h1>
    )
}
