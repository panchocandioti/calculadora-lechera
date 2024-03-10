import React, { useState } from 'react';
import ImagotipoBlanco from "../Media/Imagotipo BLANCO.png";
import LogoSaltoAgro from "../Media/LogoSaltoAgro.png";
import LogoFCA from "../Media/FCA-UNL-Logo.jpg";
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
                <img src={ImagotipoBlanco} id="MiLecheria" alt='LogoMiLecheria.ar'></img>
                <h1><b><i>Mi</i></b> CALCULADORA LECHERA</h1>
            </header>
            {mostrarInstrucciones && (<div className="seccion">
                <h2>Instrucciones:</h2>
                <div id="instrucciones">
                    <button onClick={manejarOnClick3} className='mostrar'>
                        {mostrarGeneralidades === true ? "Generalidades y objetivos ˄ " : "Generalidades y objetivos ˅ "}
                    </button>
                    {mostrarGeneralidades && (<div className='contenido-instrucciones'>
                        <p>INSTRUCCIONES</p>
                    </div>)}
                    <br></br>
                    <button onClick={manejarOnClick4} className='mostrar'>
                        {mostrarResultados === true ? "Resultados que se obtienen ˄ " : "Resultados que se obtienen ˅ "}
                    </button>
                    {mostrarResultados && (<div className='contenido-instrucciones'>
                        <p>
                            RESULTADOS
                        </p>
                    </div>)}
                    <br></br>
                    <button onClick={manejarOnClick5} className='mostrar'>
                        {mostrarSecuencia === true ? "Secuencia de trabajo sugerida ˄ " : "Secuencia de trabajo sugerida ˅ "}
                    </button>
                    {mostrarSecuencia && (<div className='contenido-instrucciones'>
                        <p>
                            SECUENCIA
                        </p>
                    </div>)}
                    <br></br>
                    <button onClick={manejarOnClick6} className='mostrar'>
                        {mostrarTerminos === true ? "Términos de uso ˄ " : "Términos de uso ˅ "}
                    </button>
                    {mostrarTerminos && (<div className='contenido-instrucciones'>
                        <p>Debido a la gran cantidad de variables involucradas en la selección de datos de entrada, la interpretación de resultados y las aplicaciones de esta herramienta en general, el usuario asume toda la responsabilidad por su uso.</p>
                        <p>El uso de esta aplicación es libre, gratuito e irrestricto para productores lecheros y estudiantes.</p>
                        <p>Su utilización para cualquier fin por parte de investigadores, desarrolladores, profesionales agropecuarios y cualquier otro usuario no especificado aquí, debe hacerse citando la fuente y respetando los derechos del autor.</p>
                    </div>)}
                    <br></br>
                    <button onClick={manejarOnClick7} className='mostrar'>
                        {mostrarRegistro === true ? "REGISTRARSE (opcional) ˄ " : "REGISTRARSE (opcional) ˅ "}
                    </button>
                    {mostrarRegistro && (<div className='contenido-instrucciones'>
                        <p>Regístrese para recibir notificaciones de actualizaciones y novedades de <b>MiLecheria.ar</b> haciendo click en el enlace. El formulario de registro se abrirá en otra ventana. Luego de registrarse regrese a esta ventana para continuar. <a href='https://forms.gle/Q12JUazDxuxbRSP7A' target="_blank" rel="noopener noreferrer">Ir al formulario de registro.</a></p>

                    </div>)}
                </div>
            </div>)}
            <div>
                {comenzar === true && (<button className="button" onClick={manejarOnClick1}>
                    {mostrarInstrucciones === true ? "Ocultar instrucciones" : "Mostrar instrucciones"}
                </button>)}
                {comenzar === false && (<button className="button" onClick={manejarOnclick2}>
                    Aceptar términos y <b>comenzar</b>
                </button>)}
            </div>
            {comenzar && (<div>
                <IngresoDatos />
            </div>)}
            <footer className='footer'>
                <div>
                    <p><b>Desarrolladores:</b></p>
                    <p><b><a href='https://www.linkedin.com/in/francisco-candioti-0b167834/' target="_blank" rel="noopener noreferrer">Ing. Agr. EPL Francisco Candioti</a></b></p>
                    <p><b><a href='https://ar.linkedin.com/in/javier-baudracco-b97aab15' target="_blank" rel="noopener noreferrer">Dr. Javier Baudracco</a></b></p>
                </div>
                <div className='containerLogos'>
                    <img src={LogoSaltoAgro} className='logo' alt='LogoSalto'></img>
                    <img src={LogoFCA} className='logo' alt='LogoFCA'></img>
                </div>
            </footer>
        </div>
    )
}

export default Presentacion