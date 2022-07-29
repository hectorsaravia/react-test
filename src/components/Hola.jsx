import React, {Fragment, useState} from "react";

export default function Hola() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const validate = (event) => {
        event.preventDefault();
        if (!name.trim() || !password.trim()) {
            alert('Debe rellenar los campos')
        }
    }

    return (
        <Fragment>
            <h2>Componente Hola</h2>
            <div className="container">
                <form
                    
                    className="form-group"
                    onSubmit={validate}
                >
                    <input
                        label="Nombre"
                        className="form-control mb-3" 
                        type="text"
                        onChange={ (e) => {setName(e.target.value)} }
                    />
                    <input
                        className="form-control mb-3" 
                        type="password"
                        onChange={ (e) => {setPassword(e.target.value)} }
                    />
                    <input 
                        label="Ingresar"
                        className="btn btn-info btn-block mb-3" 
                        type="submit"
                    />
                </form>
            </div>
        </Fragment>
    );
};