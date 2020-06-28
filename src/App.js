import React, {useState, useEffect} from 'react';
import Pregunta from "./Componentes/Pregunta";
import Formulario from "./Componentes/Formulario";
import Listado from "./Componentes/Listado";
import ControlPresupuesto from "./Componentes/ControlPresupuesto";


function App() {

  //Definir el state
  const [ presupuesto, guardarPresupuesto ] = useState(0)
  const [ restante, guardarRestante ] = useState(0)
  const [ mostrarpregunta, actualizarPregunta ] = useState(true)
  const [ gastos, guardarGastos ] = useState([])
  const [ gasto, guardarGasto ] = useState({})
  const [ creargasto, guardarCrearGasto ] = useState(false);

  //Use effect que actualiza el restante
  useEffect( () => {
    //Agrega nuevo presupuesto
    if(creargasto){
      guardarGastos([
        ...gastos,
        gasto
      ]);

      //Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      guardarCrearGasto(false);
    }
  }, [gasto, creargasto, gastos, restante] )

  return (
    <div className="container">
          <header>
            <h1>Gasto Semanal</h1>
            <div className="contenido-principal contenido">
                  {mostrarpregunta ? (
                    <Pregunta
                        guardarPresupuesto={guardarPresupuesto}
                        guardarRestante={guardarRestante}
                        actualizarPregunta={actualizarPregunta}
                    />
                  ) : (
                    <div className="row">
                        <div className="one-half column">
                          <Formulario 
                          guardarGasto={guardarGasto}
                          guardarCrearGasto={guardarCrearGasto}
                          />
                        </div>
                        <div className="one-half column">
                          <Listado 
                            gastos={gastos}
                          />
                          <ControlPresupuesto 
                            presupuesto={presupuesto}
                            restante={restante}
                          />
                        </div>
                    </div>
                  ) }
                  
            </div>
          </header>
    </div>
  );
}

export default App;
