// let visitas;

async function fetchVisitas() {
  const response = await fetch("http://127.0.0.1:3000/visita/anual", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: 14,
      ano: "2022",
    }),
  });
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
}
  const dataFetch = await fetchVisitas()
  const labels = [{Mes:"Enero"}, {Mes:"Febrero"},{Mes:"Marzo"},{Mes:"Abril"},{Mes:"Mayo"},{Mes:"Junio"},{Mes:"Julio"},{Mes:"Agosto"},{Mes:"Septiembre"},{Mes:"Octubre"},{Mes:"Noviembre"},{Mes:"Diciembre"}]

  function prueba(){
    let arrayVacio = []
    for(let item in dataFetch){
      arrayVacio=[...arrayVacio,{labels: labels.map((i)=>{
        return(
            i.Mes
        )
    }),
    datasets: [{
      label: `Visitas en ${item}`,
      data: dataFetch[item],

      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
      borderWidth: 1,
    },
    {
      label: "Visitas en 2023",
      data: [65, 59, 80, 81, 56, 55, 40, 105, 80],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],

      borderWidth: 1
    }]
    }]
    }
    return arrayVacio
  }

  // function prueba2(datasets,){
  //   const dataPrueba = {labels: labels.map((i)=>{
  //           return(
  //               i.Mes
  //           )
  //       }),
  //       datasets: [{
  //         label: `Visitas en ${item}`,
  //         data: dataFetch[item],
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(255, 159, 64, 0.2)',
  //           'rgba(255, 205, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(201, 203, 207, 0.2)'
  //         ],
  //         borderColor: [
  //           'rgb(255, 99, 132)',
  //           'rgb(255, 159, 64)',
  //           'rgb(255, 205, 86)',
  //           'rgb(75, 192, 192)',
  //           'rgb(54, 162, 235)',
  //           'rgb(153, 102, 255)',
  //           'rgb(201, 203, 207)'
  //         ],
  //         borderWidth: 1
  //       }]
  //       }
  // }

  export const data = prueba()

