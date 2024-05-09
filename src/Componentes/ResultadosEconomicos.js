import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function ResultadosEconomicos(props) {

    return (
        <div>
            {props.validacion6 === false && (<div>
                <h3 style={{ color: "darkred", backgroundColor: "lightpink" }}>Revisar los valores ingresados</h3>
            </div>)}
            {props.validacion6 && (<div className='resultados'>
                <h4>COSTO DE PRODUCCIÓN (corto plazo)</h4>
                <h6>Análisis por litro</h6>
                <div className='table-responsive'>
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <td>GASTOS DIRECTOS</td>
                                <td>{new Intl.NumberFormat().format(props.gastosDirectosLitro)} {props.codigoMoneda}/litro</td>
                            </tr>
                            <tr>
                                <td>GASTOS DE ESTRUCTURA</td>
                                <td>{new Intl.NumberFormat().format(props.gastosEstructuraLitro)} {props.codigoMoneda}/litro</td>
                            </tr>
                            <tr>
                                <td><b>SUBTOTAL GASTOS POR LITRO</b></td>
                                <td><b>{new Intl.NumberFormat().format(parseFloat(props.gastosEstructuraLitro) + parseFloat(props.gastosDirectosLitro))} {props.codigoMoneda}/litro</b></td>
                            </tr>
                            <br></br>
                            <tr>
                                <td>RECUPERO POR VENTA DE CARNE</td>
                                <td>{new Intl.NumberFormat().format(props.recuperoCarneLitro)} {props.codigoMoneda}/litro</td>
                            </tr>
                            <tr>
                                <td><b>COSTO DE CORTO PLAZO</b> (ajustado por recupero carne)</td>
                                <td><b>{new Intl.NumberFormat().format(props.costoLitroCP)} {props.codigoMoneda}/litro</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h4>RESULTADO OPERATIVO</h4>
                <h6>Análisis por litro</h6>
                <div className='table-responsive'>
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <td>PRECIO DE LA LECHE</td>
                                <td>{new Intl.NumberFormat().format(props.precioLeche)} {props.codigoMoneda}/litro</td>
                            </tr>
                            <tr>
                                <td>COSTO DE CORTO PLAZO</td>
                                <td>{new Intl.NumberFormat().format(props.costoLitroCP)} {props.codigoMoneda}/litro</td>
                            </tr>
                            <tr>
                                <td><b>RESULTADO OPERATIVO</b></td>
                                <td><b>{new Intl.NumberFormat().format(props.resultadoOpLitro)} {props.codigoMoneda}/litro</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h6>Montos anuales y porcentuales del IB</h6>
                <div className='table-responsive'>
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">{props.codigoMoneda}/año</th>
                                <th scope="col">% sobre IB</th>
                            </tr>
                            <tr>
                                <td>INGRESOS BRUTOS</td>
                                <td>{new Intl.NumberFormat().format(props.ingresoBruto)} {props.codigoMoneda}/año</td>
                                <td>{new Intl.NumberFormat().format(100)}%</td>
                            </tr>
                            <tr>
                                <td>GASTOS DIRECTOS</td>
                                <td>{new Intl.NumberFormat().format(props.gastosDirectos)} {props.codigoMoneda}/año</td>
                                <td>{new Intl.NumberFormat().format(props.gastosDirectosP)}%</td>
                            </tr>
                            <tr>
                                <td>GASTOS ESTRUCTURA</td>
                                <td>{new Intl.NumberFormat().format(props.gastosEstructura)} {props.codigoMoneda}/año</td>
                                <td>{new Intl.NumberFormat().format(props.gastosEstructuraP)}%</td>
                            </tr>
                            <tr>
                                <td><b>RESULTADO OPERATIVO</b></td>
                                <td><b>{new Intl.NumberFormat().format(props.resultadoOperativo)} {props.codigoMoneda}/año</b></td>
                                <td><b>{new Intl.NumberFormat().format(props.resultadoOpP)}%</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h6>RESULTADO OPERATIVO: expresiones por hectárea VT</h6>
                <div className='table-responsive'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">{props.codigoMoneda}/haVT/año</th>
                                <th scope="col">litros leche/haVT/año</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{new Intl.NumberFormat().format(props.resultadoOpHa)} {props.codigoMoneda}/haVT/año</td>
                                <td>{new Intl.NumberFormat().format(props.resultadoOpLeche)} litros leche/haVT/año</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h6>RESULTADO OPERATIVO: expresiones por vaca total</h6>
                <div className='table-responsive'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">{props.codigoMoneda}/vaca/año</th>
                                <th scope="col">litros leche/vaca/año</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{new Intl.NumberFormat().format(props.resultadoOpVT)} {props.codigoMoneda}/vaca/año</td>
                                <td>{new Intl.NumberFormat().format(props.resultadoOpLecheVT)} litros leche/vaca/año</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>)}
        </div>
    )
}

export default ResultadosEconomicos;