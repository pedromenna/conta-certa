import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function Pagto() {
  const data = {
    labels: [
      'Crédito',
      'Débito',
      'Pix'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgba(0, 223, 191, 1)',
        'rgba(25, 119, 243, 1)',
        'rgba(0, 156, 134, 1)'
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'doughnut',
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
      <h1 style={{ fontSize: '14px', marginTop: '20px', marginBottom: '0', fontWeight:'800' }}>Despesas por pagamento</h1>
      <canvas ref={chartRef} style={{ width: '300px', height: '300px', padding: '50px' }}></canvas>
    </div>
  );
}

export default Pagto;
