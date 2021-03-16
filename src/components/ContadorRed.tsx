import { useReducer } from "react";
import { act } from "react-dom/test-utils";

const initialState = {
    contador: 0,
}


type ActionType = 
 |  { type: "incrementar" }
 |  { type: "descrementar" }
 |  { type: "custom", payload: number };

const ContadorReducer = ( state: typeof initialState, action: ActionType ) => {

    switch( action.type ) {
        case "incrementar":
            return{
                ...state,
                contador: state.contador + 1
            }

            case "descrementar":
                return{
                    ...state,
                    contador: state.contador - 1
                }

            case "custom":
                    return{
                        ...state,
                        contador: action.payload
                    }

        

        default:
            return state;
    }

}



export const ContadorRed = () => {

    const [ contador, dispatch ] = useReducer(ContadorReducer, initialState);


    return(
        <>
        <h2>Contador: { contador }</h2>
        <button className="btn btn-outline-primary"
                onClick={ () => dispatch({ type: "incrementar" }) }>
                +1
        </button>
        <button className="btn btn-outline-primary"
                onClick={ () => dispatch({ type: "descrementar" }) }>
                -1
        </button>
        <button className="btn btn-outline-danger"
                onClick={ () => dispatch({ type: "custom", payload: 100 }) }>
                100
        </button>
        </>
    )
}


