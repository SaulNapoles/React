import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Slaons1',
        email: 'slaons@gmail.com'
    })

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        // console.log(event.target.value);
        // console.log(event.target.name);
        const { value, name } = target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        // console.log('UseEffect called');
    }, []); //Cuando se tienen [] solo se dispara cuando se dibuja la primera vez

    useEffect(() => {
        // console.log('formState change');
    }, [formState]); //Se dispara Cuando el segundo argumento ([formState]) cambia

    useEffect(() => {
        // console.log('email change');
    }, [email]);

    

    return (
    <>

        <h1>Formulario Simple</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="UserName"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />

        {
            (username === 'Slaons') && <Message/>
        }
        
        <input
            type="email"
            className="form-control mt-2"
            placeholder="email@hotmail.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />

        
    </>

  )
}
