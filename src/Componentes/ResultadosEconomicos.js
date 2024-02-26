import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function ResultadosEconomicos(props) {

    return (
        <div>
            {props.validacion6 === false && (<div>
                <h3 style={{ color: "darkred", backgroundColor: "lightpink" }}>Revisar los valores ingresados</h3>
            </div>)}
            {props.validacion6 && (<div className='resultados'>
                <h4>Resultado operativo</h4>
                <h6>(Análisis por litro)</h6>
                <div className='table-responsive'>
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <td>PRECIO DE LA LECHE</td>
                                <td>{props.precioLeche} {props.codigoMoneda}/litro</td>
                            </tr>
                            <tr>
                                <td>COSTO DE CORTO PLAZO</td>
                                <td>{props.costoLitroCP} {props.codigoMoneda}/litro</td>
                            </tr>

                            <tr>
                                <td><b>RESULTADO OPERATIVO</b></td>
                                <td><b>{props.resultadoOpLitro} {props.codigoMoneda}/litro</b></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <h4>Resultado operativo</h4>
                <h6>(Análisis montos absolutos anuales)</h6>
                <div className='table-responsive'>
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <td>INGRESOS BRUTOS</td>
                                <td>{props.ingresoBruto} {props.codigoMoneda}/año</td>
                            </tr>
                            <tr>
                                <td>GASTOS DIRECTOS</td>
                                <td>{props.gastosDirectos} {props.codigoMoneda}/año</td>
                            </tr>
                            <tr>
                                <td>GASTOS ESTRUCTURA</td>
                                <td>{props.gastosEstructura} {props.codigoMoneda}/año</td>
                            </tr>
                            <tr>
                                <td><b>RESULTADO OPERATIVO</b></td>
                                <td><b>{props.resultadoOperativo} {props.codigoMoneda}/año</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h4>Resultado Operativo</h4>
                <h6>(Otras unidades)</h6>
                <div className='table-responsive'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">{props.codigoMoneda}/haVT/año</th>
                                <th scope="col">% sobre IB</th>
                                <th scope="col">litros leche/haVT/año</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{props.resultadoOpHa} {props.codigoMoneda}/haVT/año</td>
                                <td>{props.resultadoOpP}%</td>
                                <td>{props.resultadoOpLeche} litros leche/haVT/año</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>)}
        </div>
    )
}

export default ResultadosEconomicos;