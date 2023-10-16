import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function Categoria() {
  const data = {
    labels: [
      'Administrativas',
      'Financeiras',
      'Fixas'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgba(22, 191, 214, 1)',
        'rgba(179, 247, 238, 1)',
        'rgba(0, 156, 134, 1)'
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'pie',
    data: data,
    options: {
      plugins: {
        legend: {
          position: 'bottom',
        },
      },
    },
  };

  const chartRef = useRef();
  const myChart = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (myChart.current) {
      myChart.current.destroy();
    }

    myChart.current = new Chart(ctx, config);
  }, []);

  return (
    <div>
        <h1 style={{ fontSize: '14px', marginTop:'20px', marginBottom:'0', fontWeight:'800'}}>Despesas por categoria</h1>
      <canvas ref={chartRef} style={{ padding:'50px 50px' , marginBottom: '20px' }}></canvas>
    </div>
  );
}

export default Categoria;
