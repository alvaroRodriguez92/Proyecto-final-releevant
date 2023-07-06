async function fetchVisitas() {
  const response = await fetch("http://127.0.0.1:3000/visita/anual", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: 14,
    }),
  });
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
}

const dataFetch = await fetchVisitas();

const labels = [
  { Mes: "Enero" },
  { Mes: "Febrero" },
  { Mes: "Marzo" },
  { Mes: "Abril" },
  { Mes: "Mayo" },
  { Mes: "Junio" },
  { Mes: "Julio" },
  { Mes: "Agosto" },
  { Mes: "Septiembre" },
  { Mes: "Octubre" },
  { Mes: "Noviembre" },
  { Mes: "Diciembre" },
];

function elegirColor() {
  const numeroAleatorio = Math.floor(Math.random() * 7);

  const coloresBar = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(255, 159, 64, 0.2)",
    "rgba(255, 205, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(201, 203, 207, 0.2)",
  ];
  const coloresBorder = ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"];

  const colorfinal = { interior: [coloresBar[numeroAleatorio]], borde: [coloresBorder[numeroAleatorio]] };
  return colorfinal;
}

export const data = {
  labels: labels.map((i) => {
    return i.Mes;
  }),
  datasets: dataFetch.map((item) => {
    const colorDefinitivo = elegirColor();
    return {
      label: `Visitas en ${item.year}`,
      data: item.data,
      backgroundColor: colorDefinitivo.interior,
      borderColor: colorDefinitivo.borde,
      borderWidth: 1,
    };
  }),
};
