import React from 'react';
import { Tooltip as Comentario } from 'react-tooltip'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function GraficoAplicacionIB(props) {

    let alimentacionSuministro = parseFloat(props.gastoAlimentacion) + parseFloat(props.gastoSuministro);
    let veterinariaRodeo = parseFloat(props.gastosVeterinaria) + parseFloat(props.gastosRodeo);
    let otrosGastosEstructura = parseFloat(props.gastosAdministracion) + parseFloat(props.impuestos) + parseFloat(props.gerencia);

    const data = {
        labels: ["Resultado Operativo", "Mano de obra", "Reposición", "Alimentación+Suministro",
            "Sanidad+Rodeo", "Ordeño", "Mantenimiento", "Alquileres (tierra+vacas)", "Otros gastos de estructura"],
        datasets: [{
            label: props.codigoMoneda,
            data: [props.resultadoOperativo, props.gastoManoDeObra, props.gastoReposicion,
            alimentacionSuministro, veterinariaRodeo,
            props.gastosTambo, props.gastosMantenimiento,
            props.gastoArrendamiento, otrosGastosEstructura],
            backgroundColor: ["rgb(67, 138, 67)", "rgb(208, 208, 249)", "rgb(135, 135, 245)", "rgb(78, 78, 249)",
                "rgb(38, 38, 248)", "rgb(4, 4, 137)", "rgb(242, 190, 190)", "rgb(243, 112, 112)",
                "rgb(184, 19, 19)"],
            borderColor: ["darkgreen", "darkblue", "darkblue", "darkblue", "darkblue", "darkblue", "darkred", "darkred", "darkred"],
            borderWidth: [7, 2, 2, 2, 2, 2, 2, 2, 2],
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
                <p>Las secciones en tonos de azul y rojo representan</p>
                <p>los diferentes grupos de gastos</p>
                <p>Las sección verde indica lo que queda como RESULTADO OPERATIVO</p>
            </Comentario>
            <div className='grafico'>
                <div style={{ position: "relative", minHeight: "340px", width: "75vw" }}>
                    {props.validacion6 === true && (<Pie data={data} options={options}></Pie>)}
                </div>
            </div>
        </div>
    )
}

export default GraficoAplicacionIB;