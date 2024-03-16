import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function OtrosGastosDirectos(props) {

    let gastoAlimentacionMes = (parseFloat(props.gastoAlimentacion) / 12).toFixed(0);
    let gastoSuministroMes = (parseFloat(props.gastoSuministro) / 12).toFixed(0);
    let gastosVeterinariaMes = (parseFloat(props.gastosVeterinaria) / 12).toFixed(0);
    let gastosRodeoMes = (parseFloat(props.gastosRodeo) / 12).toFixed(0)
    let alquilerVacasMes = (parseFloat(props.alquilerVacas) / 12).toFixed(0)
    let gastosTamboMes = (parseFloat(props.gastosTambo) / 12).toFixed(0);
    let gastoAlimentacionP = (parseFloat(props.gastoAlimentacionP)).toFixed(1);
    let gastoSuministroP = (parseFloat(props.gastoSuministroP)).toFixed(1);
    let gastosVeterinariaP = (parseFloat(props.gastosVeterinariaP)).toFixed(1);
    let gastosRodeoP = (parseFloat(props.gastosRodeoP).toFixed(1));
    let alquilerVacasP = (parseFloat(props.alquilerVacasP).toFixed(1));
    let gastosTamboP = (parseFloat(props.gastosTamboP)).toFixed(1);

    return (
        <div>
            {props.validacion5 === false && (<div>
                <h3 style={{ color: "darkred", backgroundColor: "lightpink" }}>Revisar los valores ingresados</h3>
            </div>)}
            {props.validacion5 && (<div className='resultados'>

                <h4>Resumen otros gastos directos</h4>
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
                                <td>GASTO DE ALIMENTACIÓN</td>
                                <td>{new Intl.NumberFormat().format(props.gastoAlimentacion)} {props.codigoMoneda}/año</td>
                                <td>{new Intl.NumberFormat().format(gastoAlimentacionMes)} {props.codigoMoneda}/mes</td>
                                <td>{new Intl.NumberFormat().format(gastoAlimentacionP)}%</td>
                            </tr>
                            <tr>
                                <td>GASTOS DE SUMINISTRO</td>
                                <td>{new Intl.NumberFormat().format(props.gastoSuministro)} {props.codigoMoneda}/año</td>
                                <td>{new Intl.NumberFormat().format(gastoSuministroMes)} {props.codigoMoneda}/mes</td>
                                <td>{new Intl.NumberFormat().format(gastoSuministroP)}%</td>
                            </tr>
                            <tr>
                                <td>GASTOS SANIDAD ANIMAL</td>
                                <td>{new Intl.NumberFormat().format(props.gastosVeterinaria)} {props.codigoMoneda}/año</td>
                                <td>{new Intl.NumberFormat().format(gastosVeterinariaMes)} {props.codigoMoneda}/mes</td>
                                <td>{new Intl.NumberFormat().format(gastosVeterinariaP)}%</td>
                            </tr>
                            <tr>
                                <td>GASTOS RODEO</td>
                                <td>{new Intl.NumberFormat().format(props.gastosRodeo)} {props.codigoMoneda}/año</td>
                                <td>{new Intl.NumberFormat().format(gastosRodeoMes)} {props.codigoMoneda}/mes</td>
                                <td>{new Intl.NumberFormat().format(gastosRodeoP)}%</td>
                            </tr>
                            <tr>
                                <td>ALQUILER VACAS</td>
                                <td>{new Intl.NumberFormat().format(props.alquilerVacas)} {props.codigoMoneda}/año</td>
                                <td>{new Intl.NumberFormat().format(alquilerVacasMes)} {props.codigoMoneda}/mes</td>
                                <td>{new Intl.NumberFormat().format(alquilerVacasP)}%</td>
                            </tr>
                            <tr>
                                <td>GASTOS DE ORDEÑO</td>
                                <td>{new Intl.NumberFormat().format(props.gastosTambo)} {props.codigoMoneda}/año</td>
                                <td>{new Intl.NumberFormat().format(gastosTamboMes)} {props.codigoMoneda}/mes</td>
                                <td>{new Intl.NumberFormat().format(gastosTamboP)}%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>)}
        </div>
    )
}

export default OtrosGastosDirectos;