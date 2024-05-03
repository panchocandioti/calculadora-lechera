import React, { useState } from 'react';
import ImagotipoBlanco from "../Media/Imagotipo BLANCO.png";
import LogoSaltoAgro from "../Media/LogoSaltoAgro.png";
import LogoUNLFCA from "../Media/logo-UNL-FCA.png";
import IngresoDatos from './IngresoDatos';

function Presentacion() {

    const [mostrarInstrucciones, setMostrarInstrucciones] = useState(true);
    const [comenzar, setComenzar] = useState(false);
    const [mostrarGeneralidades, setMostrarGeneralidades] = useState(false);
    const [mostrarResultados, setMostrarResultados] = useState(false);
    const [mostrarSecuencia, setMostrarSecuencia] = useState(false);
    const [mostrarTerminos, setMostrarTerminos] = useState(false);
    const [mostrarRegistro, setMostrarRegistro] = useState(false);


    const manejarOnClick1 = () => {
        setMostrarInstrucciones(!mostrarInstrucciones);
    };

    const manejarOnclick2 = () => {
        setMostrarInstrucciones(false);
        setComenzar(true);
    };

    const manejarOnClick3 = () => {
        setMostrarGeneralidades(!mostrarGeneralidades);
    };

    const manejarOnClick4 = () => {
        setMostrarResultados(!mostrarResultados);
    };

    const manejarOnClick5 = () => {
        setMostrarSecuencia(!mostrarSecuencia);
    };

    const manejarOnClick6 = () => {
        setMostrarTerminos(!mostrarTerminos);
    };

    const manejarOnClick7 = () => {
        setMostrarRegistro(!mostrarRegistro);
    };

    return (
        <div>
            <header className="App-header">
                <a href="https://milecheria.ar" target="_blank" rel="noreferrer"><img src={ImagotipoBlanco} id="MiLecheria" alt='LogoMiLecheria.ar'></img></a>
                <h1><b><i>Mi</i></b> CALCULADORA LECHERA</h1>
            </header>
            {mostrarInstrucciones && (<div className="seccion">
                <h2>Instrucciones:</h2>
                <div id="instrucciones">
                    <button onClick={manejarOnClick3} className='mostrar'>
                        {mostrarGeneralidades === true ? "Generalidades y objetivos ˄ " : "Generalidades y objetivos ˅ "}
                    </button>
                    {mostrarGeneralidades && (<div className='contenido-instrucciones'>
                        <p>La producción de leche es una actividad compleja y cambiante. Debido a la gran cantidad de variables que involucra,
                            el cálculo de resultados económicos puede resultar difícil. El análisis de los factores determinantes del resultado y
                            de su importancia relativa es, por consiguiente, más dificultoso aún.</p>
                        <p><b>Objetivo de esta aplicación:</b></p>
                        <p><b>Estimar el resultado económico de un establecimiento lechero en forma sencilla y rápida, permitiendo además el
                            análisis de los distintos factores que lo determinan.</b></p>
                        <p>La aplicación puede utilizarse para:</p>
                        <ul>
                            <li>Evaluar situaciones desconocidas o hipotéticas</li>
                            <li>Diagnosticar situaciones en marcha</li>
                            <li>Encontrar rápido los rubros de mayor impacto en el resultado</li>
                            <li>Evaluar situaciones alternativas</li>
                            <li>Uso didáctico en general</li>
                        </ul>
                        <p>El usuario deberá ingresar parámetros relativamente simples, divididos en seis pasos:</p>
                        <ol>
                            <li>Indicadores físicos</li>
                            <li>Ingresos brutos</li>
                            <li>Gasto en mano de obra</li>
                            <li>Gasto de reposición</li>
                            <li>Otros gastos directos</li>
                            <li>Gastos de estructura</li>
                        </ol>
                        <p>Durante la carga, para cada input podrá consultarse una definición simplificada o un breve
                            mensaje de ayuda. Los valores ingresados podrán cambiarse en cualquier momento.</p>
                        <p>Es importante entender que esta aplicación está concebida como una calculadora
                            (facilita y ordena el cálculo y la interpretación de resultados). No es un modelo de simulación
                            (no simula procesos). La calidad de la información ingresada por el usuario es su entera
                            responsabilidad y condiciona la calidad de los resultados obtenidos.</p>
                    </div>)}
                    <br></br>
                    <button onClick={manejarOnClick4} className='mostrar'>
                        {mostrarResultados === true ? "Resultados que se obtienen ˄ " : "Resultados que se obtienen ˅ "}
                    </button>
                    {mostrarResultados && (<div className='contenido-instrucciones'>
                        <p>Parciales:</p>
                        <ul>
                            <li>Resumen de indicadores físicos</li>
                            <li>Resumen de ingresos brutos</li>
                            <li>Resumen de mano de obra</li>
                            <li>Resumen de reposición</li>
                            <li>Resumen de otros gastos directos</li>
                            <li>Resumen de gastos de estructura</li>
                        </ul>
                        <p>Finales:</p>
                        <ul>
                            <li>Costo de producción – Análisis por litro</li>
                            <li>Resultado operativo – Análisis por litro</li>
                            <li>Resultado operativo – Montos anuales y porcentuales del Ingreso Bruto</li>
                            <li>Otras expresiones de resultado operativo</li>
                            <li>Gráficos de distribución del Ingreso Bruto</li>
                        </ul>
                        <p>Los resultados, parciales y finales, podrán visualizarse expresados en distintas unidades,
                            para facilitar el análisis (anuales, mensuales, % del IB, % del IB Leche, por litro,
                            por hectárea, por vaca), según su naturaleza.</p>
                        <p>A su vez, todas las expresiones en dinero podrán visualizarse en dos monedas diferentes,
                            a elección del usuario.</p>
                        <p>Se podrá descargar un reporte en PDF con todos los resultados. El reporte se emite en la
                            moneda activa al momento de generarlo. Si se realizan cambios posteriores (incluyendo la moneda
                            activa) pueden volver a generarse nuevos reportes.</p>
                    </div>)}
                    <br></br>
                    <button onClick={manejarOnClick5} className='mostrar'>
                        {mostrarSecuencia === true ? "Secuencia de trabajo sugerida ˄ " : "Secuencia de trabajo sugerida ˅ "}
                    </button>
                    {mostrarSecuencia && (<div className='contenido-instrucciones'>
                        <ol>
                            <li>Diagnóstico (situación inicial)</li>
                            <li>Generación de reporte PDF inicial</li>
                            <li>Detección de puntos críticos</li>
                            <li>¿Qué pasaría si...? (pruebas)</li>
                            <li>Selección de alternativa exitosa</li>
                            <li>Análisis de los resultados y ajustes</li>
                            <li>Generación de reporte PDF final</li>
                        </ol>
                    </div>)}
                    <br></br>
                    <button onClick={manejarOnClick6} className='mostrar'>
                        {mostrarTerminos === true ? "Términos de uso ˄ " : "Términos de uso ˅ "}
                    </button>
                    {mostrarTerminos && (<div className='contenido-instrucciones'>
                        <p>Debido a la gran cantidad de variables involucradas en la selección de datos de entrada, la interpretación de resultados y las aplicaciones de esta herramienta en general, el usuario asume toda la responsabilidad por su uso.</p>
                        <p>El uso de esta aplicación es libre, gratuito e irrestricto para productores lecheros y estudiantes.</p>
                        <p>Su utilización para cualquier fin por parte de investigadores, desarrolladores, profesionales agropecuarios y cualquier otro usuario no especificado aquí, debe hacerse citando la fuente y respetando los derechos de autor.</p>
                    </div>)}
                    <br></br>
                    <button onClick={manejarOnClick7} className='mostrar'>
                        {mostrarRegistro === true ? "REGISTRARSE (opcional) ˄ " : "REGISTRARSE (opcional) ˅ "}
                    </button>
                    {mostrarRegistro && (<div className='contenido-instrucciones'>
                        <p>Regístrese para recibir notificaciones de actualizaciones y novedades de <a href="https://milecheria.ar" target="_blank" rel="noreferrer"><b>MiLecheria.ar</b></a> haciendo click en el enlace de abajo. El formulario de registro se abrirá en otra ventana. Luego de registrarse regrese a esta ventana para continuar. <a href='https://forms.gle/Q12JUazDxuxbRSP7A' target="_blank" rel="noopener noreferrer">Ir al formulario de registro.</a></p>

                    </div>)}
                </div>
            </div>)}
            <div>
                {comenzar === true && (<button className="button" onClick={manejarOnClick1}>
                    {mostrarInstrucciones === true ? "Ocultar instrucciones" : "Mostrar instrucciones"}
                </button>)}
                {comenzar === false && (<button className="comenzar" onClick={manejarOnclick2}>
                    Aceptar términos y <b>comenzar</b>
                </button>)}
            </div>
            {comenzar && (<div>
                <IngresoDatos />
            </div>)}
            <footer className='footer'>
                <div>
                    <p>Convenio Marco de Cooperación Técnico-Científica:</p>
                    <p><b>Universidad Nacional del Litoral - SALTO AGRO S.S.</b></p>
                    <hr></hr>
                    <p>Desarrolladores:</p>
                    <div className='containerLogos'>
                        <div className='desarrolladores'>
                            <p><b><a href='https://www.linkedin.com/in/francisco-candioti-0b167834/' target="_blank" rel="noopener noreferrer">Ing. Agr. EPL Francisco Candioti</a></b></p>
                        </div>
                        <div className='desarrolladores'>
                            <p><b><a href='https://ar.linkedin.com/in/javier-baudracco-b97aab15' target="_blank" rel="noopener noreferrer">Dr. Javier Baudracco</a></b></p>
                        </div>
                    </div>
                </div>
                <div className='containerLogos'>
                    <div className='logos'>
                        <img src={LogoSaltoAgro} className='logo' alt='LogoSalto'></img>
                    </div>
                    <div className='logos'>
                        <img src={LogoUNLFCA} className='logo' alt='LogoUNLFCA'></img>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Presentacion