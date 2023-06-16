import {
  TextField,
  Box,
  Button,
  Grid
} from "@mui/material";
import { useFormik } from "formik";
import { registroSchema } from "./utils/introduccionDatosSchema";
import { initialValues } from "./utils/initialValuesIntroduccionDatos";
import { useState } from "react";

export default function Localizacion() {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: registroSchema,
    onSubmit: register,
  });


  const [mensajeRegistro, setMensajeRegistro] = useState(null);

  async function register(values) {
    console.log("Hola", values);
  }

  //   async function register(values, actions) {
  //     const response = await fetch("http://localhost:3001/user/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(values),
  //     });
  //     if (response.status === 200) {
  //       await new Promise((resolve) => setTimeout(resolve, 2000));
  //       actions.resetForm();
  //     }
  //   }

  return (
    <>
      {/* <form className="form-register" onSubmit={handleSubmit}> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            // border: "1px solid grey",
            borderRadius: 2,
            width: "90%",
            p: 10,
            margin: "0 auto",
          }}
        >
          <Grid container spacing={15} width="100%" sx={{ width: "100%" }}>
            <Grid item xs={6}>
              <TextField
                id="tipoVia"
                error={errors.tipoVia && touched.tipoVia}
                name="tipoVia"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.tipoVia}
                helperText={errors.tipoVia}
                label="Tipo de via"
                size="small"
                sx={{ m: 1, width: "100%" }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="nombre"
                error={errors.nombre && touched.nombre}
                name="nombre"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nombre}
                helperText={errors.nombre}
                label="Nombre de la via"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
          </Grid>

          {/* //SEGUNDA ROW */}
          <Grid container spacing={12} width="100%" sx={{ width: "100%" }}>
            {/* //PRIMERA PARTE */}
          <Grid item xs={6}>

          <Grid container spacing={3} width="100%" sx={{ width: "100%" }}>
            <Grid item xs={4}>
              <TextField
                id="numero"
                error={errors.numero && touched.numero}
                type="number"
                name="numero"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.numero}
                helperText={errors.numero}
                label="Numero"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="piso"
                type="number"
                error={errors.piso && touched.piso}
                name="piso"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.piso}
                helperText={errors.piso}
                label="Piso"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="puerta"
                error={errors.puerta && touched.puerta}
                name="puerta"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.puerta}
                helperText={errors.puerta}
                label="Puerta"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
            </Grid>
            </Grid>
            <Grid item xs={6}>
          <Grid container spacing={3} width="100%" sx={{ width: "100%" }}>

            <Grid item xs={3}>
              <TextField
                id="bloque"
                type="number"
                error={errors.bloque && touched.bloque}
                name="bloque"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bloque}
                helperText={errors.bloque}
                label="Bloque"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                id="CP"
                error={errors.CP && touched.CP}
                type="postal"
                name="CP"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.CP}
                helperText={errors.CP}
                label="CP"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
            <Grid item xs={6}>
            <TextField
                id="localidad"
                error={errors.localidad && touched.localidad}
                name="localidad"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.localidad}
                helperText={errors.localidad}
                label="Localidad"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
          </Grid>
          </Grid>
          </Grid>

          {/* //tercer ROW */}
          <Grid container spacing={12} width="100%" sx={{ width: "100%" }}>
            {/* //PRIMERA PARTE */}
          <Grid item xs={6}>

          <Grid container spacing={3} width="100%" sx={{ width: "100%" }}>
            <Grid item xs={6}>
              <TextField
                id="latitud"
                error={errors.numero && touched.numero}
                name="latitud"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.latitud}
                helperText={errors.latitud}
                label="Latitud"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="longitud"
                error={errors.longitud && touched.longitud}
                name="longitud"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.longitud}
                helperText={errors.longitud}
                label="Longitud"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
            
            </Grid>
            </Grid>
            <Grid item xs={6}>
          <Grid container spacing={3} width="100%" sx={{ width: "100%" }}>

            <Grid item xs={6}>
              <TextField
                id="provincia"
                error={errors.provincia && touched.provincia}
                name="provincia"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.provincia}
                helperText={errors.provincia}
                label="Provincia"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id="pais"
                error={errors.pais && touched.pais}
                name="pais"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.pais}
                helperText={errors.pais}
                label="Pais"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
          </Grid>
          </Grid>
          </Grid>
        </Box>
          {/* <Button type="submit">REGISTER</Button> */}
      {/* </form> */}
    </>
  );
}
