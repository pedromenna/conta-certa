import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';

export default function Saldo() {
  const chartRef = useRef();
  const myChart = useRef(null);


  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (myChart.current) {
      myChart.current.destroy();
    }

    myChart.current = new Chart(ctx, config);
  }, []);

  const labels = ["Entradas", "Saídas", "Saldo"];
  const data = {
    labels: labels,
    datasets: [{
      axis: 'y',
      data: [8000, 2500, 5500],
      fill: false,
      backgroundColor: [
        'rgba(77, 228, 117, 1)',
        'rgba(236, 84, 72, 1)',
        'rgba(0, 223, 191, 1)'
      ],
      borderWidth: 1
    }]
  };

  const config = {
    type: 'bar',
    data,
    options: {
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true, // Exibir rótulos de dados nas barras
          color: 'black', // Cor do texto
          anchor: 'end', // Posição do texto dentro da barra
          align: 'end', // Alinhamento do texto
          font: {
            weight: 'bold' // Estilo da fonte
          }
        }
      }
    }
  };

  return (
    <div>
      <canvas ref={chartRef} style={{ width: '400px', height: '300px', padding: '20px', fontWeight:'800' }}></canvas>
    </div>
  );
}
