import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function IndicadoresFisicos(props) {

    return (
        <div>
            {props.validacion1 === false && (<div>
                <h3 style={{color: "darkred", backgroundColor: "lightpink"}}>Revisar los valores ingresados</h3>
            </div>)}
            {props.validacion1 && (<div className='resultados'>
            <h4>Resumen indicadores físicos</h4>
            <div className='table-responsive'>
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <td>ENTREGA DIARIA DE LECHE</td>
                            <td>{new Intl.NumberFormat().format(props.lecheVendidaDia)}</td>
                            <td>litros/día</td>
                        </tr>
                        <tr>
                            <td>CARGA ANIMAL</td>
                            <td>{new Intl.NumberFormat().format(props.cargaAnimal)}</td>
                            <td>VT/haVT</td>
                        </tr>
                        <tr>
                            <td>PRODUCCIÓN INDIVIDUAL</td>
                            <td>{new Intl.NumberFormat().format(props.produccionIndividual)}</td>
                            <td>litros/VO/día</td>
                        </tr>
                        <tr>
                            <td>RELACIÓN VO/VT</td>
                            <td>{new Intl.NumberFormat().format(props.relacionVOVT)}</td>
                            <td>%</td>
                        </tr>
                        <tr>
                            <td>PRODUCTIVIDAD LECHE</td>
                            <td>{new Intl.NumberFormat().format(props.productividad)}</td>
                            <td>litros/haVT/año</td>
                        </tr>
                        <tr>
                            <td>CARNE VENDIDA</td>
                            <td>{new Intl.NumberFormat().format(props.kilosCarne)}</td>
                            <td>kilos/año</td>
                        </tr>
                        <tr>
                            <td>PRODUCTIVIDAD CARNE</td>
                            <td>{new Intl.NumberFormat().format(props.productividadCarne)}</td>
                            <td>kilos/haVT/año</td>
                        </tr>
                        <tr>
                            <td>CABEZAS VENDIDAS</td>
                            <td>{new Intl.NumberFormat().format(props.cabezasVendidas)}</td>
                            <td>cabezas/año</td>
                        </tr>
                        <tr>
                            <td>RECHAZO VACAS</td>
                            <td>{new Intl.NumberFormat().format(props.rechazoVacas)}</td>
                            <td>% anual</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            </div>)}
        </div>
    )
}

export default IndicadoresFisicos;