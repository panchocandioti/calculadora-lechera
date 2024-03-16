import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function GastosEstructura(props) {

    let gastosMantenimientoMes = (parseFloat(props.gastosMantenimiento) / 12).toFixed(0);
    let gastoArrendamientoMes = (parseFloat(props.gastoArrendamiento) / 12).toFixed(0);
    let impuestosMes = (parseFloat(props.impuestos) / 12).toFixed(0);
    let gerenciaMes = (parseFloat(props.gerencia) / 12).toFixed(0);
    let gastosAdministracionMes = (parseFloat(props.gastosAdministracion) / 12).toFixed(0);
    let gastosMantenimientoP = (parseFloat(props.gastosMantenimientoP)).toFixed(1);
    let gastoArrendamientoP = (parseFloat(props.gastoArrendamientoP)).toFixed(1);
    let impuestosP = (parseFloat(props.impuestosP)).toFixed(1);
    let gerenciaP = (parseFloat(props.gerenciaP)).toFixed(1);
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
                                <td>{new Intl.NumberFormat().format(props.gastosMantenimiento)} {props.codigoMoneda}/año</td>
                                <td>{new Intl.NumberFormat().format(gastosMantenimientoMes)} {props.codigoMoneda}/mes</td>
                                <td>{new Intl.NumberFormat().format(gastosMantenimientoP)}%</td>
                            </tr>
                            <tr>
                                <td>GASTO DE ARRENDAMIENTO</td>
                                <td>{new Intl.NumberFormat().format(props.gastoArrendamiento)} {props.codigoMoneda}/año</td>
                                <td>{new Intl.NumberFormat().format(gastoArrendamientoMes)} {props.codigoMoneda}/mes</td>
                                <td>{new Intl.NumberFormat().format(gastoArrendamientoP)}%</td>
                            </tr>
                            <tr>
                                <td>IMPUESTOS Y SERVICIOS</td>
                                <td>{new Intl.NumberFormat().format(props.impuestos)} {props.codigoMoneda}/año</td>
                                <td>{new Intl.NumberFormat().format(impuestosMes)} {props.codigoMoneda}/mes</td>
                                <td>{new Intl.NumberFormat().format(impuestosP)}%</td>
                            </tr>
                            <tr>
                                <td>GERENCIAMIENTO</td>
                                <td>{new Intl.NumberFormat().format(props.gerencia)} {props.codigoMoneda}/año</td>
                                <td>{new Intl.NumberFormat().format(gerenciaMes)} {props.codigoMoneda}/mes</td>
                                <td>{new Intl.NumberFormat().format(gerenciaP)}%</td>
                            </tr>
                            <tr>
                                <td>GASTOS DE ADMINISTRACIÓN</td>
                                <td>{new Intl.NumberFormat().format(props.gastosAdministracion)} {props.codigoMoneda}/año</td>
                                <td>{new Intl.NumberFormat().format(gastosAdministracionMes)} {props.codigoMoneda}/mes</td>
                                <td>{new Intl.NumberFormat().format(gastosAdministracionP)}%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>)}
        </div>
    )
}

export default GastosEstructura;