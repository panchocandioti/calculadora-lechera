import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function ManoDeObra(props) {

    let gastoManoDeObraMes = (parseFloat(props.gastoManoDeObra)/12).toFixed(0);
    let gastoPorOperarioMes = (parseFloat(props.gastoPorOperario)/12).toFixed(0);
    let gastoManoDeObraP = (parseFloat(props.gastoManoDeObraP)).toFixed(1);


    return (
        <div>
            {props.validacion3 === false && (<div>
                <h3 style={{ color: "darkred", backgroundColor: "lightpink" }}>Revisar los valores ingresados</h3>
            </div>)}
            {props.validacion3 && (<div className='resultados'>
                <h4>Resumen mano de obra</h4>
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
                                <td>GASTO MANO DE OBRA</td>
                                <td>{new Intl.NumberFormat().format(props.gastoManoDeObra)} {props.codigoMoneda}/año</td>
                                <td>{new Intl.NumberFormat().format(gastoManoDeObraMes)} {props.codigoMoneda}/mes</td>
                                <td>{new Intl.NumberFormat().format(gastoManoDeObraP)}%</td>
                            </tr>
                            <tr>
                                <td>GASTO MEDIO POR OPERARIO</td>
                                <td>{new Intl.NumberFormat().format(props.gastoPorOperario)} {props.codigoMoneda}/año</td>
                                <td>{new Intl.NumberFormat().format(gastoPorOperarioMes)} {props.codigoMoneda}/mes</td>
                                <td>{new Intl.NumberFormat().format(props.gastoPorOperarioP)}%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>)}
        </div>
    )
}

export default ManoDeObra;