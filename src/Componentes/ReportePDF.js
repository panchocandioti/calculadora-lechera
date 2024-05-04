import React, { useState, useEffect } from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import LogoMiLecheria from "../Media/Imagotipo AZUL.png";
import LogoSaltoAgro from "../Media/LogoSaltoAgro.png";
import LogoUNLFCA from "../Media/logo-UNL-FCA.png";

const styles = StyleSheet.create({
    table: {
        width: '93%',
        margin: '5px 20px 5px',
        border: '1px solid #000',
        fontFamily: 'Helvetica',
        fontSize: '8.5',
    },
    tableLogos: {
        width: '36%',
        height: '8%',
        marginTop: '1%',
        marginLeft: '32.5%',
        border: 'none',
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableCell: {
        flex: 1,
        border: '1px solid #000',
        padding: 3.5,
        textAlign: 'left',
    },
    tableCell2: {
        flex: 1,
        border: '1px solid #000',
        padding: 3.5,
        textAlign: 'left',
        fontWeight: 'bold',
        backgroundColor: 'lightgray',
    },
    tableCellLogos: {
        flex: 1,
        border: 'none',
        padding: 4,
        textAlign: 'center',
    },
    title1: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '15',
    },
    title2: {
        textAlign: 'center',
        marginTop: '4px',
        fontWeight: 'bold',
        fontSize: '12',
    },
    title3: {
        textAlign: 'left',
        marginTop: '8px',
        fontSize: '10',
        marginLeft: '5%',
    },
    footer: {
        textAlign: 'center',
        fontSize: '10',
        marginTop: '8px',
    },
    plaintext: {
        textAlign: 'left',
        fontSize: '8.5',
        marginTop: '2px',
        marginBottom: '2px',
        marginLeft: '5%',
    }
});

function ReportePDF(props) {

    const [nombreCaso, setNombreCaso] = useState(props.nombreCaso);
    const [vacasOrdeno, setVacasOrdeno] = useState(props.vacasOrdeno);
    const [vacasSecas, setVacasSecas] = useState(props.vacasSecas);
    const [superficieVT, setSuperficieVT] = useState(props.superficieVT);
    const [lecheVendida, setLecheVendida] = useState(props.lecheVendida);
    const [codigoMoneda, setCodigoMoneda] = useState(props.codigoMoneda);
    const [ingresoLeche, setIngresoLeche] = useState(props.ingresoLeche);
    const [ingresoCarne, setIngresoCarne] = useState(props.ingresoCarne);
    const [ingresoVq, setIngresoVq] = useState(props.ingresoVq);
    const [ingresoBruto, setIngresoBruto] = useState(props.ingresoBruto);
    const [gastoManoDeObra, setGastoManoDeObra] = useState(props.gastoManoDeObra);
    const [gastoPorOperario, setGastoPorOperario] = useState(props.gastoPorOperario);
    const [gastoReposicion, setGastoReposicion] = useState(props.gastoReposicion);
    const [porcentajeReposicion, setPorcentajeReposicion] = useState(props.porcentajeReposicion);
    const [gastoAlimentacion, setGastoAlimentacion] = useState(props.gastoAlimentacion);
    const [gastoSuministro, setGastoSuministro] = useState(props.gastoSuministro);
    const [gastosVeterinaria, setGastosVeterinaria] = useState(props.gastosVeterinaria);
    const [gastosRodeo, setGastosRodeo] = useState(props.gastosRodeo);
    const [alquilerVacas, setAlquilerVacas] = useState(props.alquilerVacas);
    const [gastosTambo, setGastosTambo] = useState(props.setGastosTambo);
    const [gastosMantenimiento, setGastosMantenimiento] = useState(props.gastosMantenimiento);
    const [gastoArrendamiento, setGastoArrendamiento] = useState(props.gastoArrendamiento);
    const [impuestos, setImpuestos] = useState(props.impuestos);
    const [gerencia, setGerencia] = useState(props.gerencia);
    const [gastosAdministracion, setGastosAdministracion] = useState(props.gastosAdministracion);
    const [precioLeche, setPrecioLeche] = useState(props.precioLeche);
    const [costoLitroCP, setCostoLitroCP] = useState(props.costoLitroCP);
    const [resultadoOpLitro, setResultadoOpLitro] = useState(props.resultadoOpLitro);
    const [gastosDirectos, setGastosDirectos] = useState(props.gastosDirectos);
    const [gastosEstructura, setGastosEstructura] = useState(props.gastosEstructura);
    const [resultadoOperativo, setResultadoOperativo] = useState(props.resultadoOperativo);
    const [resultadoOpHa, setResultadoOpHa] = useState(props.resultadoOpHa);
    const [resultadoOpLeche, setResultadoOpLeche] = useState(props.resultadoOpLeche);
    const [resultadoOpVT, setResultadoOpVT] = useState(props.resultadoOpVT);
    const [resultadoOpLecheVT, setResultadoOpLecheVT] = useState(props.resultadoOpLecheVT);
    const [vacasCab, setVacasCab] = useState(props.vacasCab);
    const [vacasPeso, setVacasPeso] = useState(props.vacasPeso);
    const [torosCab, setTorosCab] = useState(props.torosCab);
    const [torosPeso, setTorosPeso] = useState(props.torosPeso);
    const [toritosCab, setToritosCab] = useState(props.toritosCab);
    const [toritosPeso, setToritosPeso] = useState(props.toritosPeso);
    const [ternerosCab, setTernerosCab] = useState(props.ternerosCab);
    const [ternerosPeso, setTernerosPeso] = useState(props.ternerosPeso);
    const [ternerasCab, setTernerasCab] = useState(props.ternerasCab);
    const [ternerasPeso, setTernerasPeso] = useState(props.ternerasPeso);
    const [vaquillonasCab, setVaquillonasCab] = useState(props.vaquillonasCab);
    const [vaquillonasPeso, setVaquillonasPeso] = useState(props.vaquillonasPeso);
    const [rechazoVacas, setRechazoVacas] = useState(props.rechazoVacas);
    const [kilosCarne, setKilosCarne] = useState(props.kilosCarne);
    const [productividadCarne, setProductividadCarne] = useState(props.productividadCarne);
    const [gastosDirectosLitro, setGastosDirectosLitro] = useState(props.gastosDirectosLitro);
    const [gastosEstructuraLitro, setGastosEstructuraLitro] = useState(props.gastosEstructuraLitro);
    const [recuperoCarneLitro, setRecuperoCarneLitro] = useState(props.recuperoCarneLitro);
    const [kilosVacas, setKilosVacas] = useState(props.kilosVacas);
    const [kilosToros, setKilosToros] = useState(props.kilosToros);
    const [kilosToritos, setKilosToritos] = useState(props.kilosToritos);
    const [kilosTerneros, setKilosTerneros] = useState(props.kilosTerneros);
    const [kilosTerneras, setKilosTerneras] = useState(props.kilosTerneras);
    const [kilosVaquillonas, setKilosVaquillonas] = useState(props.kilosVaquillonas);
    const [cabezasVendidas, setCabezasVendidas] = useState(props.cabezasVendidas);

    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const ano = fecha.getFullYear();
    const fechaString = dia + '/' + mes + '/' + ano;

    let lecheVendidaDia = (parseFloat(lecheVendida) / 365).toFixed(0);
    let cargaAnimal = ((parseFloat(vacasOrdeno) + parseFloat(vacasSecas)) / parseFloat(superficieVT)).toFixed(2);
    let produccionIndividual = ((parseFloat(lecheVendida) / 365) / parseFloat(vacasOrdeno)).toFixed(1);
    let relacionVOVT = ((parseFloat(vacasOrdeno) / (parseFloat(vacasOrdeno) + parseFloat(vacasSecas)) * 100)).toFixed(1);
    let productividad = (parseFloat(lecheVendida) / parseFloat(superficieVT)).toFixed(0);
    let gastosLitro = (parseFloat(gastosDirectosLitro) + parseFloat(gastosEstructuraLitro)).toFixed(3);

    useEffect(() => {
        setNombreCaso((prevState) => props.nombreCaso)
    }, [props.nombreCaso]);

    useEffect(() => {
        setVacasOrdeno((prevState) => props.vacasOrdeno)
    }, [props.vacasOrdeno]);

    useEffect(() => {
        setVacasSecas((prevState) => props.vacasSecas)
    }, [props.vacasSecas]);

    useEffect(() => {
        setSuperficieVT((prevState) => props.superficieVT)
    }, [props.superficieVT]);

    useEffect(() => {
        setLecheVendida((prevState) => props.lecheVendida)
    }, [props.lecheVendida]);

    useEffect(() => {
        setCodigoMoneda((prevState) => props.codigoMoneda)
    }, [props.codigoMoneda]);

    useEffect(() => {
        setIngresoLeche((prevState) => props.ingresoLeche)
    }, [props.ingresoLeche]);

    useEffect(() => {
        setIngresoCarne((prevState) => props.ingresoCarne)
    }, [props.ingresoCarne]);

    useEffect(() => {
        setIngresoVq((prevState) => props.ingresoVq)
    }, [props.ingresoVq]);

    useEffect(() => {
        setIngresoBruto((prevState) => props.ingresoBruto)
    }, [props.ingresoBruto]);

    useEffect(() => {
        setGastoManoDeObra((prevState) => props.gastoManoDeObra)
    }, [props.gastoManoDeObra]);

    useEffect(() => {
        setGastoPorOperario((prevState) => props.gastoPorOperario)
    }, [props.gastoPorOperario]);

    useEffect(() => {
        setGastoReposicion((prevState) => props.gastoReposicion)
    }, [props.gastoReposicion]);

    useEffect(() => {
        setPorcentajeReposicion((prevState) => props.porcentajeReposicion)
    }, [props.porcentajeReposicion]);

    useEffect(() => {
        setGastoAlimentacion((prevState) => props.gastoAlimentacion)
    }, [props.gastoAlimentacion]);

    useEffect(() => {
        setGastoSuministro((prevState) => props.gastoSuministro)
    }, [props.gastoSuministro]);

    useEffect(() => {
        setGastosVeterinaria((prevState) => props.gastosVeterinaria)
    }, [props.gastosVeterinaria]);

    useEffect(() => {
        setGastosRodeo((prevState) => props.gastosRodeo)
    }, [props.gastosRodeo]);

    useEffect(() => {
        setAlquilerVacas((prevState) => props.alquilerVacas)
    }, [props.alquilerVacas]);

    useEffect(() => {
        setGastosTambo((prevState) => props.gastosTambo)
    }, [props.gastosTambo]);

    useEffect(() => {
        setGastosMantenimiento((prevState) => props.gastosMantenimiento)
    }, [props.gastosMantenimiento]);

    useEffect(() => {
        setGastoArrendamiento((prevState) => props.gastoArrendamiento)
    }, [props.gastoArrendamiento]);

    useEffect(() => {
        setImpuestos((prevState) => props.impuestos)
    }, [props.impuestos]);

    useEffect(() => {
        setGerencia((prevState) => props.gerencia)
    }, [props.gerencia]);

    useEffect(() => {
        setGastosAdministracion((prevState) => props.gastosAdministracion)
    }, [props.gastosAdministracion]);

    useEffect(() => {
        setPrecioLeche((prevState) => props.precioLeche)
    }, [props.precioLeche]);

    useEffect(() => {
        setCostoLitroCP((prevState) => props.costoLitroCP)
    }, [props.costoLitroCP]);

    useEffect(() => {
        setResultadoOpLitro((prevState) => props.resultadoOpLitro)
    }, [props.resultadoOpLitro]);

    useEffect(() => {
        setGastosDirectos((prevState) => props.gastosDirectos)
    }, [props.gastosDirectos]);

    useEffect(() => {
        setGastosEstructura((prevState) => props.gastosEstructura)
    }, [props.gastosEstructura]);

    useEffect(() => {
        setResultadoOperativo((prevState) => props.resultadoOperativo)
    }, [props.resultadoOperativo]);

    useEffect(() => {
        setResultadoOpHa((prevState) => props.resultadoOpHa)
    }, [props.resultadoOpHa]);

    useEffect(() => {
        setResultadoOpLeche((prevState) => props.resultadoOpLeche)
    }, [props.resultadoOpLeche]);

    useEffect(() => {
        setResultadoOpVT((prevState) => props.resultadoOpVT)
    }, [props.resultadoOpVT]);

    useEffect(() => {
        setResultadoOpLecheVT((prevState) => props.resultadoOpLecheVT)
    }, [props.resultadoOpLecheVT]);

    useEffect(() => {
        setVacasCab((prevState) => props.vacasCab)
    }, [props.vacasCab]);

    useEffect(() => {
        setVacasPeso((prevState) => props.vacasPeso)
    }, [props.vacasPeso]);

    useEffect(() => {
        setTorosCab((prevState) => props.torosCab)
    }, [props.torosCab]);

    useEffect(() => {
        setTorosPeso((prevState) => props.torosPeso)
    }, [props.torosPeso]);

    useEffect(() => {
        setToritosCab((prevState) => props.toritosCab)
    }, [props.toritosCab]);

    useEffect(() => {
        setToritosPeso((prevState) => props.toritosPeso)
    }, [props.toritosPeso]);

    useEffect(() => {
        setTernerosCab((prevState) => props.ternerosCab)
    }, [props.ternerosCab]);

    useEffect(() => {
        setTernerosPeso((prevState) => props.ternerosPeso)
    }, [props.ternerosPeso]);

    useEffect(() => {
        setTernerasCab((prevState) => props.ternerasCab)
    }, [props.ternerasCab]);

    useEffect(() => {
        setTernerasPeso((prevState) => props.ternerasPeso)
    }, [props.ternerasPeso]);

    useEffect(() => {
        setVaquillonasCab((prevState) => props.vaquillonasCab)
    }, [props.vaquillonasCab]);

    useEffect(() => {
        setVaquillonasPeso((prevState) => props.vaquillonasPeso)
    }, [props.vaquillonasPeso]);

    useEffect(() => {
        setRechazoVacas((prevState) => props.rechazoVacas)
    }, [props.rechazoVacas]);

    useEffect(() => {
        setKilosCarne((prevState) => props.kilosCarne)
    }, [props.kilosCarne]);

    useEffect(() => {
        setProductividadCarne((prevState) => props.productividadCarne)
    }, [props.productividadCarne]);

    useEffect(() => {
        setGastosDirectosLitro((prevState) => props.gastosDirectosLitro)
    }, [props.gastosDirectosLitro]);

    useEffect(() => {
        setGastosEstructuraLitro((prevState) => props.gastosEstructuraLitro)
    }, [props.gastosEstructuraLitro]);

    useEffect(() => {
        setRecuperoCarneLitro((prevState) => props.recuperoCarneLitro)
    }, [props.recuperoCarneLitro]);

    useEffect(() => {
        setKilosVacas((prevState) => props.kilosVacas)
    }, [props.kilosVacas]);

    useEffect(() => {
        setKilosToros((prevState) => props.kilosToros)
    }, [props.kilosToros]);

    useEffect(() => {
        setKilosToritos((prevState) => props.kilosToritos)
    }, [props.kilosToritos]);

    useEffect(() => {
        setKilosTerneros((prevState) => props.kilosTerneros)
    }, [props.kilosTerneros]);

    useEffect(() => {
        setKilosTerneras((prevState) => props.kilosTerneras)
    }, [props.kilosTerneras]);

    useEffect(() => {
        setKilosVaquillonas((prevState) => props.kilosVaquillonas)
    }, [props.kilosVaquillonas]);

    useEffect(() => {
        setCabezasVendidas((prevState) => props.cabezasVendidas)
    }, [props.setCabezasVendidas]);

    return (
        <Document>
            <Page size="A4">
                <View>
                    <View style={styles.tableLogos}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCellLogos}>
                                <Image src={LogoMiLecheria}></Image>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.title1}>{nombreCaso}</Text>
                    <Text style={styles.title2}>REPORTE - Mi Calculadora Lechera - {fechaString}</Text>
                    <Text style={styles.title3}>INDICADORES FÍSICOS</Text>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Vacas en ordeño</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Vacas secas</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Superficie VT</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(vacasOrdeno)} cabezas</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(vacasSecas)} cabezas</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(superficieVT)} has VT</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Categoría venta</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Vacas</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Toros</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Toritos</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Terneros</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Terneras</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Vaquillonas</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Cabezas venta</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(vacasCab)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(torosCab)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(toritosCab)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(ternerosCab)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(ternerasCab)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(vaquillonasCab)}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Kg/Cabeza</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(vacasPeso)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(torosPeso)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(toritosPeso)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(ternerosPeso)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(ternerasPeso)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(vaquillonasPeso)}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Kg/Categoría</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(kilosVacas)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(kilosToros)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(kilosToritos)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(kilosTerneros)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(kilosTerneras)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(kilosVaquillonas)}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Leche vendida anual</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(lecheVendida)} litros/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Carne vendida anual</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(kilosCarne)} kg/año</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Entrega diaria de leche</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(lecheVendidaDia)} litros/día</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Cabezas vendidas/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(cabezasVendidas)} cabezas/año</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Producción individual</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(produccionIndividual)} litros/VO/día</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Rechazo de vacas</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(rechazoVacas)} % anual</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Relación VO/VT</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(relacionVOVT)} %</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Carga animal</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(cargaAnimal)} VT/haVT</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Productividad leche</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(productividad)} litros/haVT/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Productividad carne</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(productividadCarne)} kg/haVT/año</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.title3}>INDICADORES ECONÓMICOS</Text>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell2}>
                                <Text>INGRESOS BRUTOS</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Anual</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Mensual</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>% sobre IB</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Venta de leche</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(ingresoLeche)} {codigoMoneda}/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(ingresoLeche) / 12).toFixed(0))} {codigoMoneda}/mes</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(ingresoLeche) / parseFloat(ingresoBruto) * 100).toFixed(1))}%</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Venta de carne</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(ingresoCarne)} {codigoMoneda}/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(ingresoCarne) / 12).toFixed(0))} {codigoMoneda}/mes</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(ingresoCarne) / parseFloat(ingresoBruto) * 100).toFixed(1))}%</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Venta de vaquillonas</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(ingresoVq)} {codigoMoneda}/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(ingresoVq) / 12).toFixed(0))} {codigoMoneda}/mes</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(ingresoVq) / parseFloat(ingresoBruto) * 100).toFixed(1))}%</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Ingreso Bruto Total</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(ingresoBruto)} {codigoMoneda}/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(ingresoBruto) / 12).toFixed(0))} {codigoMoneda}/mes</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>100%</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell2}>
                                <Text>GASTOS DIRECTOS</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Anual</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>Mensual</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>% sobre IB leche</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>% sobre IB</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Mano de obra (1)</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(gastoManoDeObra)} {codigoMoneda}/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(gastoManoDeObra) / 12).toFixed(0))} {codigoMoneda}/mes</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(gastoManoDeObra) / parseFloat(ingresoLeche) * 100).toFixed(1))}%</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(gastoManoDeObra) / parseFloat(ingresoBruto) * 100).toFixed(1))}%</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Reposición (2)</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(gastoReposicion)} {codigoMoneda}/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(gastoReposicion) / 12).toFixed(0))} {codigoMoneda}/mes</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(gastoReposicion) / parseFloat(ingresoLeche) * 100).toFixed(1))}%</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(gastoReposicion) / parseFloat(ingresoBruto) * 100).toFixed(1))}%</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Alimentación vacas</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(gastoAlimentacion)} {codigoMoneda}/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(gastoAlimentacion) / 12).toFixed(0))} {codigoMoneda}/mes</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(gastoAlimentacion) / parseFloat(ingresoLeche) * 100).toFixed(1))}%</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(gastoAlimentacion) / parseFloat(ingresoBruto) * 100).toFixed(1))}%</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Suministro alimentos</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(gastoSuministro)} {codigoMoneda}/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(gastoSuministro) / 12).toFixed(0))} {codigoMoneda}/mes</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(gastoSuministro) / parseFloat(ingresoLeche) * 100).toFixed(1))}%</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(gastoSuministro) / parseFloat(ingresoBruto) * 100).toFixed(1))}%</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Sanidad animal</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(gastosVeterinaria)} {codigoMoneda}/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(gastosVeterinaria) / 12).toFixed(0))} {codigoMoneda}/mes</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(gastosVeterinaria) / parseFloat(ingresoLeche) * 100).toFixed(1))}%</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(gastosVeterinaria) / parseFloat(ingresoBruto) * 100).toFixed(1))}%</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Rodeo</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(gastosRodeo)} {codigoMoneda}/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(gastosRodeo) / 12).toFixed(0))} {codigoMoneda}/mes</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(gastosRodeo) / parseFloat(ingresoLeche) * 100).toFixed(1))}%</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(gastosRodeo) / parseFloat(ingresoBruto) * 100).toFixed(1))}%</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Alquiler/leasing vacas</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(alquilerVacas)} {codigoMoneda}/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(alquilerVacas) / 12).toFixed(0))} {codigoMoneda}/mes</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(alquilerVacas) / parseFloat(ingresoLeche) * 100).toFixed(1))}%</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(alquilerVacas) / parseFloat(ingresoBruto) * 100).toFixed(1))}%</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Ordeño</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format(gastosTambo)} {codigoMoneda}/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(gastosTambo) / 12).toFixed(0))} {codigoMoneda}/mes</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(gastosTambo) / parseFloat(ingresoLeche) * 100).toFixed(1))}%</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{new Intl.NumberFormat().format((parseFloat(gastosTambo) / parseFloat(ingresoBruto) * 100).toFixed(1))}%</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.plaintext}>(1) Gasto medio por operario: {new Intl.NumberFormat().format((parseFloat(gastoPorOperario) / 12).toFixed(0))} {codigoMoneda}/mes</Text>
                    <Text style={styles.plaintext}>(2) Porcentaje de reemplazo: {new Intl.NumberFormat().format(porcentajeReposicion)}%</Text>
                </View>
                
                <Text style={styles.footer}>Mi Calculadora Lechera - Desarrolladores: Ing. Agr. EPL Francisco Candioti / Dr. Javier Baudracco</Text>
                <View style={styles.tableLogos}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCellLogos}>
                            <Image src={LogoSaltoAgro}></Image>
                        </View>
                        <View style={styles.tableCellLogos}>
                            <Image src={LogoUNLFCA}></Image>
                        </View>
                    </View>
                </View>
            </Page>
            <Page size="A4">
                <View style={styles.tableLogos}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCellLogos}>
                            <Image src={LogoMiLecheria}></Image>
                        </View>
                    </View>
                </View>
                <Text style={styles.title1}>{nombreCaso}</Text>
                <Text style={styles.title2}>REPORTE - Mi Calculadora Lechera - {fechaString}</Text>
                <Text style={styles.title3}>INDICADORES ECONÓMICOS (Continuación)</Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell2}>
                            <Text>GASTOS ESTRUCTURA</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>Anual</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>Mensual</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>% sobre IB leche</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>% sobre IB</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell}>
                            <Text>Mantenimiento</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format(gastosMantenimiento)} {codigoMoneda}/año</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format((parseFloat(gastosMantenimiento) / 12).toFixed(0))} {codigoMoneda}/mes</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format((parseFloat(gastosMantenimiento) / parseFloat(ingresoLeche) * 100).toFixed(1))}%</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format((parseFloat(gastosMantenimiento) / parseFloat(ingresoBruto) * 100).toFixed(1))}%</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell}>
                            <Text>Alquiler tierra</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format(gastoArrendamiento)} {codigoMoneda}/año</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format((parseFloat(gastoArrendamiento) / 12).toFixed(0))} {codigoMoneda}/mes</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format((parseFloat(gastoArrendamiento) / parseFloat(ingresoLeche) * 100).toFixed(1))}%</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format((parseFloat(gastoArrendamiento) / parseFloat(ingresoBruto) * 100).toFixed(1))}%</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell}>
                            <Text>Impuestos y servicios</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format(impuestos)} {codigoMoneda}/año</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format((parseFloat(impuestos) / 12).toFixed(0))} {codigoMoneda}/mes</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format((parseFloat(impuestos) / parseFloat(ingresoLeche) * 100).toFixed(1))}%</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format((parseFloat(impuestos) / parseFloat(ingresoBruto) * 100).toFixed(1))}%</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell}>
                            <Text>Gerenciamiento</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format(gerencia)} {codigoMoneda}/año</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format((parseFloat(gerencia) / 12).toFixed(0))} {codigoMoneda}/mes</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format((parseFloat(gerencia) / parseFloat(ingresoLeche) * 100).toFixed(1))}%</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format((parseFloat(gerencia) / parseFloat(ingresoBruto) * 100).toFixed(1))}%</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell}>
                            <Text>Administración</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format(gastosAdministracion)} {codigoMoneda}/año</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format((parseFloat(gastosAdministracion) / 12).toFixed(0))} {codigoMoneda}/mes</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format((parseFloat(gastosAdministracion) / parseFloat(ingresoLeche) * 100).toFixed(1))}%</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format((parseFloat(gastosAdministracion) / parseFloat(ingresoBruto) * 100).toFixed(1))}%</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell2}>
                            <Text>RESULTADO OPERATIVO</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>Anual</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>% sobre IB</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell}>
                            <Text>Ingresos Brutos</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format(ingresoBruto)} {codigoMoneda}/año</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format((100).toFixed(1))}%</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell}>
                            <Text>Gastos Directos</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format(gastosDirectos)} {codigoMoneda}/año</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format((parseFloat(gastosDirectos) / parseFloat(ingresoBruto) * 100).toFixed(1))}%</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell}>
                            <Text>Gastos Estructura</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format(gastosEstructura)} {codigoMoneda}/año</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format((parseFloat(gastosEstructura) / parseFloat(ingresoBruto) * 100).toFixed(1))}%</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell}>
                            <Text>Resultado Operativo</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format(resultadoOperativo)} {codigoMoneda}/año</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format((parseFloat(resultadoOperativo) / parseFloat(ingresoBruto) * 100).toFixed(1))}%</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell2}>
                            <Text>GASTOS (Análisis por litro)</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell}>
                            <Text>Gastos Directos</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format(gastosDirectosLitro)} {codigoMoneda}/litro</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell}>
                            <Text>Gastos de Estructura</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format(gastosEstructuraLitro)} {codigoMoneda}/litro</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell}>
                            <Text>Total Gastos</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format(gastosLitro)} {codigoMoneda}/litro</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell2}>
                            <Text>COSTO DE PRODUCCIÓN DE CORTO PLAZO (Análisis por litro)</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell}>
                            <Text>Total gastos</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format(gastosLitro)} {codigoMoneda}/litro</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell}>
                            <Text>Recupero por venta de carne</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format(recuperoCarneLitro)} {codigoMoneda}/litro</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell}>
                            <Text>Costo de corto plazo</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format(costoLitroCP)} {codigoMoneda}/litro</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell2}>
                            <Text>RESULTADO OPERATIVO (Análisis por litro)</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell}>
                            <Text>Precio de la leche</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format(precioLeche)} {codigoMoneda}/litro</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell}>
                            <Text>Costo de corto plazo</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format(costoLitroCP)} {codigoMoneda}/litro</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell}>
                            <Text>Resultado operativo</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format(resultadoOpLitro)} {codigoMoneda}/litro</Text>
                        </View>
                    </View>
                </View>
                
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell2}>
                            <Text>RESULTADO OPERATIVO (Otras expresiones: por hectárea VT)</Text>
                        </View>
                        <View style={styles.tableCell2}>
                            <Text>RESULTADO OPERATIVO (Otras expresiones: por vaca total)</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format(resultadoOpHa)} {codigoMoneda}/haVT/año</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format(resultadoOpLeche)} litros leche/haVT/año</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format(resultadoOpVT)} {codigoMoneda}/VT/año</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text>{new Intl.NumberFormat().format(resultadoOpLecheVT)} litros leche/VT/año</Text>
                        </View>
                    </View>
                </View>
                <Text>  </Text>
                <Text>  </Text>
                <Text style={styles.footer}>Mi Calculadora Lechera - Desarrolladores: Ing. Agr. EPL Francisco Candioti / Dr. Javier Baudracco</Text>
                <View style={styles.tableLogos}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCellLogos}>
                            <Image src={LogoSaltoAgro}></Image>
                        </View>
                        <View style={styles.tableCellLogos}>
                            <Image src={LogoUNLFCA}></Image>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default ReportePDF