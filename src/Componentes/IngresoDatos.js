import React, { useState, useEffect } from 'react'
import BotonReset from './BotonReset'
import { Tooltip } from 'react-tooltip'
import IndicadoresFisicos from './IndicadoresFisicos'
import divisas from './Divisas'

function IngresoDatos() {

    //Datos que se ingresan
    const [vacasOrdeno, setVacasOrdeno] = useState('');
    const [vacasSecas, setVacasSecas] = useState('');
    const [superficieVT, setSuperficieVT] = useState('');
    const [lecheVendida, setLecheVendida] = useState('');
    const [mostrarSeccion2, setMostrarSeccion2] = useState(false);

    const [currency, setCurrency] = useState("Peso argentino");
    const [codigoMoneda, setCodigoMoneda] = useState("ARS");
    const datosDropDown1 = divisas.map(item => item.currency);


    const [mortandadTerneros, setMortandadTerneros] = useState('');
    const [mortandadRecria, setMortandadRecria] = useState('');
    const [rechazoRecria, setrechazoRecria] = useState('');
    const [prenezVaquillonas, setPrenezVaquillonas] = useState('');
    const [abortos, setAbortos] = useState('');
    const [edadPartoAnterior, setEdadPartoAnterior] = useState('');
    const [edadPartoActual, setEdadPartoActual] = useState('');
    const [hembrasPrimiparas, setHembrasPrimiparas] = useState('');
    const [hembrasMultiparas, setHembrasMultiparas] = useState('');
    const [mostrarSeccion3, setMostrarSeccion3] = useState(false);
    const [nombreCaso, setNombreCaso] = useState('');

    //Cálculos sección 1
    const cargaAnimal = ((parseFloat(vacasOrdeno) + parseFloat(vacasSecas)) / parseFloat(superficieVT)).toFixed(2);
    const produccionIndividual = ((parseFloat(lecheVendida) / 365) / parseFloat(vacasOrdeno)).toFixed(1);
    const relacionVOVT = ((parseFloat(vacasOrdeno) / (parseFloat(vacasOrdeno) + parseFloat(vacasSecas)) * 100)).toFixed(1);
    const productividad = (parseFloat(lecheVendida) / parseFloat(superficieVT)).toFixed(0);


    /*
    //Cálculos sección 2
    let hembrasProporcion = 0.5;
    const vacasAdultas = 100;
    const vaqOrigen1 = vacasAdultas * (1 - bajas / 100) * hembrasProporcion * (1 - ((parseFloat(mortandadTerneros) + parseFloat(mortandadRecria) + parseFloat(rechazoRecria) + parseFloat(abortos)) / 100));
    const coefSup = (parseInt(edadPartoAnterior) - parseInt(edadPartoActual)) / 12;
    const ternerasVT = vacasAdultas * (1 - bajas / 100) * (365 / parseInt(intervaloEntrePartos)) * parseFloat(hembrasMultiparas) / 100 * (1 - ((parseFloat(mortandadTerneros) + parseFloat(abortos)) / 100));
    const ternerasVq = vaqOrigen1 * (1 - (parseFloat(mortandadRecria) + parseFloat(rechazoRecria)) / 100) * parseFloat(prenezVaquillonas) / 100 * parseFloat(hembrasPrimiparas) / 100 * (1 - ((parseFloat(mortandadTerneros) + parseFloat(abortos)) / 100))
    const ternerasTotales = ternerasVT + ternerasVq;
    hembrasProporcion = (ternerasVT + ternerasVq) / (ternerasVT / (hembrasMultiparas / 100) + ternerasVq / (hembrasPrimiparas / 100));
    const hembrasLP = ternerasTotales * parseFloat(prenezVaquillonas) / 100 * (1 - (parseFloat(mortandadRecria) + parseFloat(rechazoRecria)) / 100);
    const hembrasCP = ternerasTotales * (1 + coefSup) * parseFloat(prenezVaquillonas) / 100 * (1 - (parseFloat(mortandadRecria) + parseFloat(rechazoRecria)) / 100);
    const demandaHembras = vacasAdultas * (bajas / 100);
    const crecimientoCabezasLP = hembrasLP - demandaHembras;
    const crecimientoCabezasCP = hembrasCP - demandaHembras;
    const reposicionLP = hembrasLP / vacasAdultas * 100;
    const reposicionCP = hembrasCP / vacasAdultas * 100;
    const crecimientoLP = (crecimientoCabezasLP / vacasAdultas * 100);
    const crecimientoCP = (crecimientoCabezasCP / vacasAdultas * 100);

    const resumeninputs = [intervaloEntrePartos, rechazoAdultas, mortandadAdultas, mortandadTerneros,
        mortandadRecria, rechazoRecria, prenezVaquillonas, abortos, edadPartoAnterior,
        edadPartoActual, hembrasPrimiparas, hembrasMultiparas];

    const resumenresultados = [bajas, vidaUtil, hembrasProporcion, reposicionCP, reposicionLP,
        crecimientoCP, crecimientoLP];
        */

    //Datos para validaciones
    let formatoEnteroPositivo = /^[1-9]\d*$/;
    let formatoPorcentaje = /^(100(\.0{1,2})?|[1-9]\d?(\.\d{1,2})?|0(\.[1-9]\d?)?|0)$/;
    let formatoFloatPositivo = /^\d+(?:.\d+)?$/
    let validacion1 = true;
    let validacion2 = true;

    //Validación 1
    if (!formatoEnteroPositivo.test(vacasOrdeno) || !formatoEnteroPositivo.test(vacasSecas) ||
        !formatoFloatPositivo.test(superficieVT) || !formatoEnteroPositivo.test(lecheVendida)) {
        validacion1 = false;
    }

    //Validación 2
    if (!formatoPorcentaje.test(edadPartoAnterior) || edadPartoAnterior < 12 || edadPartoAnterior > 48) {
        validacion2 = false;
    }

    if (!formatoPorcentaje.test(edadPartoActual) || edadPartoActual < 12 || edadPartoActual > 48) {
        validacion2 = false;
    }

    if (!formatoPorcentaje.test(mortandadTerneros) || !formatoPorcentaje.test(mortandadRecria) ||
        !formatoPorcentaje.test(rechazoRecria) || !formatoPorcentaje.test(prenezVaquillonas) ||
        !formatoPorcentaje.test(abortos) || !formatoPorcentaje.test(hembrasPrimiparas) ||
        !formatoPorcentaje.test(hembrasMultiparas)) {
        validacion2 = false;
    }

    if ((parseFloat(mortandadRecria) + parseFloat(rechazoRecria) > 100)) {
        validacion2 = false;
    }

    //Sección 1 - Cálculo de indicadores físicos

    const handleNombreCasoChange = (e) => {
        setNombreCaso(e.target.value);
    };

    const handleVacasOrdenoChange = (e) => {
        setVacasOrdeno(e.target.value);
    };

    const handleVacasSecasChange = (e) => {
        setVacasSecas(e.target.value);
    };

    const handleSuperficieVTChange = (e) => {
        setSuperficieVT(e.target.value);
    };

    const handleLecheVendidaChange = (e) => {
        setLecheVendida(e.target.value);
    };

    const handleClick1 = () => {
        if (validacion1) {
            setMostrarSeccion2(true);
        }
    };

    //Sección 2 - Cálculo de los ingresos anuales

    const handleSelectChange = (event) => {
        const selectedCurrency = event.target.value;
        setCurrency(selectedCurrency);

    };

    useEffect(() => {
        const elementoEncontrado = divisas.find(elemento => elemento.currency === currency);
        setCodigoMoneda(prevstate => elementoEncontrado.code);
    }, [currency]);

    const handleMortandadTernerosChange = (e) => {
        setMortandadTerneros(e.target.value);
    };

    const handleMortandadRecriaChange = (e) => {
        setMortandadRecria(e.target.value);
    };

    const handlerechazoRecriaChange = (e) => {
        setrechazoRecria(e.target.value);
    };

    const handlePrenezVaquillonasChange = (e) => {
        setPrenezVaquillonas(e.target.value);
    };

    const handleAbortosChange = (e) => {
        setAbortos(e.target.value);
    };

    const handleEdadPartoAnteriorChange = (e) => {
        setEdadPartoAnterior(e.target.value);
    };

    const handleEdadPartoActualChange = (e) => {
        setEdadPartoActual(e.target.value);
    };

    const handleHembrasPrimiparasChange = (e) => {
        setHembrasPrimiparas(e.target.value);
    };

    const handleHembrasMultiparasChange = (e) => {
        setHembrasMultiparas(e.target.value);
    };

    const handleClick2 = () => {
        if (validacion2) {
            setMostrarSeccion3(true);
        }
    };

    return (
        <div>
            <div className='seccion'>
                <h3>Nombre de la simulación:</h3>
                <form>
                    <div className='seccionFormulario'>
                        <label id="nombreCaso">Denominación del caso (opcional): </label>
                        <input type='text' value={nombreCaso} onChange={handleNombreCasoChange} placeholder='Ingresar nombre' />
                        <Tooltip anchorSelect="#nombreCaso" place="top">
                            <p><b>Nombre del caso de estudio:</b></p>
                            <p>Identificación de la simulación</p>
                            <p>(nombre de la empresa, establecimiento, propietario, etc.)</p>
                            <p>Este nombre aparecerá encabezando los reportes PDF</p>
                        </Tooltip>
                    </div>
                </form>
            </div>
            <div className='seccion'>
                <h3>Cálculo de indicadores físicos:</h3>
                <form>
                    <div className='seccionFormulario'>
                        <label id="vacasOrdeno">Vacas en ordeño (cantidad): </label>
                        <input type='number' value={vacasOrdeno} onChange={handleVacasOrdenoChange} placeholder='Ingresar cantidad de vacas en ordeño' />
                        <Tooltip anchorSelect="#vacasOrdeno" place="top">
                            <p><b>Vacas en ordeño:</b></p>
                            <p>Número promedio anual de vacas en ordeño</p>
                            <p>- No ingresar decimales - </p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="vacasSecas">Vacas secas (cantidad): </label>
                        <input type='number' value={vacasSecas} onChange={handleVacasSecasChange} placeholder='Ingresar cantidad de vacas secas' />
                        <Tooltip anchorSelect="#vacasSecas" place="top">
                            <p><b>Vacas secas:</b></p>
                            <p>Número promedio anual de vacas secas</p>
                            <p>- No ingresar decimales - </p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="superficieVT">Superficie vaca total (hectáreas): </label>
                        <input type='number' step="0.01" value={superficieVT} onChange={handleSuperficieVTChange} placeholder='Ingresar cantidad de hectáreas' />
                        <Tooltip anchorSelect="#superficieVT" place="top">
                            <p><b>Superficie vaca total:</b></p>
                            <p>Hectáreas destinadas a vacas en ordeño y secas</p>
                            <p>No incluye superficie de categorías jóvenes</p>
                            <p>No incluye superficie de otras actividades</p>
                            <p>- Admite hasta dos decimales -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="lecheVendida">Leche vendida (litros/año): </label>
                        <input type='number' value={lecheVendida} onChange={handleLecheVendidaChange} placeholder='Ingresar cantidad de litros/año' />
                        <Tooltip anchorSelect="#lecheVendida" place="top">
                            <p><b>Leche vendida:</b></p>
                            <p>Toda la leche producida con valor económico</p>
                            <p>No incluye leche de descarte</p>
                            <p>No incluye leche para crianza de terneros</p>
                            <p>- No ingresar decimales -</p>
                        </Tooltip>
                    </div>
                </form>
                {mostrarSeccion2 === false && (<div>
                    <button onClick={handleClick1}>Calcular</button>
                    <BotonReset />
                </div>)}
                {mostrarSeccion2 && (<div>
                    <IndicadoresFisicos validacion1={validacion1} cargaAnimal={cargaAnimal} produccionIndividual={produccionIndividual} relacionVOVT={relacionVOVT} productividad={productividad} />
                </div>)}
            </div>
            {mostrarSeccion2 && (<div className='seccion'>
                <h3>Cálculo de ingresos brutos:</h3>
                <div className='seccionFormulario'>
                    <label htmlFor="opcionesDropdown">Seleccione la moneda de trabajo: </label>
                    <select id="opcionesDropdown" value={currency} onChange={handleSelectChange}>
                        <option value="currency">Selecciona una opción</option>
                        {datosDropDown1.map((opcion) => (
                            <option value={opcion}>
                                {opcion}
                            </option>
                        ))}
                    </select>
                </div>
                <h5>Código de moneda: {codigoMoneda}</h5>
                <form>
                    <div className='seccionFormulario'>
                        <label id="mortern">Tasa de mortandad de terneras (%): </label>
                        <input type='number' value={mortandadTerneros} onChange={handleMortandadTernerosChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#mortern" place="top">
                            <p><b>Tasa de mortandad de terneras (% anual):</b></p>
                            <p>Terneras muertas / Terneras nacidas * 100</p>
                            <p>- Se consideran las muertes ocurridas desde</p>
                            <p>el periparto hasta el fin de la crianza (desleche) -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="mortrec">Tasa de mortandad de recría (%): </label>
                        <input type='number' value={mortandadRecria} onChange={handleMortandadRecriaChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#mortrec" place="top">
                            <p><b>Tasa de mortandad de recría (% anual):</b></p>
                            <p>Hembras recría muertas / Hembras recría totales * 100</p>
                            <p>- desde la salida de la crianza hasta el ingreso a preparto -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="rechrec">Tasa de rechazo de recría (%): </label>
                        <input type='number' value={rechazoRecria} onChange={handlerechazoRecriaChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#rechrec" place="top">
                            <p><b>Tasa de rechazo de recría (% anual):</b></p>
                            <p>Hembras recría vendidas / Hembras recría totales * 100</p>
                            <p>- desde la salida de la crianza hasta el ingreso a preparto -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="efprenez">Eficiencia de preñez de vaquillonas (%): </label>
                        <input type='number' value={prenezVaquillonas} onChange={handlePrenezVaquillonasChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#efprenez" place="top">
                            <p><b>Eficiencia de preñez en vaquillonas (% anual):</b></p>
                            <p>Vaquillonas preñadas / Vaquillonas liberadas a servicio * 100</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="abortos">Tasa general de abortos (%): </label>
                        <input type='number' value={abortos} onChange={handleAbortosChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#abortos" place="top">
                            <p><b>Tasa general de abortos (% anual):</b></p>
                            <p>Abortos / Preñeces confirmadas * 100</p>
                            <p>- Se refiere a la suma de los abortos:</p>
                            <p>vistos, detectados por tacto o ecografía,</p>
                            <p>vacas con confirmación de preñez que luego</p>
                            <p>no paren en la fecha prevista -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="edadant">Edad al primer parto año anterior (meses): </label>
                        <input type='number' value={edadPartoAnterior} onChange={handleEdadPartoAnteriorChange} placeholder='Ingresar un valor en meses (12 - 48)' />
                        <Tooltip anchorSelect="#edadant" place="top">
                            <p><b>Edad al primer parto (expresada en meses):</b></p>
                            <p>Promedio para las vaquillonas del año anterior</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="edadactual">Edad al primer parto año actual (meses): </label>
                        <input type='number' value={edadPartoActual} onChange={handleEdadPartoActualChange} placeholder='Ingresar un valor en meses (12 - 48)' />
                        <Tooltip anchorSelect="#edadactual" place="top">
                            <p><b>Edad al primer parto (expresada en meses):</b></p>
                            <p>Promedio para las vaquillonas del año en curso</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="hembrasprim">Proporción crías hembras (primíparas) (%): </label>
                        <input type='number' value={hembrasPrimiparas} onChange={handleHembrasPrimiparasChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#hembrasprim" place="top">
                            <p><b>Proporción de crías hembras (% anual):</b></p>
                            <p>Para el grupo de primíparas (vaquillonas de 1er parto)</p>
                            <p>- Puede ser mayor al 50% si se utiliza semen sexado -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="hembrasmult">Proporción crías hembras (multíparas) (%): </label>
                        <input type='number' value={hembrasMultiparas} onChange={handleHembrasMultiparasChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#hembrasmult" place="top">
                            <p><b>Proporción de crías hembras (% anual):</b></p>
                            <p>Para el grupo de multíparas (desde 2do parto en adelante)</p>
                            <p>- Puede ser mayor al 50% si se utiliza semen sexado -</p>
                        </Tooltip>
                    </div>
                </form>
                {mostrarSeccion3 === false && (<div>
                    <button onClick={handleClick2}>Calcular</button>
                    <BotonReset />
                </div>)}
                {mostrarSeccion3 && (<p>RESULTADOS</p>)}
            </div>
            )}
            {mostrarSeccion3 && (<div className='seccion'>
                <h3>Resultados:</h3>
                <p>RESULTADOS</p>
                <BotonReset />
            </div>)}
        </div>
    )
}

export default IngresoDatos;