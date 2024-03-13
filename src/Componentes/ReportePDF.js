import React, { useState, useEffect } from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    table: {
        width: '93%',
        margin: '5px 20px 5px',
        border: '1px solid #000',
        fontFamily: 'Helvetica',
        fontSize: '10',
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
});

function ReportePDF(props) {

    const [nombreCaso, setNombreCaso] = useState(props.nombreCaso);
    const [vacasOrdeno, setVacasOrdeno] = useState(props.vacasOrdeno);
    const [vacasSecas, setVacasSecas] = useState(props.vacasSecas);
    const [superficieVT, setSuperficieVT] = useState(props.superficieVT);
    const [lecheVendida, setLecheVendida] = useState(props.lecheVendida);

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

    return (
        <Document>
            <Page size="A4">
                <View>
                    <Text style={styles.title1}>{nombreCaso}</Text>
                    <Text style={styles.title2}>REPORTE - Mi Calculadora Lechera - {fechaString}</Text>
                    <Text style={styles.title3}>INDICADORES FÍSICOS:</Text>
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
                                <Text>Leche vendida en el año</Text>
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
                    <Text style={styles.title3}>INGRESOS BRUTOS</Text>
                    <Text style={styles.title3}>GASTOS DIRECTOS</Text>
                    <Text style={styles.title3}>GASTOS DE ESTRUCTURA</Text>
                    <Text style={styles.title3}>RESULTADO OPERATIVO</Text>
                    <Text style={styles.title3}>Análisis por litro</Text>
                    <Text style={styles.title3}>Montos anuales y porcentuales sobre el IB</Text>
                    <Text style={styles.title3}>Otras unidades</Text>

                    <Text style={styles.footer}>Mi Calculadora Lechera - Desarrolladores: Ing. Agr. EPL Francisco Candioti - Dr. Javier Baudracco</Text>
                </View>
            </Page>
        </Document>
    )
}

export default ReportePDF