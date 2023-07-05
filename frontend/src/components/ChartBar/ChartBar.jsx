import Chart from 'chart.js/auto';
import {data} from "./utils/data";
import { CategoryScale } from "chart.js";
import {useState} from "react";
import {Bar} from "react-chartjs-2"


Chart.register(CategoryScale);


export default function ChartBar(){
const [chartData, setChartData] = useState(data)

console.log(chartData)
   
    return(
        <div className="chart-container">
        <h2 style={{ textAlign: "center" }}>Grafica de Visualizaciones</h2>
        <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Visualizaciones de perfil por año"
              }
            }
          }}
        />
      </div>
    )
}