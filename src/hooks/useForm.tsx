import { ChangeEvent, useState } from "react";


export const useForm= <T extends object>( initialState:T ) => {
//export const useForm = ( initialState: any ) => {

    const [formulario, setFormulario] = useState(initialState);

    const handleChange = ( { target }: ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = target;

        setFormulario({
            ...formulario,
            [ name ]: value
        })
    }

    return {
        formulario,
        handleChange,
        ...formulario
    }
}

