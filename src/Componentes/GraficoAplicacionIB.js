import React, { useState, useEffect} from 'react';
import { Tooltip as Comentario } from 'react-tooltip'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function GraficoAplicacionIB(props) {

    const [resultadoOperativo, setResultadoOperativo] = useState(props.resultadoOperativo);
    const [gastoManoDeObra, setGastoManoDeObra] = useState(props.gastoManoDeObra);
    const [gastoReposicion, setGastoReposicion] = useState(props.gastoReposicion);
    const [alimentacionSuministro, setAlimentacionSuministro] = useState(parseFloat(props.gastoAlimentacion) + parseFloat(props.gastoSuministro));
    const [veterinariaRodeo, setVeterinariaRodeo] = useState(parseFloat(props.gastosVeterinaria) + parseFloat(props.gastosRodeo));
    const [alquileres, setAlquileres] = useState(parseFloat(props.alquilerVacas) + parseFloat(props.gastoArrendamiento));
    const [gastosTambo, setGastosTambo] = useState(props.gastosTambo);
    const [gastosMantenimiento, setGastosMantenimiento] = useState(props.gastosMantenimiento);
    const [otrosGastosEstructura, setOtrosGastosEstructura] = useState(parseFloat(props.impuestos) + parseFloat(props.gastosAdministracion) + parseFloat(props.gerencia))
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
            setGastoManoDeObra(props.gastoManoDeObra);
            setGastoReposicion(props.gastoReposicion);
            setAlimentacionSuministro(parseFloat(props.gastoAlimentacion) + parseFloat(props.gastoSuministro));
            setVeterinariaRodeo(parseFloat(props.gastosVeterinaria) + parseFloat(props.gastosRodeo));
            setAlquileres(parseFloat(props.alquilerVacas) + parseFloat(props.gastoArrendamiento));
            setGastosTambo(props.gastosTambo);
            setOtrosGastosEstructura(parseFloat(props.impuestos) + parseFloat(props.gastosAdministracion) + parseFloat(props.gerencia));
            setGastosMantenimiento(props.gastosMantenimiento);
            setUnidad(codigoMoneda);
        }
        if (graficosEnMoneda === false) {
            setResultadoOperativo((parseFloat(props.resultadoOperativo)/parseFloat(props.ingresoBruto)*100).toFixed(1));
            setGastoManoDeObra((parseFloat(props.gastoManoDeObra)/parseFloat(props.ingresoBruto)*100).toFixed(1));
            setGastoReposicion((parseFloat(props.gastoReposicion)/parseFloat(props.ingresoBruto)*100).toFixed(1));
            setAlimentacionSuministro(((parseFloat(props.gastoAlimentacion) + parseFloat(props.gastoSuministro))/parseFloat(props.ingresoBruto)*100).toFixed(1));
            setVeterinariaRodeo(((parseFloat(props.gastosVeterinaria) + parseFloat(props.gastosRodeo))/parseFloat(props.ingresoBruto)*100).toFixed(1));
            setAlquileres(((parseFloat(props.alquilerVacas) + parseFloat(props.gastoArrendamiento))/parseFloat(props.ingresoBruto)*100).toFixed(1));
            setGastosTambo((parseFloat(props.gastosTambo)/parseFloat(props.ingresoBruto)*100).toFixed(1));
            setOtrosGastosEstructura(((parseFloat(props.impuestos) + parseFloat(props.gastosAdministracion) + parseFloat(props.gerencia))/parseFloat(props.ingresoBruto)*100).toFixed(1));
            setGastosMantenimiento((parseFloat(props.gastosMantenimiento)/parseFloat(props.ingresoBruto)*100).toFixed(1));
            setUnidad('% sobre IB');
        }
    }, [graficosEnMoneda, codigoMoneda, props.resultadoOperativo]);

    const data = {
        labels: ["Resultado Operativo", "Mano de obra", "Reposición", "Alimentación+Suministro",
            "Sanidad+Rodeo", "Ordeño", "Mantenimiento", "Alquileres (tierra+vacas)", "Otros gastos estructura"],
        datasets: [{
            label: unidad,
            data: [resultadoOperativo, gastoManoDeObra, gastoReposicion,
            alimentacionSuministro, veterinariaRodeo,
            gastosTambo, gastosMantenimiento,
            alquileres, otrosGastosEstructura],
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