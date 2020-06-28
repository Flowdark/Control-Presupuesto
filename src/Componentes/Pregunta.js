import React, { Fragment, useState } from 'react';
import Error from "./Error"

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

    //Definir State
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad( parseInt(e.target.value, 10) )
    }

    //Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar

        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            console.log("No pasa");
            return;
        }        

        //Pasar Validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El presupuesto no es valido!"/> : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input 
                    type="submit"
                    className="u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
     );
}
 
export default Pregunta;