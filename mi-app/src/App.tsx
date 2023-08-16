
import { Counter } from './components/Counter.tsx';
import { User } from './components/User.tsx';

import { TimerPadre } from './components/TimerPadre';
import { Example } from './components/useRefExample.tsx';
import { ContadorRed } from './components/ContadorRed';
import { Formulario } from './components/Formulario';


export const App = () => {
  return (
    <>
      <div>Hola mundo + Typescript</div>
      <h1>useState</h1>
      <Counter />
      <User/>

      <h1>useEffect - useRef</h1>
      <hr />

      <TimerPadre/>
      <Example />

      <h2>useReducer</h2>
      <hr />

      <ContadorRed />


      <h2>customHooks</h2>
      <Formulario/>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  )
}
