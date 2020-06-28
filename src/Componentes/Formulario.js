import React, { useState } from 'react';
import Error from "./Error";
import shortid from "shortid";

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {

    const [nombre, guardarNombre] = useState("")
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)

    //Cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        //Validar

        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ""){
            guardarError(true);
            return;
        }

        guardarError(false);

        //Construir el gasto

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        guardarGasto(gasto);
        guardarCrearGasto(true);

        //Pasar el gasto al componente principal

        //Limpiar el formulario

        guardarNombre("");
        guardarCantidad("");
    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>
            { error ? <Error mensaje = "Todos los campos son obligatorios" /> : null }
            <div className="campo">
                <label>Nombre del Gasto: </label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => {
                        guardarNombre(e.target.value)
                    }}
                />
            </div>
            <div className="campo">
                <label>Cantidad del Gasto: </label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => {
                        guardarCantidad( parseInt(e.target.value) )
                    }}
                />
            </div>

            <input 
                type="submit"
                className="u-full-width button-primary"
                value="Agregar Gasto"
            />
        </form>
     );
}
 
export default Formulario;