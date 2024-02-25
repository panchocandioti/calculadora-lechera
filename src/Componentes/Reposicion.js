import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function Reposicion(props) {

    let gastoReposicionMes = (parseFloat(props.gastoReposicion)/12).toFixed(0);
    let gastoReposicionP = (parseFloat(props.gastoReposicionP)).toFixed(1);
    let porcentajeReposicion = (parseFloat(props.porcentajeReposicion)).toFixed(1);

    return (
        <div>
            {props.validacion4 === false && (<div>
                <h3 style={{ color: "darkred", backgroundColor: "lightpink" }}>Revisar los valores ingresados</h3>
            </div>)}
            {props.validacion4 && (<div className='resultados'>
                
                <h4>Análisis de la reposición</h4>
                <hr></hr>
                <h5>Porcentaje de reemplazo: {porcentajeReposicion}%</h5>
                <div className='table-responsive'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">{props.codigoMoneda}/año</th>
                                <th scope="col">{props.codigoMoneda}/mes</th>
                                <th scope="col">% sobre IB leche</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><b>GASTO DE REPOSICIÓN</b></td>
                                <td><b>{props.gastoReposicion} {props.codigoMoneda}/año</b></td>
                                <td><b>{gastoReposicionMes} {props.codigoMoneda}/mes</b></td>
                                <td><b>{gastoReposicionP}%</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>)}
        </div>
    )
}

export default Reposicion;