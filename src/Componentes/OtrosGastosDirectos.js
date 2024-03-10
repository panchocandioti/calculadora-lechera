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
                                <td>{props.gastoAlimentacion} {props.codigoMoneda}/año</td>
                                <td>{gastoAlimentacionMes} {props.codigoMoneda}/mes</td>
                                <td>{gastoAlimentacionP}%</td>
                            </tr>
                            <tr>
                                <td>GASTOS DE SUMINISTRO</td>
                                <td>{props.gastoSuministro} {props.codigoMoneda}/año</td>
                                <td>{gastoSuministroMes} {props.codigoMoneda}/mes</td>
                                <td>{gastoSuministroP}%</td>
                            </tr>
                            <tr>
                                <td>GASTOS SANIDAD ANIMAL</td>
                                <td>{props.gastosVeterinaria} {props.codigoMoneda}/año</td>
                                <td>{gastosVeterinariaMes} {props.codigoMoneda}/mes</td>
                                <td>{gastosVeterinariaP}%</td>
                            </tr>
                            <tr>
                                <td>GASTOS RODEO</td>
                                <td>{props.gastosRodeo} {props.codigoMoneda}/año</td>
                                <td>{gastosRodeoMes} {props.codigoMoneda}/mes</td>
                                <td>{gastosRodeoP}%</td>
                            </tr>
                            <tr>
                                <td>ALQUILER VACAS</td>
                                <td>{props.alquilerVacas} {props.codigoMoneda}/año</td>
                                <td>{alquilerVacasMes} {props.codigoMoneda}/mes</td>
                                <td>{alquilerVacasP}%</td>
                            </tr>
                            <tr>
                                <td>GASTOS DE ORDEÑO</td>
                                <td>{props.gastosTambo} {props.codigoMoneda}/año</td>
                                <td>{gastosTamboMes} {props.codigoMoneda}/mes</td>
                                <td>{gastosTamboP}%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>)}
        </div>
    )
}

export default OtrosGastosDirectos;