import React from 'react';
import { Tooltip as Comentario } from 'react-tooltip'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function GraficoIBGDGE(props) {

    const data = {
        labels: ["Resultado Operativo (RO)", "Gastos directos (GD)", "Gastos de estructura (GE)"],
        datasets: [{
            label: props.codigoMoneda,
            data: [props.resultadoOperativo, props.gastosDirectos, props.gastosEstructura],
            backgroundColor: ["green", "blue", "red"],
            borderColor: ["darkgreen", "darkblue", "darkred"],
            borderWidth: [7, 2, 2],
        }]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    boxWidth: 12,
                    padding: 12,
                    font: {
                        size: 12
                    },
                },
            },
        },
    }

    return (
        <div className='resultados'>
            <h4 id="aplicacionIB">Distribución del IB</h4>
            <Comentario anchorSelect="#aplicacionIB" place="top" style={{ zIndex: 99 }}>
                <p><b>Gráfico: Distribución del IB</b></p>
                <p>La superficie total del círculo representa al total de ingresos (IB)</p>
                <p>La sección azul representa los gastos directos (GD)</p>
                <p>La sección roja representa los gastos de estructura (GE)</p>
                <p>Las sección verde indica lo que queda como RESULTADO OPERATIVO (RO)</p>
            </Comentario>
            <div className='grafico'>
                <div style={{ position: "relative", minHeight: "340px", width: "75vw" }}>
                    {props.validacion6 === true && (<Pie data={data} options={options}></Pie>)}
                </div>
            </div>
        </div>
    )
}

export default GraficoIBGDGE;