import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function OtrosGastosDirectos(props) {

    let gastoAlimentacionMes = (parseFloat(props.gastoAlimentacion)/12).toFixed(0);
    let gastoSuministroMes = (parseFloat(props.gastoSuministro)/12).toFixed(0);
    let gastosVeterinariaMes = (parseFloat(props.gastosVeterinaria)/12).toFixed(0);
    let gastosTamboMes = (parseFloat(props.gastosTambo)/12).toFixed(0);
    let gastoAlimentacionP = (parseFloat(props.gastoAlimentacionP)).toFixed(1);
    let gastoSuministroP = (parseFloat(props.gastoSuministroP)).toFixed(1);
    let gastosVeterinariaP = (parseFloat(props.gastosVeterinariaP)).toFixed(1);
    let gastosTamboP = (parseFloat(props.gastosTamboP)).toFixed(1);

    return (
        <div>
            {props.validacion5 === false && (<div>
                <h3 style={{ color: "darkred", backgroundColor: "lightpink" }}>Revisar los valores ingresados</h3>
            </div>)}
            {props.validacion5 && (<div className='resultados'>
                
                <h4>Análisis de otros gastos directos</h4>
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
                                <td><b>GASTO DE ALIMENTACIÓN</b></td>
                                <td><b>{props.gastoAlimentacion} {props.codigoMoneda}/año</b></td>
                                <td><b>{gastoAlimentacionMes} {props.codigoMoneda}/mes</b></td>
                                <td><b>{gastoAlimentacionP}%</b></td>
                            </tr>
                            <tr>
                                <td><b>GASTOS DE SUMINISTRO</b></td>
                                <td><b>{props.gastoSuministro} {props.codigoMoneda}/año</b></td>
                                <td><b>{gastoSuministroMes} {props.codigoMoneda}/mes</b></td>
                                <td><b>{gastoSuministroP}%</b></td>
                            </tr>
                            <tr>
                                <td><b>GASTOS VETERINARIA Y RODEO</b></td>
                                <td><b>{props.gastosVeterinaria} {props.codigoMoneda}/año</b></td>
                                <td><b>{gastosVeterinariaMes} {props.codigoMoneda}/mes</b></td>
                                <td><b>{gastosVeterinariaP}%</b></td>
                            </tr>
                            <tr>
                                <td><b>GASTOS DE ORDEÑO</b></td>
                                <td><b>{props.gastosTambo} {props.codigoMoneda}/año</b></td>
                                <td><b>{gastosTamboMes} {props.codigoMoneda}/mes</b></td>
                                <td><b>{gastosTamboP}%</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>)}
        </div>
    )
}

export default OtrosGastosDirectos;