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
                                <td><b>GASTOS DE MANTENIMIENTO</b></td>
                                <td><b>{props.gastosMantenimiento} {props.codigoMoneda}/año</b></td>
                                <td><b>{gastosMantenimientoMes} {props.codigoMoneda}/mes</b></td>
                                <td><b>{gastosMantenimientoP}%</b></td>
                            </tr>
                            <tr>
                                <td><b>GASTO DE ARRENDAMIENTO</b></td>
                                <td><b>{props.gastoArrendamiento} {props.codigoMoneda}/año</b></td>
                                <td><b>{gastoArrendamientoMes} {props.codigoMoneda}/mes</b></td>
                                <td><b>{gastoArrendamientoP}%</b></td>
                            </tr>
                            <tr>
                                <td><b>GASTOS DE ADMINISTRACIÓN</b></td>
                                <td><b>{props.gastosAdministracion} {props.codigoMoneda}/año</b></td>
                                <td><b>{gastosAdministracionMes} {props.codigoMoneda}/mes</b></td>
                                <td><b>{gastosAdministracionP}%</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>)}
        </div>
    )
}

export default GastosEstructura;