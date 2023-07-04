const dao = require("../service/dao/visitaDao")


const generarFechaAleatoria = (fechaInicio, fechaFin) => {
  const tiempoInicio = fechaInicio.getTime();
  const tiempoFin = fechaFin.getTime();
  const tiempoAleatorio = Math.random() * (tiempoFin - tiempoInicio) + tiempoInicio;
  const fechaAleatoria = new Date(tiempoAleatorio);
  
  const anio = fechaAleatoria.getFullYear();
  const mes = String(fechaAleatoria.getMonth() + 1).padStart(2, '0');
  const dia = String(fechaAleatoria.getDate()).padStart(2, '0');
  const horas = String(fechaAleatoria.getHours()).padStart(2, '0');
  const minutos = String(fechaAleatoria.getMinutes()).padStart(2, '0');
  const segundos = String(fechaAleatoria.getSeconds()).padStart(2, '0');
  
  const fechaFormateada = `${anio}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
  return fechaFormateada;
};

const visitaController = {}

visitaController.visitaTotal = async (req,res) => {
    const { id } = req.params;
    try {
      const visitas = await dao.visitaTotal(id);
      if (!visitas)
        return res.status(409).send("No hay visitantes aún"); 
      return res.status(200).send(visitas);
    } catch (e) {
      throw new Error(e.message);
    }
}

visitaController.visitaSemana = async (req,res) => {
    const { id } = req.params;
    try {
      const visitas = await dao.visitaSemana(id);
      if (visitas <= 0 || !visitas)
        return res.status(409).send("No hay visitantes aún"); 
      return res.status(200).send(visitas);
    } catch (e) {
      throw new Error(e.message);
    }
}

visitaController.visitaMes = async (req,res) => {
    const { id } = req.params;
    try {
      const visitas = await dao.visitaMes(id);
      if (visitas <= 0 || !visitas)
        return res.status(409).send("No hay visitantes aún"); 
      return res.status(200).send(visitas);
    } catch (e) {
      throw new Error(e.message);
    }
}

visitaController.visitaAnual = async (req,res) => {
    const { id, ano } = req.body;
    let fecha
    let mes
    let visitas
    const resulAno = [];
    try {
      for(i = 1; i <= 12; i++){
        if(i<10) fecha = `${ano}-0${i}`
        else fecha = `${ano}-${i}`
        visitas = await dao.visitaAnual(id,fecha);
        meses = [...visitas]
        console.log(meses,"mes")
        resulAno.push(meses[0].mes)
      }
      console.log(resulAno)
      if (!visitas)
        return res.status(409).send("No hay visitantes aún"); 
      return res.status(200).send(resulAno);
    } catch (e) {
      throw new Error(e.message);
    }
}

visitaController.visitasRandom = async (req,res) => {
  const fechaInicio = new Date(2022, 0, 1);
  const fechaFin = new Date(2023, 6, 4);
  try{
    for(i = 1; i <= 2000; i++){
      const fechaAleatoria = generarFechaAleatoria(fechaInicio,fechaFin)
      const fechas = await dao.ramdon(fechaAleatoria)
    }
    res.send("hecho")
  }catch(e){
    throw new Error(e.message);
  }
}

module.exports = visitaController

