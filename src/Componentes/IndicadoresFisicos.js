import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function IndicadoresFisicos(props) {

    return (
        <div>
            {props.validacion1 === false && (<div>
                <h3 style={{color: "darkred", backgroundColor: "lightpink"}}>Revisar los valores ingresados</h3>
            </div>)}
            {props.validacion1 && (<div className='resultados'>
            <h4>Indicadores físicos</h4>
            <div className='table-responsive'>
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <td>CARGA ANIMAL</td>
                            <td>{props.cargaAnimal}</td>
                            <td>VT/haVT</td>
                        </tr>
                        <tr>
                            <td>PRODUCCIÓN INDIVIDUAL</td>
                            <td>{props.produccionIndividual}</td>
                            <td>litros/VO/día</td>
                        </tr>
                        <tr>
                            <td>RELACIÓN VO/VT</td>
                            <td>{props.relacionVOVT}</td>
                            <td>%</td>
                        </tr>
                        <tr>
                            <td>PRODUCTIVIDAD</td>
                            <td>{props.productividad}</td>
                            <td>litros/haVT/año</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            </div>)}
        </div>
    )
}

export default IndicadoresFisicos;