import React, { useState, useEffect } from 'react'
import BotonReset from './BotonReset'
import { Tooltip } from 'react-tooltip'
import IndicadoresFisicos from './IndicadoresFisicos'
import divisas from './Divisas'
import IngresosBrutos from './IngresosBrutos'
import ManoDeObra from './ManoDeObra'
import Reposicion from './Reposicion'
import OtrosGastosDirectos from './OtrosGastosDirectos'

function IngresoDatos() {

    //Datos que se ingresan
    const [vacasOrdeno, setVacasOrdeno] = useState('');
    const [vacasSecas, setVacasSecas] = useState('');
    const [superficieVT, setSuperficieVT] = useState('');
    const [lecheVendida, setLecheVendida] = useState('');
    
    const [mostrarSeccion2, setMostrarSeccion2] = useState(false);
    const [mostrarSeccion3, setMostrarSeccion3] = useState(false);
    const [mostrarSeccion4, setMostrarSeccion4] = useState(false);
    const [mostrarSeccion5, setMostrarSeccion5] = useState(false);
    const [mostrarSeccion6, setMostrarSeccion6] = useState(false);

    const [currency, setCurrency] = useState("Peso argentino");
    const [codigoMoneda, setCodigoMoneda] = useState("ARS");
    const datosDropDown1 = divisas.map(item => item.currency);

    const [precioLeche, setPrecioLeche] = useState('');
    const [ingresoCarne, setIngresoCarne] = useState('');
    
    const [gastoManoDeObraP, setGastoManoDeObraP] = useState('');
    const [cantidadOperarios, setCantidadOperarios] = useState('');

    const [precioVaquillona, setPrecioVaquillona] = useState('');
    const [cantidadVaquillonas, setCantidadVaquillonas] = useState('');

    const [gastoAlimentacionP, setGastoAlimentacionP] = useState('');
    const [gastoSuministroP, setGastoSuministroP] = useState('');
    const [gastosVeterinariaP, setGastosVeterinariaP] = useState('');
    const [gastosTamboP, setGastosTamboP] = useState('');
    
    const [nombreCaso, setNombreCaso] = useState('');

    //Cálculos sección 1
    const lecheVendidaDia = (parseFloat(lecheVendida)/365).toFixed(0);
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
    const gastoManoDeObra = (parseFloat(gastoManoDeObraP)/100 * parseFloat(ingresoLeche)).toFixed(0);
    const gastoPorOperario = (parseFloat(gastoManoDeObra)/parseFloat(cantidadOperarios)).toFixed(0);
    const gastoPorOperarioP = (parseFloat(gastoManoDeObraP)/parseFloat(cantidadOperarios)).toFixed(1);

    //Cálculos sección 4
    const vacasTotales = (parseFloat(vacasOrdeno) + parseFloat(vacasSecas)).toFixed(0);
    const porcentajeReposicion = (parseFloat(cantidadVaquillonas) / parseFloat(vacasTotales) * 100).toFixed(1);
    const gastoReposicion = (parseFloat(precioVaquillona) * parseFloat(cantidadVaquillonas) * parseFloat(precioLeche)).toFixed(0);
    const gastoReposicionP = (parseFloat(gastoReposicion) / parseFloat(ingresoLeche) * 100).toFixed(1);

    //Cálculos sección 5
    const gastoAlimentacion = (parseFloat(gastoAlimentacionP) * parseFloat(ingresoBruto)).toFixed(0);
    const gastoSuministro = (parseFloat(gastoSuministroP) * parseFloat(ingresoBruto)).toFixed(0);
    const gastosVeterinaria = (parseFloat(gastosVeterinariaP) * parseFloat(ingresoBruto)).toFixed(0);
    const gastosTambo = (parseFloat(gastosTamboP) * parseFloat(ingresoBruto)).toFixed(0);

    //Datos para validaciones
    let formatoEnteroPositivo = /^[1-9]\d*$/;
    let formatoPorcentaje = /^(100(\.0{1,2})?|[1-9]\d?(\.\d{1,2})?|0(\.[1-9]\d?)?|0)$/;
    let formatoFloatPositivo = /^\d+(?:.\d+)?$/
    let validacion1 = true;
    let validacion2 = true;
    let validacion3 = true;
    let validacion4 = true;
    let validacion5 = true;

    //Validación 1
    if (!formatoEnteroPositivo.test(vacasOrdeno) || !formatoEnteroPositivo.test(vacasSecas) ||
        !formatoFloatPositivo.test(superficieVT) || !formatoEnteroPositivo.test(lecheVendida)) {
        validacion1 = false;
    }

    //Validación 2

    if (!formatoFloatPositivo.test(precioLeche) || !formatoEnteroPositivo.test(ingresoCarne) || codigoMoneda === '') {
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

    //Validacion 5
    if (!formatoPorcentaje.test(gastoAlimentacionP) || !formatoPorcentaje.test(gastoSuministroP)) {
        validacion5 = false;
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

    const handlePrecioLecheChange = (e) => {
        setPrecioLeche(e.target.value);
    };

    const handleIngresoCarneChange = (e) => {
        setIngresoCarne(e.target.value);
    };

    //Sección 4 - Gasto en mano de obra

    const handleGastoManoDeObraChange = (e) => {
        setGastoManoDeObraP(e.target.value);
    };

    const handleCantidadOperariosChange = (e) => {
        setCantidadOperarios(e.target.value);
    };

    //Sección 5 - Gasto de reposición

    const handlePrecioVaquillonaChange = (e) => {
        setPrecioVaquillona(e.target.value);
    };

    const handleCantidadVaquillonasChange = (e) => {
        setCantidadVaquillonas(e.target.value);
    };

    //Sección 6 - Otros gastos directos

    const handleGastoAlimentacionChange = (e) => {
        setGastoAlimentacionP(e.target.value);
    };

    const handleGastoSuministroChange = (e) => {
        setGastoSuministroP(e.target.value);
    };

    const handleGastosVeterinariaChange = (e) => {
        setGastosVeterinariaP(e.target.value);
    };

    const handleGastosTamboChange = (e) => {
        setGastosTamboP(e.target.value);
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
                    <IndicadoresFisicos validacion1={validacion1} cargaAnimal={cargaAnimal}
                    produccionIndividual={produccionIndividual} relacionVOVT={relacionVOVT}
                    productividad={productividad} lecheVendidaDia={lecheVendidaDia}/>
                </div>)}
            </div>
            {mostrarSeccion2 && (<div className='seccion'>
                <h3>Cálculo de ingresos brutos:</h3>
                <div className='seccionFormulario'>
                    <label htmlFor="opcionesDropdown">Seleccione la moneda de trabajo: </label>
                    <select id="opcionesDropdown" value={currency} onChange={handleSelectChange}>
                        <option value="currency" style={{ display: "none" }}>Selecciona una opción</option>
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
                        <label id="precioLeche">Precio de la leche ({codigoMoneda}/litro): </label>
                        <input type='number' step="0.001" value={precioLeche} onChange={handlePrecioLecheChange} placeholder='Ingresar un precio por litro' />
                        <Tooltip anchorSelect="#precioLeche" place="top">
                            <p><b>Precio de la leche:</b></p>
                            <p>Precio promedio anual por litro de leche</p>
                            <p>Moneda seleccionada: {currency}</p>
                            <p>- Admite hasta tres decimales -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="ingresoCarne">Ingresos por venta de carne ({codigoMoneda}/año): </label>
                        <input type='number' value={ingresoCarne} onChange={handleIngresoCarneChange} placeholder='Ingresar un monto anual' />
                        <Tooltip anchorSelect="#ingresoCarne" place="top">
                            <p><b>Ingresos por venta de carne:</b></p>
                            <p>Estimación de los ingresos anuales</p>
                            <p>por venta de carne derivada del rodeo lechero</p>
                            <p>Moneda seleccionada: {currency}</p>
                            <p>- No ingresar decimales -</p>
                        </Tooltip>
                    </div>
                </form>
                {mostrarSeccion3 === false && (<div>
                    <button onClick={handleClick2}>Calcular</button>
                    <BotonReset />
                </div>)}
                {mostrarSeccion3 && (<div>
                    <IngresosBrutos validacion2={validacion2} ingresoLeche={ingresoLeche} ingresoCarne={ingresoCarne}
                    ingresoLecheP={ingresoLecheP} ingresoCarneP={ingresoCarneP} ingresoBruto={ingresoBruto}
                    ingresoBrutoP={ingresoBrutoP} codigoMoneda={codigoMoneda}/>
                </div>
                )}
            </div>
            )}
            {mostrarSeccion3 && (<div className='seccion'>
                <h3>Gasto en mano de obra:</h3>
                <form>
                    <div className='seccionFormulario'>
                        <label id="gastoManoDeObra">Gasto en mano de obra (% IB leche):</label>
                        <input type='number' step="0.1" value={gastoManoDeObraP} onChange={handleGastoManoDeObraChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#gastoManoDeObra" place="top">
                            <p><b>Gasto en mano de obra:</b></p>
                            <p>Ingresar un porcentaje sobre el</p>
                            <p>ingreso por venta de leche</p>
                            <p>- Admite un decimal -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="cantidadOperarios">Cantidad de operarios:</label>
                        <input type='number' step="0.1" value={cantidadOperarios} onChange={handleCantidadOperariosChange} placeholder='Ingresar una cantidad' />
                        <Tooltip anchorSelect="#cantidadOperarios" place="top">
                            <p><b>Cantidad de operarios:</b></p>
                            <p>Ingrese el número de personas afectadas</p>
                            <p>a las tareas de la producción de leche</p>
                            <p>Se puede poner fracción en caso de dedicación parcial</p>
                            <p>- Admite un decimal -</p>
                        </Tooltip>
                    </div>
                </form>
                {mostrarSeccion4 === false && (<div>
                    <button onClick={handleClick3}>Calcular</button>
                    <BotonReset />
                </div>)}
                {mostrarSeccion4 && (<div>
                    <ManoDeObra validacion3={validacion3} gastoManoDeObraP={gastoManoDeObraP}
                    gastoManoDeObra={gastoManoDeObra} gastoPorOperarioP={gastoPorOperarioP}
                    gastoPorOperario={gastoPorOperario} codigoMoneda={codigoMoneda}/>
                </div>
                )}
            </div>
            )}

            {mostrarSeccion4 && (<div className='seccion'>
                <h3>Gasto de reposición:</h3>
                <form>
                    <div className='seccionFormulario'>
                        <label id="precioVaquillona">Valor de vaquillona al parir (litros leche):</label>
                        <input type='number' value={precioVaquillona} onChange={handlePrecioVaquillonaChange} placeholder='Ingresar precio en litros de leche' />
                        <Tooltip anchorSelect="#precioVaquillona" place="top">
                            <p><b>Valor de vaquillona al parir:</b></p>
                            <p>Valor de mercado de una vaquillona adelantada</p>
                            <p>Expresado en litros de leche</p>
                            <p>- No ingresar decimales -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="cantidadVaquillonas">Vaquillonas ingresadas por año (cantidad):</label>
                        <input type='number' value={cantidadVaquillonas} onChange={handleCantidadVaquillonasChange} placeholder='Ingresar una cantidad' />
                        <Tooltip anchorSelect="#cantidadVaquillonas" place="top">
                            <p><b>Vaquillonas ingresadas por año:</b></p>
                            <p>Cantidad de vaquillonas de reposición</p>
                            <p>que ingresan por año al rodeo adulto</p>
                            <p>- No ingresar decimales -</p>
                        </Tooltip>
                    </div>
                </form>
                {mostrarSeccion5 === false && (<div>
                    <button onClick={handleClick4}>Calcular</button>
                    <BotonReset />
                </div>)}
                {mostrarSeccion5 && (<div>
                    <Reposicion validacion4={validacion4} porcentajeReposicion={porcentajeReposicion}
                    gastoReposicion={gastoReposicion} gastoReposicionP={gastoReposicionP}
                    codigoMoneda={codigoMoneda}/>
                </div>
                )}
            </div>
            )}

            {mostrarSeccion5 && (<div className='seccion'>
                <h3>Otros gastos directos:</h3>
                <form>
                    <div className='seccionFormulario'>
                        <label id="gastoAlimentacion">Gasto de alimentación VO+VS (% IB leche):</label>
                        <input type='number' step="0.1" value={gastoAlimentacionP} onChange={handleGastoAlimentacionChange} placeholder='Ingresar un porcentaje (0 - 100)'/>
                        <Tooltip anchorSelect="#gastoAlimentacion" place="top">
                            <p><b>Gasto de alimentación vacas ordeño y secas:</b></p>
                            <p>Expresado como porcentaje del ingreso por venta de leche</p>
                            <p>No incluye categorías jóvenes</p>
                            <p>- Admite un decimal -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="gastoSuministro">Gastos suministro y acarreos (% IB leche):</label>
                        <input type='number' step="0.1" value={gastoSuministroP} onChange={handleGastoSuministroChange} placeholder='Ingresar un porcentaje (0 - 100)'/>
                        <Tooltip anchorSelect="#gastoSuministro" place="top">
                            <p><b>Gastos de suministro y acarreos:</b></p>
                            <p>Gastos en combustible y mantenimiento de la</p>
                            <p>maquinaria relacionada con la alimentación</p>
                            <p>Expresado como porcentaje del ingreso por venta de leche</p>
                            <p>- Admite un decimal -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="gastosVeterinaria">Gastos veterinaria y rodeo (% IB leche):</label>
                        <input type='number' step="0.1" value={gastosVeterinariaP} onChange={handleGastosVeterinariaChange} placeholder='Ingresar un porcentaje (0 - 100)'/>
                        <Tooltip anchorSelect="#gastosVeterinaria" place="top">
                            <p><b>Gastos veterinaria y rodeo:</b></p>
                            <p>Veterinario, insumos veterinarios, sanidad oficial,</p>
                            <p>semen, mantenimiento termo, insumos para reproducción,</p>
                            <p>alquiler de vacas y cualquier otro gasto de rodeo</p>
                            <p>Expresado como porcentaje del ingreso por venta de leche</p>
                            <p>- Admite un decimal -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="gastosTambo">Gastos de ordeño (% IB leche):</label>
                        <input type='number' step="0.1" value={gastosTamboP} onChange={handleGastosTamboChange} placeholder='Ingresar un porcentaje (0 - 100)'/>
                        <Tooltip anchorSelect="#gastosVeterinaria" place="top">
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
                    <button onClick={handleClick5}>Calcular</button>
                    <BotonReset />
                </div>)}
                {mostrarSeccion6 && (<div>
                    <OtrosGastosDirectos validacion5={validacion5} gastoAlimentacion={gastoAlimentacion}
                    gastoAlimentacionP={gastoAlimentacionP} gastoSuministro={gastoSuministro} gastoSuministroP={gastoSuministroP}
                    gastosVeterinaria={gastosVeterinaria} gastosVeterinariaP={gastosVeterinariaP} gastosTambo={gastosTambo} gastosTamboP={gastosTamboP} codigoMoneda={codigoMoneda}/>
                </div>
                )}
            </div>
            )}

            {mostrarSeccion4 && (<div className='seccion'>
                <h3>Resultados:</h3>
                <p>RESULTADOS 2</p>
                <BotonReset />
            </div>)}
        </div>
    )
}

export default IngresoDatos;