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
        textAlign: 'center',
        marginTop: '25px',
        fontWeight: 'bold',
        fontSize: '12',
    },
    footer: {
        textAlign: 'center',
        fontSize: '10',
        marginTop: '2px'
    },
});

function ReportePDF(props) {

    const [nombreCaso, setNombreCaso] = useState(props.nombreCaso);
    const [vacasOrdeno, setVacasOrdeno] = useState(props.vacasOrdeno);
    const [vacasSecas, setVacasSecas] = useState(props.vacasSecas);
    const [superficieVT, setSuperficieVT] = useState(props.superficieVT);
    const [lecheVendida, setLecheVendida] = useState(props.lecheVendida);

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
                    <Text style={styles.title2}>REPORTE - Mi Calculadora Lechera - FECHA</Text>
                    <Text></Text>
                    <Text style={styles.title3}>Indicadores físicos</Text>
                    <Text></Text>
                    <Text style={styles.title2}>Datos de entrada</Text>
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
                    <Text style={styles.footer}>Desarrolladores:</Text>
                    <Text style={styles.footer}>Ing. Agr. EPL Francisco Candioti</Text>
                    <Text style={styles.footer}>Dr. Javier Baudracco</Text>
                </View>
            </Page>
        </Document>
    )
}

export default ReportePDF