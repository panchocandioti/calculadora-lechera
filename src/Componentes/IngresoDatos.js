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

    const [ventaVacas, setVentaVacas] = useState(false);
    const [ventaToros, setVentaToros] = useState(false);
    const [ventaToritos, setVentaToritos] = useState(false);
    const [ventaTerneros, setVentaTerneros] = useState(false);
    const [ventaTerneras, setVentaTerneras] = useState(false);
    const [ventaVaquillonas, setVentaVaquillonas] = useState(false);

    const [vacasCab, setVacasCab] = useState(0);
    const [torosCab, setTorosCab] = useState(0);
    const [toritosCab, setToritosCab] = useState(0);
    const [ternerosCab, setTernerosCab] = useState(0);
    const [ternerasCab, setTernerasCab] = useState(0);
    const [vaquillonasCab, setVaquillonasCab] = useState(0);
    const [vacasPeso, setVacasPeso] = useState(0);
    const [torosPeso, setTorosPeso] = useState(0);
    const [toritosPeso, setToritosPeso] = useState(0);
    const [ternerosPeso, setTernerosPeso] = useState(0);
    const [ternerasPeso, setTernerasPeso] = useState(0);
    const [vaquillonasPeso, setVaquillonasPeso] = useState(0);

    const [mostrarSeccion2, setMostrarSeccion2] = useState(false);
    const [mostrarSeccion3, setMostrarSeccion3] = useState(false);
    const [mostrarSeccion4, setMostrarSeccion4] = useState(false);
    const [mostrarSeccion5, setMostrarSeccion5] = useState(false);
    const [mostrarSeccion6, setMostrarSeccion6] = useState(false);
    const [mostrarSeccion7, setMostrarSeccion7] = useState(false);
    const [graficosEnMoneda, setGraficosEnMoneda] = useState(true);

    const [currency1, setCurrency1] = useState("Peso argentino");
    const [currency2, setCurrency2] = useState("Dólar estadounidense");
    const [currency, setCurrency] = useState("Peso argentino");
    const [codigoMoneda1, setCodigoMoneda1] = useState("ARS");
    const [codigoMoneda2, setCodigoMoneda2] = useState("USD");
    const [codigoMoneda, setCodigoMoneda] = useState("ARS");
    const datosDropDown1 = divisas.map(item => item.currency);
    const [tipoCambio, setTipoCambio] = useState('');
    const [cambiarMoneda, setCambiarMoneda] = useState(true);

    const [precioLeche, setPrecioLeche] = useState('');
    const [precioVacas, setPrecioVacas] = useState('');
    const [precioToros, setPrecioToros] = useState('');
    const [precioToritos, setPrecioToritos] = useState('');
    const [precioTerneros, setPrecioTerneros] = useState('');
    const [precioTerneras, setPrecioTerneras] = useState('');
    const [precioVqLitros, setPrecioVqLitros] = useState('');
    const [precioVaquillonas, setPrecioVaquillonas] = useState('');

    const [gastoManoDeObraP, setGastoManoDeObraP] = useState('');
    const [cantidadOperarios, setCantidadOperarios] = useState('');

    const [costoVaquillona, setCostoVaquillona] = useState('');
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

    const [forzador, setForzador] = useState(false);

    //Cálculos sección 1
    const lecheVendidaDia = (parseFloat(lecheVendida) / 365).toFixed(0);
    const cargaAnimal = ((parseFloat(vacasOrdeno) + parseFloat(vacasSecas)) / parseFloat(superficieVT)).toFixed(2);
    const produccionIndividual = ((parseFloat(lecheVendida) / 365) / parseFloat(vacasOrdeno)).toFixed(1);
    const relacionVOVT = ((parseFloat(vacasOrdeno) / (parseFloat(vacasOrdeno) + parseFloat(vacasSecas)) * 100)).toFixed(1);
    const productividad = (parseFloat(lecheVendida) / parseFloat(superficieVT)).toFixed(0);
    const kilosVacas = ((parseFloat(vacasCab) * parseFloat(vacasPeso)).toFixed(0));
    const kilosToros = ((parseFloat(torosCab) * parseFloat(torosPeso)).toFixed(0));
    const kilosToritos = ((parseFloat(toritosCab) * parseFloat(toritosPeso)).toFixed(0));
    const kilosTerneros = ((parseFloat(ternerosCab) * parseFloat(ternerosPeso)).toFixed(0));
    const kilosTerneras = ((parseFloat(ternerasCab) * parseFloat(ternerasPeso)).toFixed(0));
    const kilosVaquillonas = ((parseFloat(vaquillonasCab) * parseFloat(vaquillonasPeso)).toFixed(0));
    const kilosCarne = (parseFloat(kilosVacas) + parseFloat(kilosToros) + parseFloat(kilosToritos) + parseFloat(kilosTerneros)
        + parseFloat(kilosTerneras) + parseFloat(kilosVaquillonas)).toFixed(0);
    const productividadCarne = ((parseFloat(kilosCarne) / parseFloat(superficieVT)).toFixed(0));
    const vacasTotales = (parseFloat(vacasOrdeno) + parseFloat(vacasSecas)).toFixed(0);
    const rechazoVacas = (parseFloat(vacasCab) / parseFloat(vacasTotales) * 100).toFixed(1);
    const cabezasVendidas = (parseFloat(vacasCab) + parseFloat(torosCab) + parseFloat(toritosCab) +
    parseFloat(ternerosCab) + parseFloat(ternerasCab) + parseFloat(vaquillonasCab)).toFixed(0);

    //Cálculos sección 2
    const ingresoLeche = (parseFloat(lecheVendida) * parseFloat(precioLeche)).toFixed(0);
    const ingresoVq = (parseFloat(vaquillonasCab) * parseFloat(precioVqLitros) * parseFloat(precioLeche)).toFixed(0);
    const ingresoCarne = (parseFloat(kilosVacas) * parseFloat(precioVacas) + parseFloat(kilosToros) * parseFloat(precioToros) +
        parseFloat(kilosToritos) * parseFloat(precioToritos) + parseFloat(kilosTerneros) * parseFloat(precioTerneros) +
        parseFloat(kilosTerneras) * parseFloat(precioTerneras)).toFixed(0);
    const ingresoBruto = (parseFloat(ingresoLeche) + parseFloat(ingresoCarne) + parseFloat(ingresoVq)).toFixed(0);
    const ingresoLecheP = (parseFloat(ingresoLeche) / parseFloat(ingresoBruto) * 100).toFixed(1);
    const ingresoCarneP = (parseFloat(ingresoCarne) / parseFloat(ingresoBruto) * 100).toFixed(1);
    const ingresoVqP = (parseFloat(ingresoVq) / parseFloat(ingresoBruto) * 100).toFixed(1);
    const ingresoBrutoP = (100).toFixed(1);
    const precioVqCabeza = (parseFloat(precioVqLitros) * parseFloat(precioLeche)).toFixed(0);

    //Cálculos sección 3
    const gastoManoDeObra = (parseFloat(gastoManoDeObraP) / 100 * parseFloat(ingresoLeche)).toFixed(0);
    const gastoPorOperario = (parseFloat(gastoManoDeObra) / parseFloat(cantidadOperarios)).toFixed(0);
    const gastoPorOperarioP = (parseFloat(gastoManoDeObraP) / parseFloat(cantidadOperarios)).toFixed(1);

    //Cálculos sección 4

    const porcentajeReposicion = (parseFloat(cantidadVaquillonas) / parseFloat(vacasTotales) * 100).toFixed(1);
    const gastoReposicion = (parseFloat(costoVaquillona) * parseFloat(cantidadVaquillonas) * parseFloat(precioLeche)).toFixed(0);
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
    const costoLitroCP = ((parseFloat(gastosDirectos) + parseFloat(gastosEstructura) - parseFloat(ingresoCarne) - parseFloat(ingresoVq)) / parseFloat(lecheVendida)).toFixed(3);
    const resultadoOpLitro = (parseFloat(resultadoOperativo) / parseFloat(lecheVendida)).toFixed(3);
    const resultadoOpHa = (parseFloat(resultadoOperativo) / parseFloat(superficieVT)).toFixed(0);
    const resultadoOpP = (parseFloat(resultadoOperativo) / parseFloat(ingresoBruto) * 100).toFixed(1);
    const gastosDirectosP = (parseFloat(gastosDirectos) / parseFloat(ingresoBruto) * 100).toFixed(1);
    const gastosEstructuraP = (parseFloat(gastosEstructura) / parseFloat(ingresoBruto) * 100).toFixed(1);
    const resultadoOpLeche = (parseFloat(resultadoOperativo) / parseFloat(precioLeche) / parseFloat(superficieVT)).toFixed(0);
    const resultadoOpVT = (parseFloat(resultadoOperativo) / parseFloat(vacasTotales)).toFixed(0);
    const resultadoOpLecheVT = (parseFloat(resultadoOperativo) / parseFloat(precioLeche) / parseFloat(vacasTotales)).toFixed(0);
    const gastosDirectosLitro = (parseFloat(gastosDirectos) / parseFloat(lecheVendida)).toFixed(3);
    const gastosEstructuraLitro = (parseFloat(gastosEstructura) / parseFloat(lecheVendida)).toFixed(3);
    const recuperoCarneLitro = ((parseFloat(ingresoCarne) + parseFloat(ingresoVq)) / parseFloat(lecheVendida)).toFixed(3);

    //Datos para validaciones
    let formatoEnteroPositivo = /^[1-9]\d*$/;
    let formatoEntero = /^[0-9]\d*$/
    let formatoPorcentaje = /^(100(\.0{1,2})?|[1-9]\d?(\.\d{1,2})?|0(\.[1-9]\d?)?|0)$/;
    let formatoFloatPositivo = /^(0*[1-9]\d*\.?\d*|0\.\d*[1-9]\d*)$/
    let validacion1 = true;
    let validacion2 = true;
    let validacion3 = true;
    let validacion4 = true;
    let validacion5 = true;
    let validacion6 = true;
    let validacion7 = true;

    //Validación 1
    if (!formatoEnteroPositivo.test(vacasOrdeno) || !formatoEnteroPositivo.test(vacasSecas) ||
        !formatoFloatPositivo.test(superficieVT) || !formatoEnteroPositivo.test(lecheVendida) ||
        !formatoEntero.test(kilosCarne)) {
        validacion1 = false;
    }

    if ((ventaVacas === true && kilosVacas == 0) || (ventaToros === true && kilosToros == 0) ||
        (ventaToritos === true && kilosToritos == 0) || (ventaTerneros === true && kilosTerneros == 0) ||
        (ventaTerneras === true && kilosTerneras == 0) || (ventaVaquillonas === true && kilosVaquillonas == 0) ||
        productividadCarne == 0) {
        validacion1 = false;
    }

    //Validación 2

    if (!formatoFloatPositivo.test(precioLeche) || !formatoEntero.test(ingresoCarne) || !formatoEntero.test(ingresoVq)
        || codigoMoneda === '') {
        validacion2 = false;
    }

    if ((ventaVacas === true && !formatoFloatPositivo.test(precioVacas)) || (ventaToros === true && !formatoFloatPositivo.test(precioToros)) ||
        (ventaToritos === true && !formatoFloatPositivo.test(precioToritos)) || (ventaTerneros === true && !formatoFloatPositivo.test(precioTerneros)) ||
        (ventaTerneras === true && !formatoFloatPositivo.test(precioTerneras)) || (ventaVaquillonas === true && !formatoFloatPositivo.test(precioVqLitros))) {
        validacion2 = false;
    }

    //Validación 3

    if (!formatoPorcentaje.test(gastoManoDeObraP) || !formatoFloatPositivo.test(cantidadOperarios)) {
        validacion3 = false;
    }

    //Validación 4
    if (!formatoEnteroPositivo.test(cantidadVaquillonas) || !formatoEnteroPositivo.test(costoVaquillona)) {
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

    //selección de categorías de venta
    const handleVentaVacasChange = () => {
        setVentaVacas(prevstate => !prevstate);
    };

    const handleVentaTorosChange = () => {
        setVentaToros(prevstate => !prevstate);
    };

    const handleVentaToritosChange = () => {
        setVentaToritos(prevstate => !prevstate);
    };

    const handleVentaTernerosChange = () => {
        setVentaTerneros(prevstate => !prevstate);
    };

    const handleVentaTernerasChange = () => {
        setVentaTerneras(prevstate => !prevstate);
    };

    const handleVentaVaquillonasChange = () => {
        setVentaVaquillonas(prevstate => !prevstate);
    };

    //datos de animales de venta
    const handleVacasCabChange = (e) => {
        setVacasCab(e.target.value);
    };

    const handleVacasPesoChange = (e) => {
        setVacasPeso(e.target.value);
    };

    const handleTorosCabChange = (e) => {
        setTorosCab(e.target.value);
    };

    const handleTorosPesoChange = (e) => {
        setTorosPeso(e.target.value);
    };

    const handleToritosCabChange = (e) => {
        setToritosCab(e.target.value);
    };

    const handleToritosPesoChange = (e) => {
        setToritosPeso(e.target.value);
    };

    const handleTernerosCabChange = (e) => {
        setTernerosCab(e.target.value);
    };

    const handleTernerosPesoChange = (e) => {
        setTernerosPeso(e.target.value);
    };

    const handleTernerasCabChange = (e) => {
        setTernerasCab(e.target.value);
    };

    const handleTernerasPesoChange = (e) => {
        setTernerasPeso(e.target.value);
    };

    const handleVaquillonasCabChange = (e) => {
        setVaquillonasCab(e.target.value);
    };

    const handleVaquillonasPesoChange = (e) => {
        setVaquillonasPeso(e.target.value);
    };

    useEffect(() => {
        if (ventaVacas === false) {
            setVacasCab(0);
            setVacasPeso(0);
            setPrecioVacas(0);
        }
    }, [ventaVacas, forzador]);


    useEffect(() => {
        if (ventaToros === false) {
            setTorosCab(0);
            setTorosPeso(0);
            setPrecioToros(0);
        }
    }, [ventaToros, forzador]);

    useEffect(() => {
        if (ventaToritos === false) {
            setToritosCab(0);
            setToritosPeso(0);
            setPrecioToritos(0);
        }
    }, [ventaToritos, forzador]);

    useEffect(() => {
        if (ventaTerneros === false) {
            setTernerosCab(0);
            setTernerosPeso(0);
            setPrecioTerneros(0);
        }
    }, [ventaTerneros, forzador]);

    useEffect(() => {
        if (ventaTerneras === false) {
            setTernerasCab(0);
            setTernerasPeso(0);
            setPrecioTerneras(0);
        }
    }, [ventaTerneras, forzador]);

    useEffect(() => {
        if (ventaVaquillonas === false) {
            setVaquillonasCab(0);
            setVaquillonasPeso(0);
            setPrecioVaquillonas(0);
            if (validacion1 === true) {
                setPrecioVqLitros(0);
            }
        }
    }, [ventaVaquillonas, forzador]);

    const handleClick1 = () => {
        if (validacion1) {
            setForzador(prevstate => !prevstate);
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
            setPrecioLeche((parseFloat(precioLeche) * parseFloat(tipoCambio)).toFixed(3));
            setPrecioVacas((parseFloat(precioVacas) * parseFloat(tipoCambio)).toFixed(3));
            setPrecioToros((parseFloat(precioToros) * parseFloat(tipoCambio)).toFixed(3));
            setPrecioToritos((parseFloat(precioToritos) * parseFloat(tipoCambio)).toFixed(3));
            setPrecioTerneros((parseFloat(precioTerneros) * parseFloat(tipoCambio)).toFixed(3));
            setPrecioTerneras((parseFloat(precioTerneras) * parseFloat(tipoCambio)).toFixed(3));
            setPrecioVaquillonas((parseFloat(precioVaquillonas) * parseFloat(tipoCambio)).toFixed(3));
        }
        if (cambiarMoneda === false) {
            setPrecioLeche((parseFloat(precioLeche) / parseFloat(tipoCambio)).toFixed(3));
            setPrecioVacas((parseFloat(precioVacas) / parseFloat(tipoCambio)).toFixed(3));
            setPrecioToros((parseFloat(precioToros) / parseFloat(tipoCambio)).toFixed(3));
            setPrecioToritos((parseFloat(precioToritos) / parseFloat(tipoCambio)).toFixed(3));
            setPrecioTerneros((parseFloat(precioTerneros) / parseFloat(tipoCambio)).toFixed(3));
            setPrecioTerneras((parseFloat(precioTerneras) / parseFloat(tipoCambio)).toFixed(3));
            setPrecioVaquillonas((parseFloat(precioVaquillonas) / parseFloat(tipoCambio)).toFixed(3));
        }
    }, [currency, codigoMoneda]);

    const handlePrecioLecheChange = (e) => {
        setPrecioLeche(e.target.value);
    };

    const handlePrecioVacasChange = (e) => {
        setPrecioVacas(e.target.value);
    };

    const handlePrecioTorosChange = (e) => {
        setPrecioToros(e.target.value);
    };

    const handlePrecioToritosChange = (e) => {
        setPrecioToritos(e.target.value);
    };

    const handlePrecioTernerosChange = (e) => {
        setPrecioTerneros(e.target.value);
    };

    const handlePrecioTernerasChange = (e) => {
        setPrecioTerneras(e.target.value);
    };

    const handlePrecioVqLitrosChange = (e) => {
        setPrecioVqLitros(e.target.value);
    };

    useEffect(() => {
        setPrecioVaquillonas((parseFloat(precioVqCabeza) / parseFloat(vaquillonasPeso)).toFixed(2));
    }, [precioVqCabeza, precioVqLitros]);

    //Sección 3 - Gasto en mano de obra

    const handleGastoManoDeObraChange = (e) => {
        setGastoManoDeObraP(e.target.value);
    };

    const handleCantidadOperariosChange = (e) => {
        setCantidadOperarios(e.target.value);
    };

    //Sección 4 - Gasto de reposición

    const handleCostoVaquillonaChange = (e) => {
        setCostoVaquillona(e.target.value);
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

    const handleClickGraficosCambio = () => {
        setGraficosEnMoneda(prevstate => !prevstate);
    }



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
                        <label id="superficieVT">Superficie vaca total (hectáreas VT): </label>
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
                    <label id="categoriasVenta">Venta de carne (categorías de venta) </label>
                    <Tooltip anchorSelect="#categoriasVenta" place="top" className='tooltip'>
                        <p><b>Categorías de venta:</b></p>
                        <p>Seleccione las categorías animales</p>
                        <p>que exporta el establecimiento</p>
                        <p>(venta, cesión, etc.)</p>
                    </Tooltip>
                    <div className='checklist'>
                        <div className='check'>
                            <label>Vacas</label>
                            <input
                                className='checkbox'
                                type="checkbox"
                                checked={ventaVacas}
                                onChange={handleVentaVacasChange}
                            />
                        </div>
                        <div className='check'>
                            <label>Toros</label>
                            <input
                                className='checkbox'
                                type="checkbox"
                                checked={ventaToros}
                                onChange={handleVentaTorosChange}
                            />
                        </div>
                        <div className='check'>
                            <label>Toritos</label>
                            <input
                                className='checkbox'
                                type="checkbox"
                                checked={ventaToritos}
                                onChange={handleVentaToritosChange}
                            />
                        </div>
                        <div className='check'>
                            <label>Terneros</label>
                            <input
                                className='checkbox'
                                type="checkbox"
                                checked={ventaTerneros}
                                onChange={handleVentaTernerosChange}
                            />
                        </div>
                        <div className='check'>
                            <label>Terneras</label>
                            <input
                                className='checkbox'
                                type="checkbox"
                                checked={ventaTerneras}
                                onChange={handleVentaTernerasChange}
                            />
                        </div>
                        <div className='check'>
                            <label>Vaquillonas</label>
                            <input
                                className='checkbox'
                                type="checkbox"
                                checked={ventaVaquillonas}
                                onChange={handleVentaVaquillonasChange}
                            />
                        </div>
                    </div>
                    <div className='seccionFormulario'>
                        <div>{(ventaVacas || ventaToros || ventaToritos || ventaTerneros || ventaTerneras
                            || ventaVaquillonas) && (<div>
                                <label id="datosVentaCarne">Cabezas y peso promedio por categoría</label>
                                <Tooltip anchorSelect="#datosVentaCarne" place="top" className='tooltip'>
                                    <p><b>Cabezas y peso promedio:</b></p>
                                    <p>Para cada categoría consignar</p>
                                    <p>cantidad de animales exportados</p>
                                    <p>y peso promedio en kilogramos</p>
                                    <p>- Admite un decimal -</p>
                                </Tooltip>
                                <div className='ventasAnimales'>
                                    <div className='seccionVentaAnimales'>Categoría</div>
                                    <div className='seccionVentaAnimales'>Cabezas</div>
                                    <div className='seccionVentaAnimales'>Kg/Cabeza</div>
                                    <div className='seccionVentaAnimales'>Kg/Categ.</div>
                                </div>
                            </div>)}
                        </div>
                        <div>{ventaVacas && (
                            <div className='ventasAnimales'>
                                <div className='seccionVentaAnimales'>Vacas</div>
                                <div className='seccionVentaAnimales'>
                                    <input className='datosInputVenta' type='number' value={vacasCab} onChange={handleVacasCabChange} />
                                </div>
                                <div className='seccionVentaAnimales'>
                                    <input className='datosInputVenta' type='number' value={vacasPeso} onChange={handleVacasPesoChange} />
                                </div>
                                <div className='seccionVentaAnimales'>{kilosVacas}</div>
                            </div>)}
                        </div>
                        <div>{ventaToros && (
                            <div className='ventasAnimales'>
                                <div className='seccionVentaAnimales'>Toros</div>
                                <div className='seccionVentaAnimales'>
                                    <input className='datosInputVenta' type='number' value={torosCab} onChange={handleTorosCabChange} />
                                </div>
                                <div className='seccionVentaAnimales'>
                                    <input className='datosInputVenta' type='number' value={torosPeso} onChange={handleTorosPesoChange} />
                                </div>
                                <div className='seccionVentaAnimales'>{kilosToros}</div>
                            </div>)}
                        </div>
                        <div>{ventaToritos && (
                            <div className='ventasAnimales'>
                                <div className='seccionVentaAnimales'>Toritos</div>
                                <div className='seccionVentaAnimales'>
                                    <input className='datosInputVenta' type='number' value={toritosCab} onChange={handleToritosCabChange} />
                                </div>
                                <div className='seccionVentaAnimales'>
                                    <input className='datosInputVenta' type='number' value={toritosPeso} onChange={handleToritosPesoChange} />
                                </div>
                                <div className='seccionVentaAnimales'>{kilosToritos}</div>
                            </div>)}
                        </div>
                        <div>{ventaTerneros && (
                            <div className='ventasAnimales'>
                                <div className='seccionVentaAnimales'>Terneros</div>
                                <div className='seccionVentaAnimales'>
                                    <input className='datosInputVenta' type='number' value={ternerosCab} onChange={handleTernerosCabChange} />
                                </div>
                                <div className='seccionVentaAnimales'>
                                    <input className='datosInputVenta' type='number' value={ternerosPeso} onChange={handleTernerosPesoChange} />
                                </div>
                                <div className='seccionVentaAnimales'>{kilosTerneros}</div>
                            </div>)}
                        </div>
                        <div>{ventaTerneras && (
                            <div className='ventasAnimales'>
                                <div className='seccionVentaAnimales'>Terneras</div>
                                <div className='seccionVentaAnimales'>
                                    <input className='datosInputVenta' type='number' value={ternerasCab} onChange={handleTernerasCabChange} />
                                </div>
                                <div className='seccionVentaAnimales'>
                                    <input className='datosInputVenta' type='number' value={ternerasPeso} onChange={handleTernerasPesoChange} />
                                </div>
                                <div className='seccionVentaAnimales'>{kilosTerneras}</div>
                            </div>)}
                        </div>
                        <div>{ventaVaquillonas && (
                            <div className='ventasAnimales'>
                                <div className='seccionVentaAnimales'>Vaquillonas</div>
                                <div className='seccionVentaAnimales'>
                                    <input className='datosInputVenta' type='number' value={vaquillonasCab} onChange={handleVaquillonasCabChange} />
                                </div>
                                <div className='seccionVentaAnimales'>
                                    <input className='datosInputVenta' type='number' value={vaquillonasPeso} onChange={handleVaquillonasPesoChange} />
                                </div>
                                <div className='seccionVentaAnimales'>{kilosVaquillonas}</div>
                            </div>)}
                        </div>
                    </div>

                    {validacion3 && (<div>
                        <h3 style={{ color: "darkorange", backgroundColor: "lightyellow" }} id='advertencia'>ADVERTENCIA: Si cambia los litros, revise los porcentajes de los rubros de gastos</h3>
                        <Tooltip anchorSelect="#advertencia" place="top" className='tooltip'>
                            <p><b>ADVERTENCIA:</b></p>
                            <p>Todos los rubros de gastos se ingresaron como</p>
                            <p>porcentajes del ingreso por venta de leche.</p>
                            <p>Si se modifican los litros vendidos, cambiará el</p>
                            <p>ingreso por venta de leche y, por lo tanto, también</p>
                            <p>cambiarán en la misma proporción todos los gastos.</p>
                            <p>Revise todos los gastos si decide cambiar los litros.</p>
                        </Tooltip>
                    </div>)}
                </form>

                {mostrarSeccion2 === false && (<div>
                    <button onClick={handleClick1} className='button'>Calcular</button>
                    <BotonReset />
                </div>)}
                {mostrarSeccion2 && (<div>
                    <IndicadoresFisicos validacion1={validacion1} cargaAnimal={cargaAnimal}
                        produccionIndividual={produccionIndividual} relacionVOVT={relacionVOVT}
                        productividad={productividad} lecheVendidaDia={lecheVendidaDia}
                        kilosCarne={kilosCarne} productividadCarne={productividadCarne} rechazoVacas={rechazoVacas}
                        cabezasVendidas={cabezasVendidas} />
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
                        <a href={`https://www.xe.com/currencyconverter/convert/?Amount=1&From=${codigoMoneda2}&To=${codigoMoneda1}`} target="_blank" rel="noreferrer">Consultar conversor de monedas</a>
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
                    {validacion3 && (<div>
                        <h3 style={{ color: "darkorange", backgroundColor: "lightyellow" }} id="advertencia2">ADVERTENCIA: Si cambia el precio, revise los porcentajes de los rubros de gastos</h3>
                        <Tooltip anchorSelect="#advertencia2" place="top" className='tooltip'>
                            <p><b>ADVERTENCIA:</b></p>
                            <p>Todos los rubros de gastos se ingresaron como</p>
                            <p>porcentajes del ingreso por venta de leche.</p>
                            <p>Si se modifica el precio de la leche, cambiará el</p>
                            <p>ingreso por venta de leche y, por lo tanto, también</p>
                            <p>cambiarán en la misma proporción todos los gastos.</p>
                            <p>Revise todos los gastos si decide cambiar el precio.</p>
                        </Tooltip>
                    </div>)}
                    {ventaVacas && (<div className='seccionFormulario'>
                        <label id="precioVacas">Precio de venta vacas ({codigoMoneda}/kg): </label>
                        <input type='number' step="0.001" value={precioVacas} onChange={handlePrecioVacasChange} placeholder='Ingresar un precio por kilo' />
                        <Tooltip anchorSelect="#precioVacas" place="top" className='tooltip'>
                            <p><b>Precio de venta vacas:</b></p>
                            <p>Precio promedio por kilo</p>
                            <p>de las vacas vendidas en el año</p>
                            <p>Moneda seleccionada: {currency}</p>
                            <p>- Admite decimales -</p>
                        </Tooltip>
                    </div>)}
                    {ventaToros && (<div className='seccionFormulario'>
                        <label id="precioToros">Precio de venta toros ({codigoMoneda}/kg): </label>
                        <input type='number' step="0.001" value={precioToros} onChange={handlePrecioTorosChange} placeholder='Ingresar un precio por kilo' />
                        <Tooltip anchorSelect="#precioToros" place="top" className='tooltip'>
                            <p><b>Precio de venta toros:</b></p>
                            <p>Precio promedio por kilo</p>
                            <p>de los toros vendidos en el año</p>
                            <p>Moneda seleccionada: {currency}</p>
                            <p>- Admite decimales -</p>
                        </Tooltip>
                    </div>)}
                    {ventaToritos && (<div className='seccionFormulario'>
                        <label id="precioToritos">Precio de venta toritos ({codigoMoneda}/kg): </label>
                        <input type='number' step="0.001" value={precioToritos} onChange={handlePrecioToritosChange} placeholder='Ingresar un precio por kilo' />
                        <Tooltip anchorSelect="#precioToritos" place="top" className='tooltip'>
                            <p><b>Precio de venta toritos:</b></p>
                            <p>Precio promedio por kilo</p>
                            <p>de los toritos vendidos en el año</p>
                            <p>Moneda seleccionada: {currency}</p>
                            <p>- Admite decimales -</p>
                        </Tooltip>
                    </div>)}
                    {ventaTerneros && (<div className='seccionFormulario'>
                        <label id="precioTerneros">Precio de venta terneros ({codigoMoneda}/kg): </label>
                        <input type='number' step="0.001" value={precioTerneros} onChange={handlePrecioTernerosChange} placeholder='Ingresar un precio por kilo' />
                        <Tooltip anchorSelect="#precioTerneros" place="top" className='tooltip'>
                            <p><b>Precio de venta terneros:</b></p>
                            <p>Precio promedio por kilo</p>
                            <p>de los terneros vendidos en el año</p>
                            <p>Moneda seleccionada: {currency}</p>
                            <p>- Admite decimales -</p>
                        </Tooltip>
                    </div>)}
                    {ventaTerneras && (<div className='seccionFormulario'>
                        <label id="precioTerneras">Precio de venta terneras ({codigoMoneda}/kg): </label>
                        <input type='number' step="0.001" value={precioTerneras} onChange={handlePrecioTernerasChange} placeholder='Ingresar un precio por kilo' />
                        <Tooltip anchorSelect="#precioTerneras" place="top" className='tooltip'>
                            <p><b>Precio de venta terneras:</b></p>
                            <p>Precio promedio por kilo</p>
                            <p>de las terneras vendidas en el año</p>
                            <p>Moneda seleccionada: {currency}</p>
                            <p>- Admite decimales -</p>
                        </Tooltip>
                    </div>)}
                    {ventaVaquillonas && (<div className='seccionFormulario'>
                        <label id="precioVaquillonas">Precio de vaquillonas (litros leche/cabeza): </label>
                        <input type='number' value={precioVqLitros} onChange={handlePrecioVqLitrosChange} placeholder='Ingresar un precio por kilo' />
                        <Tooltip anchorSelect="#precioVaquillonas" place="top" className='tooltip'>
                            <p><b>Precio de venta vaquillonas:</b></p>
                            <p>Precio promedio por cabeza expresado</p>
                            <p>expresado en litros de leche</p>
                            <p>de las vaquillonas vendidas en el año</p>
                            <p>- No admite decimales -</p>
                        </Tooltip>
                        {(precioVqLitros > 0 && kilosVaquillonas > 0) && (<div className='checklist'>
                            <div className='opciones'><p>{new Intl.NumberFormat().format(precioVaquillonas)} {codigoMoneda}/kg</p></div>
                            <div className='opciones'><p>{new Intl.NumberFormat().format(precioVqCabeza)} {codigoMoneda}/cabeza</p></div>
                        </div>)}
                    </div>)}
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
                        ingresoLecheP={ingresoLecheP} ingresoCarneP={ingresoCarneP} ingresoVq={ingresoVq} ingresoVqP={ingresoVqP}
                        ingresoBruto={ingresoBruto} ingresoBrutoP={ingresoBrutoP} codigoMoneda={codigoMoneda} />
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
                        <input type='number' value={costoVaquillona} onChange={handleCostoVaquillonaChange} placeholder='Ingresar precio en litros de leche' />
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
                    <div className='seccionCompuesta'>
                        <div className='seccionOGD'>
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
                        <div className='seccionOGD'>
                            {gastoAlimentacionP === '' && (<h5 style={{ color: 'red' }}>0 {codigoMoneda}/VT/año</h5>)}
                            {gastoAlimentacionP !== '' && (<h5 style={{ color: 'red' }}>{new Intl.NumberFormat().format((parseFloat(gastoAlimentacion) / parseFloat(vacasTotales)).toFixed(0))} {codigoMoneda}/VT/año</h5>)}
                        </div>
                    </div>
                    <div className='seccionCompuesta'>
                        <div className='seccionOGD'>
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
                        <div className='seccionOGD'>
                            {gastoSuministroP === '' && (<h5 style={{ color: 'red' }}>0 {codigoMoneda}/VT/año</h5>)}
                            {gastoSuministroP !== '' && (<h5 style={{ color: 'red' }}>{new Intl.NumberFormat().format((parseFloat(gastoSuministro) / parseFloat(vacasTotales)).toFixed(0))} {codigoMoneda}/VT/año</h5>)}
                        </div>
                    </div>
                    <div className='seccionCompuesta'>
                        <div className='seccionOGD'>
                            <label id="gastosVeterinaria">Gastos sanidad animal (% IB leche):</label>
                            <input type='number' step="0.1" value={gastosVeterinariaP} onChange={handleGastosVeterinariaChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                            <Tooltip anchorSelect="#gastosVeterinaria" place="top" className='tooltip'>
                                <p><b>Gastos sanidad animal:</b></p>
                                <p>Veterinario, insumos veterinarios, sanidad oficial, etc.</p>
                                <p>Expresado como porcentaje del ingreso por venta de leche</p>
                                <p>- Admite un decimal -</p>
                            </Tooltip>
                        </div>
                        <div className='seccionOGD'>
                            {gastosVeterinariaP === '' && (<h5 style={{ color: 'red' }}>0 {codigoMoneda}/VT/año</h5>)}
                            {gastosVeterinariaP !== '' && (<h5 style={{ color: 'red' }}>{new Intl.NumberFormat().format((parseFloat(gastosVeterinaria) / parseFloat(vacasTotales)).toFixed(0))} {codigoMoneda}/VT/año</h5>)}
                        </div>
                    </div>
                    <div className='seccionCompuesta'>
                        <div className='seccionOGD'>
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
                        <div className='seccionOGD'>
                            {gastosRodeoP === '' && (<h5 style={{ color: 'red' }}>0 {codigoMoneda}/VT/año</h5>)}
                            {gastosRodeoP !== '' && (<h5 style={{ color: 'red' }}>{new Intl.NumberFormat().format((parseFloat(gastosRodeo) / parseFloat(vacasTotales)).toFixed(0))} {codigoMoneda}/VT/año</h5>)}
                        </div>
                    </div>
                    <div className='seccionCompuesta'>
                        <div className='seccionOGD'>
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
                        <div className='seccionOGD'>
                            {alquilerVacasP === '' && (<h5 style={{ color: 'red' }}>0 {codigoMoneda}/VT/año</h5>)}
                            {alquilerVacasP !== '' && (<h5 style={{ color: 'red' }}>{new Intl.NumberFormat().format((parseFloat(alquilerVacas) / parseFloat(vacasTotales)).toFixed(0))} {codigoMoneda}/VT/año</h5>)}
                        </div>
                    </div>
                    <div className='seccionCompuesta'>
                        <div className='seccionOGD'>
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
                        <div className='seccionOGD'>
                            {gastosTamboP === '' && (<h5 style={{ color: 'red' }}>0 {codigoMoneda}/VT/año</h5>)}
                            {gastosTamboP !== '' && (<h5 style={{ color: 'red' }}>{new Intl.NumberFormat().format((parseFloat(gastosTambo) / parseFloat(vacasTotales)).toFixed(0))} {codigoMoneda}/VT/año</h5>)}
                        </div>
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

            {mostrarSeccion7 && (<div className='seccion2'>
                <h3 id='resultadosEconomicos'>RESULTADOS ECONÓMICOS</h3>
                <Tooltip anchorSelect="#resultadosEconomicos" place="top" className='tooltip'>
                    <p><b>Definiciones:</b></p>
                    <p>INGRESOS BRUTOS: son los ingresos totales por ventas</p>
                    <p>(venta de leche + venta de carne derivada del rodeo lechero)</p>
                    <p>GASTOS DIRECTOS: son los que están directamente</p>
                    <p>relacionados con la producción (alimentación, ordeño,</p>
                    <p>mano de obra, sanidad, etc.)</p>
                    <p>GASTOS DE ESTRUCTURA: o indirectos, son aquellos gastos</p>
                    <p>centrales que la empresa tiene que afrontar siempre,</p>
                    <p>independientemente del nivel productivo (arrendamiento,</p>
                    <p>administración, etc.)</p>
                    <p>RESULTADO OPERATIVO: Es el saldo que queda luego de restar</p>
                    <p>los gastos (directos y de estructura) del ingreso bruto</p>
                </Tooltip>
                <ResultadosEconomicos validacion6={validacion6} codigoMoneda={codigoMoneda} gastosDirectos={gastosDirectos}
                    gastosEstructura={gastosEstructura} precioLeche={precioLeche} costoLitroCP={costoLitroCP}
                    resultadoOperativo={resultadoOperativo} resultadoOpHa={resultadoOpHa} resultadoOpLitro={resultadoOpLitro}
                    resultadoOpP={resultadoOpP} resultadoOpLeche={resultadoOpLeche} resultadoOpVT={resultadoOpVT}
                    resultadoOpLecheVT={resultadoOpLecheVT} ingresoBruto={ingresoBruto} gastosDirectosP={gastosDirectosP}
                    gastosEstructuraP={gastosEstructuraP} gastosDirectosLitro={gastosDirectosLitro} gastosEstructuraLitro={gastosEstructuraLitro}
                    recuperoCarneLitro={recuperoCarneLitro}
                />
                {validacion7 && (<div>
                    <GraficoIBGDGE resultadoOperativo={resultadoOperativo} gastosDirectos={gastosDirectos} gastosEstructura={gastosEstructura}
                        ingresoBruto={ingresoBruto} codigoMoneda={codigoMoneda} validacion6={validacion6} graficosEnMoneda={graficosEnMoneda}
                    />
                    <GraficoAplicacionIB validacion6={validacion6} codigoMoneda={codigoMoneda} resultadoOperativo={resultadoOperativo}
                        gastoManoDeObra={gastoManoDeObra} gastoReposicion={gastoReposicion} gastoAlimentacion={gastoAlimentacion}
                        gastoSuministro={gastoSuministro} gastosVeterinaria={gastosVeterinaria} gastosRodeo={gastosRodeo}
                        alquilerVacas={alquilerVacas} gastosTambo={gastosTambo}
                        gastosMantenimiento={gastosMantenimiento} gastoArrendamiento={gastoArrendamiento}
                        impuestos={impuestos} gerencia={gerencia} gastosAdministracion={gastosAdministracion}
                        graficosEnMoneda={graficosEnMoneda} ingresoBruto={ingresoBruto}
                    />
                    <button onClick={handleClickGraficosCambio}>{graficosEnMoneda === true ? 'Mostrar porcentajes en gráficos' : `Mostrar ${codigoMoneda} en gráficos`}</button>
                </div>)}
                <hr></hr>
                <div className='resultados'>
                    <PDFDownloadLink document={<ReportePDF nombreCaso={nombreCaso} vacasOrdeno={vacasOrdeno} vacasSecas={vacasSecas}
                        superficieVT={superficieVT} lecheVendida={lecheVendida} codigoMoneda={codigoMoneda} ingresoLeche={ingresoLeche}
                        ingresoCarne={ingresoCarne} ingresoVq={ingresoVq} ingresoBruto={ingresoBruto} gastoManoDeObra={gastoManoDeObra} gastoReposicion={gastoReposicion}
                        porcentajeReposicion={porcentajeReposicion} gastoAlimentacion={gastoAlimentacion} gastoSuministro={gastoSuministro}
                        gastosVeterinaria={gastosVeterinaria} gastosRodeo={gastosRodeo} alquilerVacas={alquilerVacas} gastosTambo={gastosTambo}
                        gastoPorOperario={gastoPorOperario} gastosMantenimiento={gastosMantenimiento} gastoArrendamiento={gastoArrendamiento}
                        impuestos={impuestos} gerencia={gerencia} gastosAdministracion={gastosAdministracion}
                        precioLeche={precioLeche} costoLitroCP={costoLitroCP} resultadoOpLitro={resultadoOpLitro}
                        gastosDirectos={gastosDirectos} gastosEstructura={gastosEstructura} resultadoOperativo={resultadoOperativo}
                        resultadoOpHa={resultadoOpHa} resultadoOpLeche={resultadoOpLeche} resultadoOpVT={resultadoOpVT}
                        resultadoOpLecheVT={resultadoOpLecheVT} vacasCab={vacasCab} vacasPeso={vacasPeso} torosCab={torosCab} torosPeso={torosPeso}
                        toritosCab={toritosCab} toritosPeso={toritosPeso} ternerosCab={ternerosCab} ternerosPeso={ternerosPeso} ternerasCab={ternerasCab}
                        ternerasPeso={ternerasPeso} vaquillonasCab={vaquillonasCab} vaquillonasPeso={vaquillonasPeso} rechazoVacas={rechazoVacas}
                        kilosCarne={kilosCarne} productividadCarne={productividadCarne} gastosDirectosLitro={gastosDirectosLitro}
                        gastosEstructuraLitro={gastosEstructuraLitro} recuperoCarneLitro={recuperoCarneLitro} kilosVacas={kilosVacas}
                        kilosToros={kilosToros} kilosToritos={kilosToritos} kilosTerneros={kilosTerneros} kilosTerneras={kilosTerneras}
                        kilosVaquillonas={kilosVaquillonas} cabezasVendidas={cabezasVendidas}
                    />} fileName="reporte.pdf">
                        {({ blob, url, loading, error }) => (loading ? 'Cargando documento...' : 'Descargar reporte PDF')}
                    </PDFDownloadLink>
                </div>

                <hr></hr>
                <BotonReset />
            </div>)}

        </div>
    )
}

export default IngresoDatos;