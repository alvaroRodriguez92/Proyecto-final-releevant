import Chart from "chart.js/auto";
import { data } from "./utils/data";
import { CategoryScale } from "chart.js";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale);

export default function ChartBar() {
  const [chartData, setChartData] = useState(data);
  let objeto = {}

// function setearChartData(){
//   console.log("SE EJECUTA EL SETEO DE CHART DATA")
//   data?.map((item)=>{

//     setChartData(item)
//   })
// }

// useEffect(()=>{
//   setearChartData()
// },[])

function recorrerChartData(){
   chartData.map((item,index)=>{
    return(
      objeto={...objeto, item})
    })

    return console.log(objeto,"OBJETOOOOOOOOOOOOOO")
}
recorrerChartData();
// console.log(chartData)

  return (
    <>
    {chartData?(
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Grafica de Visualizaciones</h2>
          <Bar
            data={chartData.map((item)=>item)}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Visualizaciones de perfil por año",
                },
              },
            }}
          />
    </div>):("")}
    </>
  );
}
