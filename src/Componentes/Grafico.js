import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Grafico(props) {

    const bajas = (props.bajas);
    const reposicionCP = (props.reposicionCP).toFixed(1);
    const reposicionLP = (props.reposicionLP).toFixed(1);

    const data = {
        labels: ["Bajas (%)", "Reposición CP (%)", "Reposición LP (%)"],
        datasets: [{
            label: "",
            data: [bajas, reposicionCP, reposicionLP],
            backgroundColor: ["red", "darkblue", "blue"],
            borderColor: "black",
            borderWidth: 2,
        }]
    }

    const options = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
    }

    return (
        <div className='resultados'>
            <div className='grafico'>
                <div style={{ position: "relative", height: "15vh", minWidth: "60vw" }}>
                    {props.validacion1 === true && props.validacion2 === true && (<Bar data={data} options={options}></Bar>)}
                </div>
            </div>
        </div>
    )
}

export default Grafico