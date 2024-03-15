import React, { useState, useEffect } from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    table: {
        width: '93%',
        margin: '5px 20px 5px',
        border: '1px solid #000',
        fontFamily: 'Helvetica',
        fontSize: '9',
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableCell: {
        flex: 1,
        border: '1px solid #000',
        padding: 5,
        textAlign: 'center',
    },
    title1: {
        textAlign: 'center',
        marginTop: '30px',
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
        marginTop: '20px',
        fontSize: '10',
        marginLeft: '5%',
    },
    footer: {
        textAlign: 'center',
        fontSize: '10',
        marginTop: '20px',
    },
    plaintext: {
        textAlign: 'left',
        fontSize: '9',
        marginTop: '4px',
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

    return (
        <Document>
            <Page size="A4">
                <View>
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
                            <View style={styles.tableCell}>
                                <Text>Leche vendida anual</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>{vacasOrdeno} cabezas</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{vacasSecas} cabezas</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{superficieVT} has VT</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{lecheVendida} litros/año</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Entrega diaria de leche</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{lecheVendidaDia} litros/día</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Carga animal</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{cargaAnimal} VT/haVT</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Producción individual</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{produccionIndividual} litros/VO/día</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Relación VO/VT</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{relacionVOVT} %</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Productividad</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{productividad} litros/haVT/año</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.title3}>INDICADORES ECONÓMICOS</Text>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
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
                                <Text>{ingresoLeche} {codigoMoneda}/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(ingresoLeche) / 12).toFixed(0)} {codigoMoneda}/mes</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(ingresoLeche) / parseFloat(ingresoBruto) * 100).toFixed(1)}%</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Venta de carne</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{ingresoCarne} {codigoMoneda}/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(ingresoCarne) / 12).toFixed(0)} {codigoMoneda}/mes</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(ingresoCarne) / parseFloat(ingresoBruto) * 100).toFixed(1)}%</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Ingreso Bruto Total</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{ingresoBruto} {codigoMoneda}/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(ingresoBruto) / 12).toFixed(0)} {codigoMoneda}/mes</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>100%</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
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
                                <Text>{gastoManoDeObra} {codigoMoneda}/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(gastoManoDeObra) / 12).toFixed(0)} {codigoMoneda}/mes</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(gastoManoDeObra) / parseFloat(ingresoLeche) * 100).toFixed(1)}%</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(gastoManoDeObra) / parseFloat(ingresoBruto) * 100).toFixed(1)}%</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Reposición (2)</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{gastoReposicion} {codigoMoneda}/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(gastoReposicion) / 12).toFixed(0)} {codigoMoneda}/mes</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(gastoReposicion) / parseFloat(ingresoLeche) * 100).toFixed(1)}%</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(gastoReposicion) / parseFloat(ingresoBruto) * 100).toFixed(1)}%</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Alimentación vacas</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{gastoAlimentacion} {codigoMoneda}/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(gastoAlimentacion) / 12).toFixed(0)} {codigoMoneda}/mes</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(gastoAlimentacion) / parseFloat(ingresoLeche) * 100).toFixed(1)}%</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(gastoAlimentacion) / parseFloat(ingresoBruto) * 100).toFixed(1)}%</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Suministro alimentos</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{gastoSuministro} {codigoMoneda}/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(gastoSuministro) / 12).toFixed(0)} {codigoMoneda}/mes</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(gastoSuministro) / parseFloat(ingresoLeche) * 100).toFixed(1)}%</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(gastoSuministro) / parseFloat(ingresoBruto) * 100).toFixed(1)}%</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Sanidad animal</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{gastosVeterinaria} {codigoMoneda}/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(gastosVeterinaria) / 12).toFixed(0)} {codigoMoneda}/mes</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(gastosVeterinaria) / parseFloat(ingresoLeche) * 100).toFixed(1)}%</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(gastosVeterinaria) / parseFloat(ingresoBruto) * 100).toFixed(1)}%</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Rodeo</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{gastosRodeo} {codigoMoneda}/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(gastosRodeo) / 12).toFixed(0)} {codigoMoneda}/mes</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(gastosRodeo) / parseFloat(ingresoLeche) * 100).toFixed(1)}%</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(gastosRodeo) / parseFloat(ingresoBruto) * 100).toFixed(1)}%</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Alquiler/leasing vacas</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{alquilerVacas} {codigoMoneda}/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(alquilerVacas) / 12).toFixed(0)} {codigoMoneda}/mes</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(alquilerVacas) / parseFloat(ingresoLeche) * 100).toFixed(1)}%</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(alquilerVacas) / parseFloat(ingresoBruto) * 100).toFixed(1)}%</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Ordeño</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{gastosTambo} {codigoMoneda}/año</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(gastosTambo) / 12).toFixed(0)} {codigoMoneda}/mes</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(gastosTambo) / parseFloat(ingresoLeche) * 100).toFixed(1)}%</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{(parseFloat(gastosTambo) / parseFloat(ingresoBruto) * 100).toFixed(1)}%</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.plaintext}>(1) Gasto medio por operario: {(parseFloat(gastoPorOperario) / 12).toFixed(0)} {codigoMoneda}/mes</Text>
                    <Text style={styles.plaintext}>(2) Porcentaje de reemplazo: {porcentajeReposicion}%</Text>

                    <Text style={styles.title3}>GASTOS DE ESTRUCTURA</Text>





                    <Text style={styles.footer}>Mi Calculadora Lechera - Desarrolladores: Ing. Agr. EPL Francisco Candioti - Dr. Javier Baudracco</Text>
                </View>
            </Page>
            <Page size="A4">
                <Text style={styles.title3}>RESULTADO OPERATIVO</Text>
                <Text style={styles.title3}>Análisis por litro</Text>
                <Text style={styles.title3}>Montos anuales y porcentuales sobre el IB</Text>
                <Text style={styles.title3}>Otras unidades</Text>

                <Text style={styles.footer}>Mi Calculadora Lechera - Desarrolladores: Ing. Agr. EPL Francisco Candioti - Dr. Javier Baudracco</Text>
            </Page>
        </Document>
    )
}

export default ReportePDF