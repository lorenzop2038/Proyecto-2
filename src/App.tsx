
import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";

import { TimerPadre } from "./components/TimerPadre";
import { ContadorRed } from "./components/ContadorRed";


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


    </>
  );
}

export default App;