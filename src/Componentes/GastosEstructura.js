import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function GastosEstructura(props) {

    let gastosMantenimientoMes = (parseFloat(props.gastosMantenimiento) / 12).toFixed(0);
    let gastoArrendamientoMes = (parseFloat(props.gastoArrendamiento) / 12).toFixed(0);
    let gastosAdministracionMes = (parseFloat(props.gastosAdministracion) / 12).toFixed(0);
    let gastosMantenimientoP = (parseFloat(props.gastosMantenimientoP)).toFixed(1);
    let gastoArrendamientoP = (parseFloat(props.gastoArrendamientoP)).toFixed(1);
    let gastosAdministracionP = (parseFloat(props.gastosAdministracionP)).toFixed(1);

    return (
        <div>
            {props.validacion6 === false && (<div>
                <h3 style={{ color: "darkred", backgroundColor: "lightpink" }}>Revisar los valores ingresados</h3>
            </div>)}
            {props.validacion6 && (<div className='resultados'>

                <h4>Resumen gastos de estructura</h4>
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
                                <td>GASTOS DE MANTENIMIENTO</td>
                                <td>{props.gastosMantenimiento} {props.codigoMoneda}/año</td>
                                <td>{gastosMantenimientoMes} {props.codigoMoneda}/mes</td>
                                <td>{gastosMantenimientoP}%</td>
                            </tr>
                            <tr>
                                <td>GASTO DE ARRENDAMIENTO</td>
                                <td>{props.gastoArrendamiento} {props.codigoMoneda}/año</td>
                                <td>{gastoArrendamientoMes} {props.codigoMoneda}/mes</td>
                                <td>{gastoArrendamientoP}%</td>
                            </tr>
                            <tr>
                                <td>GASTOS DE ADMINISTRACIÓN</td>
                                <td>{props.gastosAdministracion} {props.codigoMoneda}/año</td>
                                <td>{gastosAdministracionMes} {props.codigoMoneda}/mes</td>
                                <td>{gastosAdministracionP}%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>)}
        </div>
    )
}

export default GastosEstructura;