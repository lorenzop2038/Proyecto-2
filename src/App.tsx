
import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";

import { TimerPadre } from "./components/TimerPadre";
import { ContadorRed } from "./components/ContadorRed";
import { Formulario } from "./components/Formulario";
import { Formulario2 } from "./components/Formulario2";


function App() {
  return (
    <>
      <h3>
        React + Typescript
      </h3>
      <hr/>
      <h3>useState</h3>
      <Counter/>

      <Usuario/>

      <h3>useEffect - useRef</h3>
      <hr/>

      <TimerPadre />

      <h2>useReducer</h2>
      <hr/>
      <ContadorRed />


      <h2>customHooks</h2>
      <hr/>
      <Formulario />

      <hr/>

      <Formulario2 />


      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>


    </>
  );
}

export default App;