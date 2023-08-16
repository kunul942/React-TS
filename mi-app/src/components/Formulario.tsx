
import { useForm } from '../hooks/useForm';

interface FormData{
    email: string,
    nombre: string,
    edad: number
}

export const Formulario = () => {
    
    const { nombre, email, edad, formulario, onInputChange } = useForm<FormData>({
        email: 'kunulee942@gmail.com',
        nombre: 'Kunu Lee',
        edad: 30
    })

    return (
        <form autoComplete="off">
            <div>
                <label htmlFor="">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={ email } 
                    onChange={ onInputChange }/>
            </div>


            <div>
                <label htmlFor="">Nombre:</label>
                <input 
                    type="text" 
                    name="nombre" 
                    value={ nombre } 
                    onChange={ onInputChange }/>
            </div>

            <div>
                <label htmlFor="">Edad:</label>
                <input 
                    type="number" 
                    name="edad" 
                    value={ edad } 
                    onChange={ onInputChange }/>
            </div>

            <pre>{ JSON.stringify(formulario) }</pre>
        </form>
    )
}
