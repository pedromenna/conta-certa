import React from "react";
import { Chart } from "react-google-charts";
import './Saldo.module.css'

export const data = [
    [
      "Element",
      "Density",
      { role: "style" },
      {
        sourceColumn: 0,
        role: "annotation",
        type: "string",
        calc: "stringify",
      },
    ],
    ["Entradas", 8000, "#4DE475", "8000"],
    ["Saídas", 2500, "#EC5448", "2500"],
    ["Saldo", 5500, "#00DFBF", "5500"],
  ];
  

export const options = {
    width: 500,
    height: 300,
    bar: { groupWidth: "70%" }, 
    legend: { position: "none" },
    titleTextStyle: {
        fontSize: 14,
        bold: true, // Define o texto como negrito
      }

  };

export function Saldo() {
  return (
    <Chart
      chartType="BarChart"
      width="500px"
      height="300px"
      data={data}
      options={options}
    
    />
  );
}
