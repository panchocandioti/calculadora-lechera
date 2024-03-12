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
    footer: {
        textAlign: 'center',
        fontSize: '10',
    },
});

function ReportePDF(props) {

    const [nombreCaso, setNombreCaso] = useState(props.nombreCaso);

    useEffect(() => {
        setNombreCaso((prevState) => props.nombreCaso)
    }, [props.nombreCaso]);

    return (
        <Document>
            <Page size="A4">
                <View>
                    <Text style={styles.title1}>{nombreCaso}</Text>
                    <Text style={styles.title2}>REPORTE - Mi Calculadora Lechera - FECHA</Text>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>INPUTS</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>ESTADO 1</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>ESTADO 2</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>ESTADO 3</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.footer}>Desarrollado por: Ing. Agr. EPL Francisco Candioti - MiLecheria.ar</Text>
                </View>
            </Page>
        </Document>
    )
}

export default ReportePDF