import React, { useEffect, useState } from 'react'
import GraficoEvolucion from "./GraficoEvolucion"
import Resumen from "./Resumen"

function PruebaPush(props) {

    const [valores1, setValores1] = useState([props.crecimientoCP, props.crecimientoLP]);
    const [valores2, setValores2] = useState([props.crecimientoCP, props.crecimientoLP]);
    const [valores3, setValores3] = useState([props.crecimientoCP, props.crecimientoLP]);
    const [linea1, setLinea1] = useState([]);
    const [linea2, setLinea2] = useState([]);
    const [linea3, setLinea3] = useState([]);
    const [resumeninputs1, setResumeninputs1] = useState(props.resumeninputs);
    const [resumeninputs2, setResumeninputs2] = useState(props.resumeninputs);
    const [resumeninputs3, setResumeninputs3] = useState(props.resumeninputs);
    const [resumenresultados1, setResumenresultados1] = useState(props.resumenresultados);
    const [resumenresultados2, setResumenresultados2] = useState(props.resumenresultados);
    const [resumenresultados3, setResumenresultados3] = useState(props.resumenresultados);
    const [vacas, setVacas] = useState(100);
    const [vacasInicio, setVacasInicio] = useState(100);
    const [validacion, setValidacion] = useState(true);
    const [mostrarResumen, setMostrarResumen] = useState(false);
    const [nombreCaso, setNombreCaso] = useState(props.nombreCaso);
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const ano = fecha.getFullYear();
    const fechaString = dia + '/' + mes + '/' + ano;

    let formatoEnteroPositivo = /^[1-9]\d*$/;

    useEffect(() => {
        setNombreCaso((prevState) => props.nombreCaso);
    }, [props.nombreCaso]);


    const agregarValores1 = () => {
        setValores1((prevState) => [props.crecimientoCP, props.crecimientoLP]);
        setResumeninputs1((prevState) => props.resumeninputs);
        setResumenresultados1((prevState) => props.resumenresultados);
    };

    useEffect(() => {
        setLinea1(() => [parseInt(vacasInicio),
        parseInt(vacasInicio * (1 + valores1[0] / 100)),
        parseInt(vacasInicio * (1 + valores1[0] / 100) * (1 + valores1[1] / 100)),
        parseInt(vacasInicio * (1 + valores1[0] / 100) * (1 + valores1[1] / 100) ** 2),
        parseInt(vacasInicio * (1 + valores1[0] / 100) * (1 + valores1[1] / 100) ** 3),
        parseInt(vacasInicio * (1 + valores1[0] / 100) * (1 + valores1[1] / 100) ** 4)]);
    }, [valores1, vacasInicio]);

    const agregarValores2 = () => {
        setValores2((prevState) => [props.crecimientoCP, props.crecimientoLP]);
        setResumeninputs2((prevState) => props.resumeninputs);
        setResumenresultados2((prevState) => props.resumenresultados);
    };

    useEffect(() => {
        setLinea2(() => [parseInt(vacasInicio),
        parseInt(vacasInicio * (1 + valores2[0] / 100)),
        parseInt(vacasInicio * (1 + valores2[0] / 100) * (1 + valores2[1] / 100)),
        parseInt(vacasInicio * (1 + valores2[0] / 100) * (1 + valores2[1] / 100) ** 2),
        parseInt(vacasInicio * (1 + valores2[0] / 100) * (1 + valores2[1] / 100) ** 3),
        parseInt(vacasInicio * (1 + valores2[0] / 100) * (1 + valores2[1] / 100) ** 4)]);
    }, [valores2, vacasInicio]);

    const agregarValores3 = () => {
        setValores3((prevState) => [props.crecimientoCP, props.crecimientoLP])
        setResumeninputs3((prevState) => props.resumeninputs);
        setResumenresultados3((prevState) => props.resumenresultados);
    };

    useEffect(() => {
        setLinea3(() => [parseInt(vacasInicio),
        parseInt(vacasInicio * (1 + valores3[0] / 100)),
        parseInt(vacasInicio * (1 + valores3[0] / 100) * (1 + valores3[1] / 100)),
        parseInt(vacasInicio * (1 + valores3[0] / 100) * (1 + valores3[1] / 100) ** 2),
        parseInt(vacasInicio * (1 + valores3[0] / 100) * (1 + valores3[1] / 100) ** 3),
        parseInt(vacasInicio * (1 + valores3[0] / 100) * (1 + valores3[1] / 100) ** 4)]);
    }, [valores3, vacasInicio]);

    const handleVacasChange = (e) => {
        setVacas(e.target.value);
    }

    const handleClickVacas = () => {
        if (!formatoEnteroPositivo.test(vacas)) {
            setValidacion(false);
        } else {
            setValidacion(true);
            setVacasInicio(vacas);
        }
    }

    const handleMostrarResumen = () => {
        setMostrarResumen(!mostrarResumen);
    }

    return (
        <div className='opciones resultados'>
            <h4>EVOLUCIÓN COMPARADA</h4>
            <div className='subseccion'>
                <label>Vacas inicio: </label>
                <input type='number' value={vacas} onChange={handleVacasChange} style={{ width: "65px", marginLeft: "4px" }} />
                <button className="button" onClick={handleClickVacas}>Cambiar</button>
            </div>
            {validacion === false && (<div>
                <h3 style={{ color: "darkred", backgroundColor: "lightpink" }}>Revisar el valor ingresado</h3>
            </div>)}
            {validacion && (<div>
                <div className='subseccion'>
                    <button className="button" onClick={() => agregarValores1()}>Estado 1</button>
                    <p>CRECIMIENTO - CP: {(valores1[0]).toFixed(1)}% | LP: {(valores1[1]).toFixed(1)}%</p>
                </div>
                <div className='subseccion'>
                    <button className="button" onClick={() => agregarValores2()}>Estado 2</button>
                    <p>CRECIMIENTO - CP: {(valores2[0]).toFixed(1)}% | LP: {(valores2[1]).toFixed(1)}%</p>
                </div>
                <div className='subseccion'>
                    <button className="button" onClick={() => agregarValores3()}>Estado 3</button>
                    <p>CRECIMIENTO - CP: {(valores3[0]).toFixed(1)}% | LP: {(valores3[1]).toFixed(1)}%</p>
                </div>
                <GraficoEvolucion nombreCaso={nombreCaso} fechaString={fechaString} linea1={linea1} linea2={linea2} linea3={linea3} />
                <div className='subseccion'>
                    <button className="button" onClick={() => handleMostrarResumen()}>
                        {mostrarResumen === true ? "Ocultar resumen" : "Mostrar resumen"}
                    </button>
                </div>
                {mostrarResumen === true && (<Resumen nombreCaso={nombreCaso} fechaString={fechaString} resumeninputs1={resumeninputs1} resumeninputs2={resumeninputs2}
                    resumeninputs3={resumeninputs3} resumenresultados1={resumenresultados1}
                    resumenresultados2={resumenresultados2} resumenresultados3={resumenresultados3} />)}
            </div>)
            }
        </div>)
}

export default PruebaPush