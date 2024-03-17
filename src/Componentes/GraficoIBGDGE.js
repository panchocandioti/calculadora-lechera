import React, { useEffect, useState } from 'react';
import { Tooltip as Comentario } from 'react-tooltip'
import { Chart as ChartJS, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Legend);

function GraficoIBGDGE(props) {

    const [resultadoOperativo, setResultadoOperativo] = useState(props.resultadoOperativo);
    const [gastosDirectos, setGastosDirectos] = useState(props.gastosDirectos);
    const [gastosEstructura, setGastosEstructura] = useState(props.gastosEstructura);
    const [unidad, setUnidad] = useState(props.codigoMoneda);
    const [graficosEnMoneda, setGraficosEnMoneda] = useState(props.graficosEnMoneda);
    const [codigoMoneda, setCodigoMoneda] = useState(props.codigoMoneda);

    useEffect(() => {
        setGraficosEnMoneda(props.graficosEnMoneda);
        setCodigoMoneda(props.codigoMoneda);
    }, [props.graficosEnMoneda, props.codigoMoneda])

    useEffect (() => {
        if (graficosEnMoneda === true) {
            setResultadoOperativo(props.resultadoOperativo);
            setGastosDirectos(props.gastosDirectos);
            setGastosEstructura(props.gastosEstructura);
            setUnidad(codigoMoneda);
        }
        if (props.graficosEnMoneda === false) {
            setResultadoOperativo((parseFloat(props.resultadoOperativo)/parseFloat(props.ingresoBruto)*100).toFixed(1));
            setGastosDirectos((parseFloat(props.gastosDirectos)/parseFloat(props.ingresoBruto)*100).toFixed(1));
            setGastosEstructura((parseFloat(props.gastosEstructura)/parseFloat(props.ingresoBruto)*100).toFixed(1));
            setUnidad('% sobre IB');
        }
    }, [graficosEnMoneda, codigoMoneda])

    const data = {
        labels: ["Resultado Operativo (RO)", "Gastos directos (GD)", "Gastos de estructura (GE)"],
        datasets: [{
            label: unidad,
            data: [resultadoOperativo, gastosDirectos, gastosEstructura],
            backgroundColor: ["green", "blue", "red"],
            borderColor: ["darkgreen", "darkblue", "darkred"],
            borderWidth: [8, 3, 3]
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
            <h4 id="aplicacionIB2">Distribución del IB</h4>
            <Comentario anchorSelect="#aplicacionIB2" place="top" style={{ zIndex: 99 }}>
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