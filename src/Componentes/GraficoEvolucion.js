import React, { useState, useEffect, useRef, useCallback } from 'react';
import jsPDF from 'jspdf';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function GraficoEvolucion(props) {
    const [vacasTotales1, setVacasTotales1] = useState([]);
    const [vacasTotales2, setVacasTotales2] = useState([]);
    const [vacasTotales3, setVacasTotales3] = useState([]);
    const [nombreCaso, setNombreCaso] = useState('')
    const [isComponentMounted, setIsComponentMounted] = useState(false);
    const chartRef = useRef(null);
    const fechaString = props.fechaString;

    useEffect(() => {
        setVacasTotales1((prevState) => props.linea1);
    }, [props.linea1]);

    useEffect(() => {
        setVacasTotales2((prevState) => props.linea2);
    }, [props.linea2]);

    useEffect(() => {
        setVacasTotales3((prevState) => props.linea3);
    }, [props.linea3]);

    useEffect(() => {
        setNombreCaso((prevState) => props.nombreCaso);
    }, [props.nombreCaso]);

    useEffect(() => {
        setIsComponentMounted(true);
        return () => setIsComponentMounted(false);
    }, [props.nombreCaso, props.linea1, props.linea2, props.linea3]);

    const data = {
        labels: ["Año 0", "Año 1", "Año 2", "Año 3", "Año 4", "Año 5"],
        datasets: [{
            label: "Vacas E1",
            data: vacasTotales1,
            borderColor: "darkred",
        },
        {
            label: "Vacas E2",
            data: vacasTotales2,
            borderColor: "darkblue",
        },
        {
            label: "Vacas E3",
            data: vacasTotales3,
            borderColor: "darkgreen",
        }
        ]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    }

    const descargaGraficoPDF = useCallback(async () => {
        if (chartRef.current && isComponentMounted) {
            // Agrega un pequeño retraso (por ejemplo, 500 ms) antes de realizar la captura de pantalla
            await new Promise(resolve => setTimeout(resolve, 500));
    
            // Intenta capturar la imagen del gráfico utilizando toBase64Image()
            const chartImageBase64 = chartRef.current.toBase64Image();
            
            // Verifica si la cadena base64 es válida antes de continuar
            if (chartImageBase64 && chartImageBase64.startsWith('data:image/png')) {
                const pdf = new jsPDF();

            // Agrega título
            pdf.setFontSize(15);
            pdf.text(nombreCaso, 15, 20);

            pdf.setFontSize(12);
            pdf.text("GRÁFICO - Evolución comparada - Crecimiento del rodeo lechero - " + fechaString, 15, 30);

            // Agrega la imagen del gráfico
            pdf.addImage(chartImageBase64, 'PNG', 15, 40, 180, 80); // A4 size: 210mm x 297mm

            // Agrega pie de página
            pdf.setFontSize(10);
            pdf.text("Desarrollado por: Ing. Agr. EPL Francisco Candioti - panchocandioti@gmail.com - MiLecheria.ar", 15, 135);

            pdf.save('GraficoEvolucion.pdf');
            } else {
                console.error('Error al capturar la imagen del gráfico.');
            }
        }
    }, [isComponentMounted, nombreCaso, fechaString]);

    return (
        <div className='grafico'>
            <div style={{ position: "relative", height: "28vh", minWidth: "60vw", backgroundColor: "white" }}>
                <Line data={data} options={options} ref={chartRef}></Line>
            </div>
            <a type='button' className='button' onClick={descargaGraficoPDF}>Descargar PDF</a>
        </div>
    );
}

export default GraficoEvolucion;