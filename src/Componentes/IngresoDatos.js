import React, { useState, useEffect } from 'react'
import BotonReset from './BotonReset'
import { Tooltip } from 'react-tooltip'
import IndicadoresFisicos from './IndicadoresFisicos'
import divisas from './Divisas'
import IngresosBrutos from './IngresosBrutos'
import ManoDeObra from './ManoDeObra'
import Reposicion from './Reposicion'
import OtrosGastosDirectos from './OtrosGastosDirectos'
import GastosEstructura from './GastosEstructura'
import ResultadosEconomicos from './ResultadosEconomicos'
import GraficoAplicacionIB from './GraficoAplicacionIB'
import ChangeCurrency from '../Media/kisspng-computer-icons-download-vector-changing.png';
import GraficoIBGDGE from './GraficoIBGDGE'
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReportePDF from './ReportePDF'

function IngresoDatos() {

    //Datos que se ingresan
    const [nombreCaso, setNombreCaso] = useState('');

    const [vacasOrdeno, setVacasOrdeno] = useState('');
    const [vacasSecas, setVacasSecas] = useState('');
    const [superficieVT, setSuperficieVT] = useState('');
    const [lecheVendida, setLecheVendida] = useState('');

    const [mostrarSeccion2, setMostrarSeccion2] = useState(false);
    const [mostrarSeccion3, setMostrarSeccion3] = useState(false);
    const [mostrarSeccion4, setMostrarSeccion4] = useState(false);
    const [mostrarSeccion5, setMostrarSeccion5] = useState(false);
    const [mostrarSeccion6, setMostrarSeccion6] = useState(false);
    const [mostrarSeccion7, setMostrarSeccion7] = useState(false);

    const [currency1, setCurrency1] = useState("Peso argentino");
    const [currency2, setCurrency2] = useState("Peso argentino");
    const [currency, setCurrency] = useState("Peso argentino");
    const [codigoMoneda1, setCodigoMoneda1] = useState("ARS");
    const [codigoMoneda2, setCodigoMoneda2] = useState("ARS");
    const [codigoMoneda, setCodigoMoneda] = useState("ARS");
    const datosDropDown1 = divisas.map(item => item.currency);
    const [tipoCambio, setTipoCambio] = useState('');
    const [cambiarMoneda, setCambiarMoneda] = useState(true);

    const [precioLeche, setPrecioLeche] = useState('');
    const [ingresoCarne, setIngresoCarne] = useState('');

    const [gastoManoDeObraP, setGastoManoDeObraP] = useState('');
    const [cantidadOperarios, setCantidadOperarios] = useState('');

    const [precioVaquillona, setPrecioVaquillona] = useState('');
    const [cantidadVaquillonas, setCantidadVaquillonas] = useState('');

    const [gastoAlimentacionP, setGastoAlimentacionP] = useState('');
    const [gastoSuministroP, setGastoSuministroP] = useState('');
    const [gastosVeterinariaP, setGastosVeterinariaP] = useState('');
    const [gastosRodeoP, setGastosRodeoP] = useState('');
    const [alquilerVacasP, setAlquilerVacasP] = useState('');
    const [gastosTamboP, setGastosTamboP] = useState('');

    const [gastosMantenimientoP, setGastosMantenimientoP] = useState('');
    const [gastoArrendamientoP, setGastoArrendamientoP] = useState('');
    const [impuestosP, setImpuestosP] = useState('');
    const [gerenciaP, setGerenciaP] = useState('');
    const [gastosAdministracionP, setGastosAdministracionP] = useState('');

    //Cálculos sección 1
    const lecheVendidaDia = (parseFloat(lecheVendida) / 365).toFixed(0);
    const cargaAnimal = ((parseFloat(vacasOrdeno) + parseFloat(vacasSecas)) / parseFloat(superficieVT)).toFixed(2);
    const produccionIndividual = ((parseFloat(lecheVendida) / 365) / parseFloat(vacasOrdeno)).toFixed(1);
    const relacionVOVT = ((parseFloat(vacasOrdeno) / (parseFloat(vacasOrdeno) + parseFloat(vacasSecas)) * 100)).toFixed(1);
    const productividad = (parseFloat(lecheVendida) / parseFloat(superficieVT)).toFixed(0);

    //Cálculos sección 2
    const ingresoLeche = (parseFloat(lecheVendida) * parseFloat(precioLeche)).toFixed(0);
    const ingresoBruto = (parseFloat(ingresoLeche) + parseFloat(ingresoCarne)).toFixed(0);
    const ingresoLecheP = (parseFloat(ingresoLeche) / parseFloat(ingresoBruto) * 100).toFixed(1);
    const ingresoCarneP = (parseFloat(ingresoCarne) / parseFloat(ingresoBruto) * 100).toFixed(1);
    const ingresoBrutoP = (100).toFixed(1);

    //Cálculos sección 3
    const gastoManoDeObra = (parseFloat(gastoManoDeObraP) / 100 * parseFloat(ingresoLeche)).toFixed(0);
    const gastoPorOperario = (parseFloat(gastoManoDeObra) / parseFloat(cantidadOperarios)).toFixed(0);
    const gastoPorOperarioP = (parseFloat(gastoManoDeObraP) / parseFloat(cantidadOperarios)).toFixed(1);

    //Cálculos sección 4
    const vacasTotales = (parseFloat(vacasOrdeno) + parseFloat(vacasSecas)).toFixed(0);
    const porcentajeReposicion = (parseFloat(cantidadVaquillonas) / parseFloat(vacasTotales) * 100).toFixed(1);
    const gastoReposicion = (parseFloat(precioVaquillona) * parseFloat(cantidadVaquillonas) * parseFloat(precioLeche)).toFixed(0);
    const gastoReposicionP = (parseFloat(gastoReposicion) / parseFloat(ingresoLeche) * 100).toFixed(1);

    //Cálculos sección 5
    const gastoAlimentacion = (parseFloat(gastoAlimentacionP) * parseFloat(ingresoLeche) / 100).toFixed(0);
    const gastoSuministro = (parseFloat(gastoSuministroP) * parseFloat(ingresoLeche) / 100).toFixed(0);
    const gastosVeterinaria = (parseFloat(gastosVeterinariaP) * parseFloat(ingresoLeche) / 100).toFixed(0);
    const gastosRodeo = (parseFloat(gastosRodeoP) * parseFloat(ingresoLeche) / 100).toFixed(0);
    const alquilerVacas = (parseFloat(alquilerVacasP) * parseFloat(ingresoLeche) / 100).toFixed(0);
    const gastosTambo = (parseFloat(gastosTamboP) * parseFloat(ingresoLeche) / 100).toFixed(0);

    //Cálculos sección 6
    const gastosMantenimiento = (parseFloat(gastosMantenimientoP) * parseFloat(ingresoLeche) / 100).toFixed(0);
    const gastoArrendamiento = (parseFloat(gastoArrendamientoP) * parseFloat(ingresoLeche) / 100).toFixed(0);
    const impuestos = (parseFloat(impuestosP) * parseFloat(ingresoLeche) / 100).toFixed(0);
    const gerencia = (parseFloat(gerenciaP) * parseFloat(ingresoLeche) / 100).toFixed(0);
    const gastosAdministracion = (parseFloat(gastosAdministracionP) * parseFloat(ingresoLeche) / 100).toFixed(0);

    //Cálculos sección 7
    const gastosDirectos = (parseFloat(gastoManoDeObra) + parseFloat(gastoReposicion) + parseFloat(gastoAlimentacion)
        + parseFloat(gastoSuministro) + parseFloat(gastosVeterinaria) + parseFloat(gastosRodeo) + parseFloat(alquilerVacas) + parseFloat(gastosTambo)).toFixed(0);
    const gastosEstructura = (parseFloat(gastosMantenimiento) + parseFloat(gastoArrendamiento) +
        parseFloat(impuestos) + parseFloat(gerencia) + parseFloat(gastosAdministracion)).toFixed(0);
    const resultadoOperativo = (parseFloat(ingresoBruto) - parseFloat(gastosDirectos) - parseFloat(gastosEstructura)).toFixed(0);
    const costoLitroCP = ((parseFloat(gastosDirectos) + parseFloat(gastosEstructura) - parseFloat(ingresoCarne)) / parseFloat(lecheVendida)).toFixed(3);
    const resultadoOpLitro = (parseFloat(resultadoOperativo) / parseFloat(lecheVendida)).toFixed(3);
    const resultadoOpHa = (parseFloat(resultadoOperativo) / parseFloat(superficieVT)).toFixed(0);
    const resultadoOpP = (parseFloat(resultadoOperativo) / parseFloat(ingresoBruto) * 100).toFixed(1);
    const gastosDirectosP = (parseFloat(gastosDirectos) / parseFloat(ingresoBruto) * 100).toFixed(1);
    const gastosEstructuraP = (parseFloat(gastosEstructura) / parseFloat(ingresoBruto) * 100).toFixed(1);
    const resultadoOpLeche = (parseFloat(resultadoOperativo) / parseFloat(precioLeche) / parseFloat(superficieVT)).toFixed(0);

    //Datos para validaciones
    let formatoEnteroPositivo = /^[1-9]\d*$/;
    let formatoPorcentaje = /^(100(\.0{1,2})?|[1-9]\d?(\.\d{1,2})?|0(\.[1-9]\d?)?|0)$/;
    let formatoFloatPositivo = /^\d+(?:.\d+)?$/
    let validacion1 = true;
    let validacion2 = true;
    let validacion3 = true;
    let validacion4 = true;
    let validacion5 = true;
    let validacion6 = true;
    let validacion7 = true;

    //Validación 1
    if (!formatoEnteroPositivo.test(vacasOrdeno) || !formatoEnteroPositivo.test(vacasSecas) ||
        !formatoFloatPositivo.test(superficieVT) || !formatoEnteroPositivo.test(lecheVendida)) {
        validacion1 = false;
    }

    //Validación 2

    if (!formatoFloatPositivo.test(precioLeche) || !formatoFloatPositivo.test(ingresoCarne) || codigoMoneda === '') {
        validacion2 = false;
    }

    //Validación 3

    if (!formatoPorcentaje.test(gastoManoDeObraP) || !formatoFloatPositivo.test(cantidadOperarios)) {
        validacion3 = false;
    }

    //Validación 4
    if (!formatoEnteroPositivo.test(cantidadVaquillonas) || !formatoEnteroPositivo.test(precioVaquillona)) {
        validacion4 = false;
    }

    //Validación 5
    if (!formatoPorcentaje.test(gastoAlimentacionP) || !formatoPorcentaje.test(gastoSuministroP) ||
        !formatoPorcentaje.test(gastosVeterinariaP) || !formatoPorcentaje.test(gastosRodeoP) ||
        !formatoPorcentaje.test(alquilerVacasP) || !formatoPorcentaje.test(gastosTamboP)) {
        validacion5 = false;
    }

    //Validación 6
    if (!formatoPorcentaje.test(gastosMantenimientoP) || !formatoPorcentaje.test(gastoArrendamientoP) ||
        !formatoPorcentaje.test(impuestosP) || !formatoPorcentaje.test(gerenciaP) ||
        !formatoPorcentaje.test(gastosAdministracionP)) {
        validacion6 = false;
    }

    //Validación 7
    if (resultadoOperativo < 0) {
        validacion7 = false;
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

    const handleSelect1Change = (event) => {
        const selectedCurrency = event.target.value;
        setCurrency1(selectedCurrency);
    };

    useEffect(() => {
        const elementoEncontrado = divisas.find(elemento => elemento.currency === currency1);
        setCodigoMoneda1(prevstate => elementoEncontrado.code);
    }, [currency1]);

    const handleSelect2Change = (event) => {
        const selectedCurrency = event.target.value;
        setCurrency2(selectedCurrency);
    };

    useEffect(() => {
        const elementoEncontrado = divisas.find(elemento => elemento.currency === currency2);
        setCodigoMoneda2(prevstate => elementoEncontrado.code);
    }, [currency2]);

    const handleTipoCambioChange = (e) => {
        setTipoCambio(e.target.value);
    }

    const handleClickMonedaCambio = () => {
        if (currency1 !== currency2 && tipoCambio !== 0 && tipoCambio !== 1) {
            setCambiarMoneda(prevstate => !prevstate);
        }
    }

    useEffect(() => {
        if (cambiarMoneda === true) {
            setCurrency(currency1);
            setCodigoMoneda(codigoMoneda1)
        }
        if (cambiarMoneda === false) {
            setCurrency(currency2)
            setCodigoMoneda(codigoMoneda2)
        }
    }, [cambiarMoneda, currency1, currency2, codigoMoneda1, codigoMoneda1, codigoMoneda2]);

    useEffect(() => {
        if (cambiarMoneda === true) {
            setPrecioLeche((parseFloat(precioLeche) * parseFloat(tipoCambio)).toFixed(3))
            setIngresoCarne((parseFloat(ingresoCarne) * parseFloat(tipoCambio)).toFixed(0))
        }
        if (cambiarMoneda === false) {
            setPrecioLeche((parseFloat(precioLeche) / parseFloat(tipoCambio)).toFixed(3));
            setIngresoCarne((parseFloat(ingresoCarne) / parseFloat(tipoCambio)).toFixed(0));
        }
    }, [currency, codigoMoneda]);

    const handlePrecioLecheChange = (e) => {
        setPrecioLeche(e.target.value);
    };

    const handleIngresoCarneChange = (e) => {
        setIngresoCarne(e.target.value);
    };

    //Sección 3 - Gasto en mano de obra

    const handleGastoManoDeObraChange = (e) => {
        setGastoManoDeObraP(e.target.value);
    };

    const handleCantidadOperariosChange = (e) => {
        setCantidadOperarios(e.target.value);
    };

    //Sección 4 - Gasto de reposición

    const handlePrecioVaquillonaChange = (e) => {
        setPrecioVaquillona(e.target.value);
    };

    const handleCantidadVaquillonasChange = (e) => {
        setCantidadVaquillonas(e.target.value);
    };

    //Sección 5 - Otros gastos directos

    const handleGastoAlimentacionChange = (e) => {
        setGastoAlimentacionP(e.target.value);
    };

    const handleGastoSuministroChange = (e) => {
        setGastoSuministroP(e.target.value);
    };

    const handleGastosVeterinariaChange = (e) => {
        setGastosVeterinariaP(e.target.value);
    };

    const handleGastosRodeoChange = (e) => {
        setGastosRodeoP(e.target.value);
    };

    const handleAlquilerVacasChange = (e) => {
        setAlquilerVacasP(e.target.value);
    };

    const handleGastosTamboChange = (e) => {
        setGastosTamboP(e.target.value);
    };

    //Sección 6 - Gastos de Estructura

    const handleGastosMantenimientoChange = (e) => {
        setGastosMantenimientoP(e.target.value);
    };

    const handleGastoArrendamientoChange = (e) => {
        setGastoArrendamientoP(e.target.value);
    };

    const handleImpuestosChange = (e) => {
        setImpuestosP(e.target.value);
    };

    const handleGerenciaChange = (e) => {
        setGerenciaP(e.target.value);
    };

    const handleGastosAdministracionChange = (e) => {
        setGastosAdministracionP(e.target.value);
    };

    const handleClick2 = () => {
        if (validacion2) {
            setMostrarSeccion3(true);
        }
    };

    const handleClick3 = () => {
        if (validacion3) {
            setMostrarSeccion4(true);
        }
    };

    const handleClick4 = () => {
        if (validacion4) {
            setMostrarSeccion5(true);
        }
    };

    const handleClick5 = () => {
        if (validacion5) {
            setMostrarSeccion6(true);
        }
    };

    const handleClick6 = () => {
        if (validacion5) {
            setMostrarSeccion7(true);
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
                        <Tooltip anchorSelect="#nombreCaso" place="top" className='tooltip'>
                            <p><b>Nombre del caso de estudio:</b></p>
                            <p>Identificación de la simulación</p>
                            <p>(nombre de la empresa, establecimiento, propietario, etc.)</p>
                            <p>Este nombre aparecerá encabezando los reportes PDF</p>
                        </Tooltip>
                    </div>
                </form>
            </div>
            <div className='seccion'>
                <h3>Indicadores físicos:</h3>
                <p>(paso 1 de 6)</p>
                <form>
                    <div className='seccionFormulario'>
                        <label id="vacasOrdeno">Vacas en ordeño (cantidad): </label>
                        <input type='number' value={vacasOrdeno} onChange={handleVacasOrdenoChange} placeholder='Ingresar cantidad de vacas en ordeño' />
                        <Tooltip anchorSelect="#vacasOrdeno" place="top" className='tooltip'>
                            <p><b>Vacas en ordeño:</b></p>
                            <p>Número promedio anual de vacas en ordeño</p>
                            <p>- No ingresar decimales - </p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="vacasSecas">Vacas secas (cantidad): </label>
                        <input type='number' value={vacasSecas} onChange={handleVacasSecasChange} placeholder='Ingresar cantidad de vacas secas' />
                        <Tooltip anchorSelect="#vacasSecas" place="top" className='tooltip'>
                            <p><b>Vacas secas:</b></p>
                            <p>Número promedio anual de vacas secas</p>
                            <p>- No ingresar decimales - </p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="superficieVT">Superficie vaca total (hectáreas): </label>
                        <input type='number' step="0.01" value={superficieVT} onChange={handleSuperficieVTChange} placeholder='Ingresar cantidad de hectáreas' />
                        <Tooltip anchorSelect="#superficieVT" place="top" className='tooltip'>
                            <p><b>Superficie vaca total (hectáreas VT):</b></p>
                            <p>Hectáreas destinadas a vacas en ordeño y secas</p>
                            <p>No incluye superficie de categorías jóvenes</p>
                            <p>No incluye superficie de otras actividades</p>
                            <p>- Admite hasta dos decimales -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="lecheVendida">Leche vendida (litros/año): </label>
                        <input type='number' value={lecheVendida} onChange={handleLecheVendidaChange} placeholder='Ingresar cantidad de litros/año' />
                        <Tooltip anchorSelect="#lecheVendida" place="top" className='tooltip'>
                            <p><b>Leche vendida:</b></p>
                            <p>Toda la leche producida con valor económico</p>
                            <p>No incluye leche de descarte</p>
                            <p>No incluye leche para crianza de terneros</p>
                            <p>- No ingresar decimales -</p>
                        </Tooltip>
                    </div>
                </form>
                {mostrarSeccion2 === false && (<div>
                    <button onClick={handleClick1} className='button'>Calcular</button>
                    <BotonReset />
                </div>)}
                {mostrarSeccion2 && (<div>
                    <IndicadoresFisicos validacion1={validacion1} cargaAnimal={cargaAnimal}
                        produccionIndividual={produccionIndividual} relacionVOVT={relacionVOVT}
                        productividad={productividad} lecheVendidaDia={lecheVendidaDia} />
                </div>)}
            </div>

            {mostrarSeccion2 && (<div className='seccion'>
                <h3>Ingresos brutos:</h3>
                <p>(paso 2 de 6)</p>
                <div className='seccionFormulario'>
                    <p>Seleccione las monedas de trabajo:</p>
                    <div id="monedas-container">
                        <div className='monedas'>
                            <label htmlFor="opcionesDropdown1">Moneda principal: </label>
                            <select id="opcionesDropdown1" value={currency1} onChange={handleSelect1Change}>
                                <option value="currency" style={{ display: "none" }}>Selecciona una opción</option>
                                {datosDropDown1.map((opcion, index) => (
                                    <option
                                        key={opcion.id} // Utiliza el índice como clave única
                                        value={opcion.id}
                                        style={{ fontWeight: opcion.negrita ? 'bold' : 'normal' }}
                                    >
                                        {opcion}
                                    </option>
                                ))}
                            </select>
                            <h6>Código de moneda: {codigoMoneda1}</h6>
                        </div>
                        <div className='monedas'>
                            <label htmlFor="opcionesDropdown2">Moneda secundaria: </label>
                            <select id="opcionesDropdown2" value={currency2} onChange={handleSelect2Change}>
                                <option value="currency" style={{ display: "none" }}>Selecciona una opción</option>
                                {datosDropDown1.map((opcion) => (
                                    <option value={opcion}
                                        style={{ fontWeight: opcion.negrita ? 'bold' : 'normal' }}
                                    >
                                        {opcion}
                                    </option>
                                ))}
                            </select>
                            <h6>Código de moneda: {codigoMoneda2}</h6>
                        </div>
                    </div>
                </div>
                <form>
                    <div className='seccionFormulario'>
                        <label id="tipoCambio">Tipo de cambio ({codigoMoneda1}/{codigoMoneda2}): </label>
                        <input type='number' step="0.001" value={tipoCambio} onChange={handleTipoCambioChange} placeholder='Ingresar la relación de cambio' />
                        <Tooltip anchorSelect="#tipoCambio" place="top" className='tooltip'>
                            <p><b>Tipo de cambio:</b></p>
                            <p>Ingrese la relación de cambio</p>
                            <p>¿Cuántas unidades de {currency1}</p>
                            <p>equivalen a una unidad de {currency2}?</p>
                            <p>- Admite hasta tres decimales -</p>
                        </Tooltip>
                        <a href={`https://www.oanda.com/currency-converter/es/?from=${codigoMoneda2}&to=${codigoMoneda1}&amount=1`} target="_blank" rel="noreferrer">Consultar conversor de monedas</a>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="precioLeche">Precio de la leche ({codigoMoneda}/litro): </label>
                        <input type='number' step="0.001" value={precioLeche} onChange={handlePrecioLecheChange} placeholder='Ingresar un precio por litro' />
                        <Tooltip anchorSelect="#precioLeche" place="top" className='tooltip'>
                            <p><b>Precio de la leche:</b></p>
                            <p>Precio promedio anual por litro de leche</p>
                            <p>Moneda seleccionada: {currency}</p>
                            <p>- Admite hasta tres decimales -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="ingresoCarne">Ingresos por venta de carne ({codigoMoneda}/año): </label>
                        <input type='number' value={ingresoCarne} onChange={handleIngresoCarneChange} placeholder='Ingresar un monto anual' />
                        <Tooltip anchorSelect="#ingresoCarne" place="top" className='tooltip'>
                            <p><b>Ingresos por venta de carne:</b></p>
                            <p>Estimación de los ingresos anuales</p>
                            <p>por venta de carne derivada del rodeo lechero</p>
                            <p>(vacas, toros, terneros, terneras, vaquillonas)</p>
                            <p>Moneda seleccionada: {currency}</p>
                            <p>- No ingresar decimales -</p>
                        </Tooltip>
                    </div>
                </form>
                {mostrarSeccion3 && (<button onClick={handleClickMonedaCambio} className='cambioMoneda'>
                    <img src={ChangeCurrency} className='cambioMoneda' alt="Cambiar moneda resultados" title="Cambiar moneda resultados"></img>
                </button>)}
                {mostrarSeccion3 === false && (<div>
                    <button onClick={handleClick2} className='button'>Calcular</button>
                    <BotonReset />
                </div>)}
                {mostrarSeccion3 && (<div>
                    <IngresosBrutos validacion2={validacion2} ingresoLeche={ingresoLeche} ingresoCarne={ingresoCarne}
                        ingresoLecheP={ingresoLecheP} ingresoCarneP={ingresoCarneP} ingresoBruto={ingresoBruto}
                        ingresoBrutoP={ingresoBrutoP} codigoMoneda={codigoMoneda} />
                </div>
                )}
            </div>
            )}

            {mostrarSeccion3 && (<div className='seccion'>
                <h3>Gasto en mano de obra:</h3>
                <p>(paso 3 de 6)</p>
                <form>
                    <div className='seccionFormulario'>
                        <label id="gastoManoDeObra">Gasto en mano de obra (% IB leche):</label>
                        <input type='number' step="0.1" value={gastoManoDeObraP} onChange={handleGastoManoDeObraChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#gastoManoDeObra" place="top" className='tooltip'>
                            <p><b>Gasto en mano de obra:</b></p>
                            <p>Ingresar un porcentaje sobre el</p>
                            <p>ingreso por venta de leche</p>
                            <p>- Admite un decimal -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="cantidadOperarios">Cantidad de operarios:</label>
                        <input type='number' step="0.1" value={cantidadOperarios} onChange={handleCantidadOperariosChange} placeholder='Ingresar una cantidad' />
                        <Tooltip anchorSelect="#cantidadOperarios" place="top" className='tooltip'>
                            <p><b>Cantidad de operarios:</b></p>
                            <p>Ingrese el número de personas afectadas</p>
                            <p>a las tareas de la producción de leche</p>
                            <p>Se puede poner fracción en caso de dedicación parcial</p>
                            <p>- Admite un decimal -</p>
                        </Tooltip>
                    </div>
                </form>
                {mostrarSeccion4 === false && (<div>
                    <button onClick={handleClick3} className='button'>Calcular</button>
                    <BotonReset />
                </div>)}
                {mostrarSeccion4 && (<div>
                    <ManoDeObra validacion3={validacion3} gastoManoDeObraP={gastoManoDeObraP}
                        gastoManoDeObra={gastoManoDeObra} gastoPorOperarioP={gastoPorOperarioP}
                        gastoPorOperario={gastoPorOperario} codigoMoneda={codigoMoneda} />
                </div>
                )}
            </div>
            )}

            {mostrarSeccion4 && (<div className='seccion'>
                <h3>Gasto de reposición:</h3>
                <p>(paso 4 de 6)</p>
                <form>
                    <div className='seccionFormulario'>
                        <label id="precioVaquillona">Valor de vaquillona al parir (litros leche):</label>
                        <input type='number' value={precioVaquillona} onChange={handlePrecioVaquillonaChange} placeholder='Ingresar precio en litros de leche' />
                        <Tooltip anchorSelect="#precioVaquillona" place="top" className='tooltip'>
                            <p><b>Valor de vaquillona al parir:</b></p>
                            <p>Costo de una vaquillona adelantada</p>
                            <p>Vaquillonas de recría propia: usar costo propio</p>
                            <p>Vaquillonas compradas: usar valor de mercado</p>
                            <p>Combinación de ambas: usar promedio ponderado</p>
                            <p>Expresado en litros de leche</p>
                            <p>- No ingresar decimales -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="cantidadVaquillonas">Vaquillonas que paren por año (cantidad):</label>
                        <input type='number' value={cantidadVaquillonas} onChange={handleCantidadVaquillonasChange} placeholder='Ingresar una cantidad' />
                        <Tooltip anchorSelect="#cantidadVaquillonas" place="top" className='tooltip'>
                            <p><b>Vaquillonas que paren por año:</b></p>
                            <p>Cantidad de vaquillonas de reposición</p>
                            <p>que ingresan por año al rodeo adulto</p>
                            <p>- No ingresar decimales -</p>
                        </Tooltip>
                    </div>
                </form>
                {mostrarSeccion5 === false && (<div>
                    <button onClick={handleClick4} className='button'>Calcular</button>
                    <BotonReset />
                </div>)}
                {mostrarSeccion5 && (<div>
                    <Reposicion validacion4={validacion4} porcentajeReposicion={porcentajeReposicion}
                        gastoReposicion={gastoReposicion} gastoReposicionP={gastoReposicionP}
                        codigoMoneda={codigoMoneda} />
                </div>
                )}
            </div>
            )}

            {mostrarSeccion5 && (<div className='seccion'>
                <h3>Otros gastos directos:</h3>
                <p>(paso 5 de 6)</p>
                <form>
                    <div className='seccionFormulario'>
                        <label id="gastoAlimentacion">Gasto de alimentación vacas (% IB leche):</label>
                        <input type='number' step="0.1" value={gastoAlimentacionP} onChange={handleGastoAlimentacionChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#gastoAlimentacion" place="top" className='tooltip'>
                            <p><b>Gasto de alimentación vacas:</b></p>
                            <p>Considera vacas en ordeño, preparto y vacas secas no adelantadas</p>
                            <p>No considera categorías jóvenes</p>
                            <p>Incluye pasturas, verdeos, reservas y concentrados</p>
                            <p>No incluye el suministro</p>
                            <p>Expresado como porcentaje del ingreso por venta de leche</p>
                            <p>- Admite un decimal -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="gastoSuministro">Gastos suministro de alimentos (% IB leche):</label>
                        <input type='number' step="0.1" value={gastoSuministroP} onChange={handleGastoSuministroChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#gastoSuministro" place="top" className='tooltip'>
                            <p><b>Gastos suministro de alimentos:</b></p>
                            <p>Gastos en combustible y mantenimiento de la</p>
                            <p>maquinaria relacionada con la alimentación</p>
                            <p>Expresado como porcentaje del ingreso por venta de leche</p>
                            <p>- Admite un decimal -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="gastosVeterinaria">Gastos sanidad animal (% IB leche):</label>
                        <input type='number' step="0.1" value={gastosVeterinariaP} onChange={handleGastosVeterinariaChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#gastosVeterinaria" place="top" className='tooltip'>
                            <p><b>Gastos sanidad animal:</b></p>
                            <p>Veterinario, insumos veterinarios, sanidad oficial, etc.</p>
                            <p>Expresado como porcentaje del ingreso por venta de leche</p>
                            <p>- Admite un decimal -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="gastosRodeo">Gastos de rodeo (% IB leche):</label>
                        <input type='number' step="0.1" value={gastosRodeoP} onChange={handleGastosRodeoChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#gastosRodeo" place="top" className='tooltip'>
                            <p><b>Gastos de rodeo:</b></p>
                            <p>Identificación animal, control lechero, semen,</p>
                            <p>mantenimiento termo, insumos para reproducción</p>
                            <p>y cualquier otro gasto del rodeo</p>
                            <p>Expresado como porcentaje del ingreso por venta de leche</p>
                            <p>- Admite un decimal -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="alquilerVacas">Alquiler/leasing vacas (% IB leche):</label>
                        <input type='number' step="0.1" value={alquilerVacasP} onChange={handleAlquilerVacasChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#alquilerVacas" place="top" className='tooltip'>
                            <p><b>Alquiler/leasing vacas:</b></p>
                            <p>En caso de corresponder, gastos originados</p>
                            <p>por alquiler o leasing de vacas</p>
                            <p>Expresado como porcentaje del ingreso por venta de leche</p>
                            <p>Si no corresponde, poner cero</p>
                            <p>- Admite un decimal -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="gastosTambo">Gastos de ordeño (% IB leche):</label>
                        <input type='number' step="0.1" value={gastosTamboP} onChange={handleGastosTamboChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#gastosTambo" place="top" className='tooltip'>
                            <p><b>Gastos de ordeño:</b></p>
                            <p>Productos de limpieza de equipos, reparaciones,</p>
                            <p>repuestos, energía eléctrica y cualquier otro gasto</p>
                            <p>relacionado con instalación y equipos de ordeño</p>
                            <p>Expresado como porcentaje del ingreso por venta de leche</p>
                            <p>- Admite un decimal -</p>
                        </Tooltip>
                    </div>
                </form>
                {mostrarSeccion6 === false && (<div>
                    <button onClick={handleClick5} className='button'>Calcular</button>
                    <BotonReset />
                </div>)}
                {mostrarSeccion6 && (<div>
                    <OtrosGastosDirectos validacion5={validacion5} gastoAlimentacion={gastoAlimentacion}
                        gastoAlimentacionP={gastoAlimentacionP} gastoSuministro={gastoSuministro} gastoSuministroP={gastoSuministroP}
                        gastosVeterinaria={gastosVeterinaria} gastosVeterinariaP={gastosVeterinariaP}
                        gastosRodeo={gastosRodeo} gastosRodeoP={gastosRodeoP}
                        alquilerVacas={alquilerVacas} alquilerVacasP={alquilerVacasP}
                        gastosTambo={gastosTambo} gastosTamboP={gastosTamboP} codigoMoneda={codigoMoneda} />
                </div>
                )}
            </div>
            )}

            {mostrarSeccion6 && (<div className='seccion'>
                <h3>Gastos de estructura:</h3>
                <p>(paso 6 de 6)</p>
                <form>
                    <div className='seccionFormulario'>
                        <label id="gastosMantenimiento">Gastos mantenimiento (% IB leche):</label>
                        <input type='number' step="0.1" value={gastosMantenimientoP} onChange={handleGastosMantenimientoChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#gastosMantenimiento" place="top" className='tooltip'>
                            <p><b>Gastos mantenimiento:</b></p>
                            <p>Mantenimiento de otras mejoras y maquinarias</p>
                            <p>(viviendas, molinos, aguadas, cercos, callejones,</p>
                            <p>corrales, camas, alojamiento de vacas,</p>
                            <p>equipos de bombeo, equipos de riego, etc.)</p>
                            <p>No considera instalaciones y equipos de ordeño</p>
                            <p>(incluidos en gastos de ordeño)</p>
                            <p>No considera maquinaria de suministro y acarreos</p>
                            <p>(incluidos en gastos de suministro de alimentos)</p>
                            <p>Expresado como porcentaje del ingreso por venta de leche</p>
                            <p>- Admite un decimal -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="gastoArrendamiento">Arrendamiento de tierra (% IB leche):</label>
                        <input type='number' step="0.1" value={gastoArrendamientoP} onChange={handleGastoArrendamientoChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#gastoArrendamiento" place="top" className='tooltip'>
                            <p><b>Gasto de arrendamiento:</b></p>
                            <p>Alquiler de tierra</p>
                            <p>Expresado como porcentaje del ingreso por venta de leche</p>
                            <p>- Admite un decimal -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="impuestos">Impuestos y servicios (% IB leche):</label>
                        <input type='number' step="0.1" value={impuestosP} onChange={handleImpuestosChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#impuestos" place="top" className='tooltip'>
                            <p><b>Impuestos y servicios:</b></p>
                            <p>Gastos bancarios (mantenimiento de cuenta, servicios de deuda),</p>
                            <p>impuestos (no incluye impuesto a las ganancias/renta), </p>
                            <p>seguros, telefonía, internet, electricidad viviendas, etc.</p>
                            <p>Expresado como porcentaje del ingreso por venta de leche</p>
                            <p>- Admite un decimal -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="gerencia">Gastos de gerenciamiento (% IB leche):</label>
                        <input type='number' step="0.1" value={gerenciaP} onChange={handleGerenciaChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#gerencia" place="top" className='tooltip'>
                            <p><b>Gastos de gerenciamiento:</b></p>
                            <p>Retribución del equipo de gerencia y asesores</p>
                            <p>(contador, ingeniero agrónomo, otros)</p>
                            <p>No considera asesor veterinario (incluido en sanidad)</p>
                            <p>Expresado como porcentaje del ingreso por venta de leche</p>
                            <p>- Admite un decimal -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="gastosAdministracion">Gastos administración (% IB leche):</label>
                        <input type='number' step="0.1" value={gastosAdministracionP} onChange={handleGastosAdministracionChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#gastosAdministracion" place="top" className='tooltip'>
                            <p><b>Gastos administración:</b></p>
                            <p>Gastos de oficina, personal administrativo,</p>
                            <p>movilidad de personal y vehículos de la empresa</p>
                            <p>y cualquier otro gasto de estructura no mencionado</p>
                            <p>Expresado como porcentaje del ingreso por venta de leche</p>
                            <p>- Admite un decimal -</p>
                        </Tooltip>
                    </div>
                </form>
                {mostrarSeccion7 === false && (<div>
                    <button onClick={handleClick6} className='button'>Calcular</button>
                    <BotonReset />
                </div>)}
                {mostrarSeccion7 && (<div>
                    <GastosEstructura validacion6={validacion6} gastosMantenimiento={gastosMantenimiento}
                        gastosMantenimientoP={gastosMantenimientoP} gastoArrendamiento={gastoArrendamiento}
                        gastoArrendamientoP={gastoArrendamientoP} impuestos={impuestos} impuestosP={impuestosP}
                        gerencia={gerencia} gerenciaP={gerenciaP} gastosAdministracion={gastosAdministracion}
                        gastosAdministracionP={gastosAdministracionP} codigoMoneda={codigoMoneda} />
                </div>
                )}
            </div>
            )}

            {mostrarSeccion7 && (<div className='seccion'>
                <h3>RESULTADOS ECONÓMICOS</h3>
                <ResultadosEconomicos validacion6={validacion6} codigoMoneda={codigoMoneda} gastosDirectos={gastosDirectos}
                    gastosEstructura={gastosEstructura} precioLeche={precioLeche} costoLitroCP={costoLitroCP}
                    resultadoOperativo={resultadoOperativo} resultadoOpHa={resultadoOpHa} resultadoOpLitro={resultadoOpLitro}
                    resultadoOpP={resultadoOpP} resultadoOpLeche={resultadoOpLeche} ingresoBruto={ingresoBruto}
                    gastosDirectosP={gastosDirectosP} gastosEstructuraP={gastosEstructuraP}
                />
                {validacion7 && (<div>
                    <GraficoIBGDGE resultadoOperativo={resultadoOperativo} gastosDirectos={gastosDirectos} gastosEstructura={gastosEstructura}
                        codigoMoneda={codigoMoneda} validacion6={validacion6}
                    />
                    <GraficoAplicacionIB validacion6={validacion6} codigoMoneda={codigoMoneda} resultadoOperativo={resultadoOperativo}
                        gastoManoDeObra={gastoManoDeObra} gastoReposicion={gastoReposicion} gastoAlimentacion={gastoAlimentacion}
                        gastoSuministro={gastoSuministro} gastosVeterinaria={gastosVeterinaria} gastosRodeo={gastosRodeo}
                        alquilerVacas={alquilerVacas} gastosTambo={gastosTambo}
                        gastosMantenimiento={gastosMantenimiento} gastoArrendamiento={gastoArrendamiento}
                        impuestos={impuestos} gerencia={gerencia} gastosAdministracion={gastosAdministracion}
                    />

                </div>)}
                <PDFDownloadLink document={<ReportePDF nombreCaso={nombreCaso} vacasOrdeno={vacasOrdeno} vacasSecas={vacasSecas}
                    superficieVT={superficieVT} lecheVendida={lecheVendida}
                />} fileName="reporte.pdf">
                    {({ blob, url, loading, error }) => (loading ? 'Cargando documento...' : 'Descargar reporte PDF')}
                </PDFDownloadLink>
                <hr></hr>
                <BotonReset />
            </div>)}

        </div>
    )
}

export default IngresoDatos;