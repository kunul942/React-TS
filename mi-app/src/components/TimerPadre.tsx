import { Timer } from './Timer';
import { useState } from 'react';


export const TimerPadre = () => {

    const [miliSegundos, setMiliSegundos] = useState(1000);


  return (
    <>
        <span>Milisegundos { miliSegundos } </span>


        <button 
            onClick={()=> setMiliSegundos( 1000 )}
        >
            1000 
        </button>

        <button
            onClick={()=> setMiliSegundos( 2000 )}
        >
            2000 
        </button>

        <Timer miliSegundos = { miliSegundos } />
    </>
  )
}
