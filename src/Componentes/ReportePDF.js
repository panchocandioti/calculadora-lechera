import React, { useState, useEffect } from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    table: {
        width: '95%',
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

    const [inputs1, setInputs1] = useState(props.inputs1);
    const [inputs2, setInputs2] = useState(props.inputs2);
    const [inputs3, setInputs3] = useState(props.inputs3);
    const [resultados1, setResultados1] = useState(props.resultados1);
    const [resultados2, setResultados2] = useState(props.resultados2);
    const [resultados3, setResultados3] = useState(props.resultados3);
    const [nombreCaso, setNombreCaso] = useState(props.nombreCaso);
    const fechaString = props.fechaString;

    useEffect(() => {
        setInputs1((prevState) => props.inputs1)
    }, [props.inputs1]);

    useEffect(() => {
        setInputs2((prevState) => props.inputs2)
    }, [props.inputs2]);

    useEffect(() => {
        setInputs3((prevState) => props.inputs3)
    }, [props.inputs3]);

    useEffect(() => {
        setResultados1((prevState) => props.resultados1)
    }, [props.resultados1]);

    useEffect(() => {
        setResultados2((prevState) => props.resultados2)
    }, [props.resultados2]);

    useEffect(() => {
        setResultados3((prevState) => props.resultados3)
    }, [props.resultados3]);

    useEffect(() => {
        setNombreCaso((prevState) => props.nombreCaso)
    }, [props.nombreCaso]);


    return (
        <Document>
            <Page size="A4" orientation='landscape'>
                <View>
                    <Text style={styles.title1}>{nombreCaso}</Text>
                    <Text style={styles.title2}>REPORTE - Comparación de estados - Crecimiento del rodeo lechero - {fechaString}</Text>
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
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Interv. entre partos (meses):</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs1[0]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs2[0]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs3[0]}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Rechazo adultas (%):</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs1[1]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs2[1]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs3[1]}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Mortandad adultas (%):</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs1[2]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs2[2]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs3[2]}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Mortandad terneras (%):</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs1[3]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs2[3]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs3[3]}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Mortandad recría (%):</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs1[4]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs2[4]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs3[4]}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Rechazo recría (%):</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs1[5]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs2[5]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs3[5]}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Preñez vaquillonas (%):</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs1[6]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs2[6]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs3[6]}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Abortos (%):</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs1[7]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs2[7]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs3[7]}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Edad 1° parto año previo (meses):</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs1[8]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs2[8]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs3[8]}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Edad 1° parto año actual (meses):</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs1[9]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs2[9]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs3[9]}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Crías hembras (primíparas) (%):</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs1[10]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs2[10]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs3[10]}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Crías hembras (multíparas) (%):</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs1[11]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs2[11]}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{inputs3[11]}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>RESULTADOS</Text>
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
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Bajas anuales (%):</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{parseFloat(resultados1[0]).toFixed(1)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{parseFloat(resultados2[0]).toFixed(1)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{parseFloat(resultados3[0]).toFixed(1)}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Duración vacas (lactancias):</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{parseFloat(resultados1[1]).toFixed(1)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{parseFloat(resultados2[1]).toFixed(1)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{parseFloat(resultados3[1]).toFixed(1)}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Crías hembras global (%):</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{parseFloat(resultados1[2] * 100).toFixed(1)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{parseFloat(resultados2[2] * 100).toFixed(1)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{parseFloat(resultados3[2] * 100).toFixed(1)}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Reposición anual CP (%):</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{parseFloat(resultados1[3]).toFixed(1)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{parseFloat(resultados2[3]).toFixed(1)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{parseFloat(resultados3[3]).toFixed(1)}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Reposición anual LP (%):</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{parseFloat(resultados1[4]).toFixed(1)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{parseFloat(resultados2[4]).toFixed(1)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{parseFloat(resultados3[4]).toFixed(1)}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Crecimiento rodeo CP (%):</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{parseFloat(resultados1[5]).toFixed(1)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{parseFloat(resultados2[5]).toFixed(1)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{parseFloat(resultados3[5]).toFixed(1)}</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Text>Crecimiento rodeo LP (%):</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{parseFloat(resultados1[6]).toFixed(1)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{parseFloat(resultados2[6]).toFixed(1)}</Text>
                            </View>
                            <View style={styles.tableCell}>
                                <Text>{parseFloat(resultados3[6]).toFixed(1)}</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.footer}>Desarrollado por: Ing. Agr. EPL Francisco Candioti - panchocandioti@gmail.com - MiLecheria.ar</Text>
                </View>
            </Page>
        </Document>
    )
}

export default ReportePDF