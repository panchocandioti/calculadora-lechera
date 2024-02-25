import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReportePDF from './ReportePDF';

function Resumen(props) {

    const inputs1 = props.resumeninputs1;
    const inputs2 = props.resumeninputs2;
    const inputs3 = props.resumeninputs3;
    const resultados1 = props.resumenresultados1;
    const resultados2 = props.resumenresultados2;
    const resultados3 = props.resumenresultados3;
    const nombreCaso = props.nombreCaso;
    const fechaString = props.fechaString;

    return (
        <div className='resultados'>
            <h4>RESUMEN</h4>
            <div className='table-responsive'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">INPUTS</th>
                            <th scope="col">ESTADO 1</th>
                            <th scope="col">ESTADO 2</th>
                            <th scope="col">ESTADO 3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Interv. entre partos (meses):</td>
                            <td>{inputs1[0]}</td>
                            <td>{inputs2[0]}</td>
                            <td>{inputs3[0]}</td>
                        </tr>
                        <tr>
                            <td>Rechazo adultas (%):</td>
                            <td>{inputs1[1]}</td>
                            <td>{inputs2[1]}</td>
                            <td>{inputs3[1]}</td>
                        </tr>
                        <tr>
                            <td>Mortandad adultas (%):</td>
                            <td>{inputs1[2]}</td>
                            <td>{inputs2[2]}</td>
                            <td>{inputs3[2]}</td>
                        </tr>
                        <tr>
                            <td>Mortandad terneras (%):</td>
                            <td>{inputs1[3]}</td>
                            <td>{inputs2[3]}</td>
                            <td>{inputs3[3]}</td>
                        </tr>
                        <tr>
                            <td>Mortandad recría (%):</td>
                            <td>{inputs1[4]}</td>
                            <td>{inputs2[4]}</td>
                            <td>{inputs3[4]}</td>
                        </tr>
                        <tr>
                            <td>Rechazo recría (%):</td>
                            <td>{inputs1[5]}</td>
                            <td>{inputs2[5]}</td>
                            <td>{inputs3[5]}</td>
                        </tr>
                        <tr>
                            <td>Preñez vaquillonas (%):</td>
                            <td>{inputs1[6]}</td>
                            <td>{inputs2[6]}</td>
                            <td>{inputs3[6]}</td>
                        </tr>
                        <tr>
                            <td>Abortos (%):</td>
                            <td>{inputs1[7]}</td>
                            <td>{inputs2[7]}</td>
                            <td>{inputs3[7]}</td>
                        </tr>
                        <tr>
                            <td>Meses 1° parto año previo:</td>
                            <td>{inputs1[8]}</td>
                            <td>{inputs2[8]}</td>
                            <td>{inputs3[8]}</td>
                        </tr>
                        <tr>
                            <td>Meses 1° parto año actual:</td>
                            <td>{inputs1[9]}</td>
                            <td>{inputs2[9]}</td>
                            <td>{inputs3[9]}</td>
                        </tr>
                        <tr>
                            <td>Crías ♀ (primíparas) (%):</td>
                            <td>{inputs1[10]}</td>
                            <td>{inputs2[10]}</td>
                            <td>{inputs3[10]}</td>
                        </tr>
                        <tr>
                            <td>Crías ♀ (multíparas) (%):</td>
                            <td>{inputs1[11]}</td>
                            <td>{inputs2[11]}</td>
                            <td>{inputs3[11]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='table-responsive'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">RESULTADOS</th>
                            <th scope="col">ESTADO 1</th>
                            <th scope="col">ESTADO 2</th>
                            <th scope="col">ESTADO 3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bajas anuales (%):</td>
                            <td>{parseFloat(resultados1[0]).toFixed(1)}</td>
                            <td>{parseFloat(resultados2[0]).toFixed(1)}</td>
                            <td>{parseFloat(resultados3[0]).toFixed(1)}</td>
                        </tr>
                        <tr>
                            <td>Duración vacas (lactancias):</td>
                            <td>{parseFloat(resultados1[1]).toFixed(1)}</td>
                            <td>{parseFloat(resultados2[1]).toFixed(1)}</td>
                            <td>{parseFloat(resultados3[1]).toFixed(1)}</td>
                        </tr>
                        <tr>
                            <td>Crías ♀ global (%):</td>
                            <td>{parseFloat(resultados1[2] * 100).toFixed(1)}</td>
                            <td>{parseFloat(resultados2[2] * 100).toFixed(1)}</td>
                            <td>{parseFloat(resultados3[2] * 100).toFixed(1)}</td>
                        </tr>
                        <tr>
                            <td>Reposición anual CP (%):</td>
                            <td>{parseFloat(resultados1[3]).toFixed(1)}</td>
                            <td>{parseFloat(resultados2[3]).toFixed(1)}</td>
                            <td>{parseFloat(resultados3[3]).toFixed(1)}</td>
                        </tr>
                        <tr>
                            <td>Reposición anual LP (%):</td>
                            <td>{parseFloat(resultados1[4]).toFixed(1)}</td>
                            <td>{parseFloat(resultados2[4]).toFixed(1)}</td>
                            <td>{parseFloat(resultados3[4]).toFixed(1)}</td>
                        </tr>
                        <tr>
                            <td>Crecimiento rodeo CP (%):</td>
                            <td>{parseFloat(resultados1[5]).toFixed(1)}</td>
                            <td>{parseFloat(resultados2[5]).toFixed(1)}</td>
                            <td>{parseFloat(resultados3[5]).toFixed(1)}</td>
                        </tr>
                        <tr>
                            <td>Crecimiento rodeo LP (%):</td>
                            <td>{parseFloat(resultados1[6]).toFixed(1)}</td>
                            <td>{parseFloat(resultados2[6]).toFixed(1)}</td>
                            <td>{parseFloat(resultados3[6]).toFixed(1)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <PDFDownloadLink document={<ReportePDF nombreCaso={nombreCaso} fechaString={fechaString} inputs1={inputs1} inputs2={inputs2} inputs3={inputs3} resultados1={resultados1} resultados2={resultados2} resultados3={resultados3} />} fileName="resumen.pdf">
                    {({ blob, url, loading, error }) => (loading ? 'Cargando documento...' : 'Descargar PDF')}
                </PDFDownloadLink>
            </div>
        </div>
    )
}

export default Resumen