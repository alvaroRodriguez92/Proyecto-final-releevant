import { TextField, Box, Button, Typography, Grid, Link } from "@mui/material";
import { useFormik } from "formik";
import { registroSchema } from "./registroSchema";
import { initialValues } from "./initialValues";
import { useState } from "react";

export default function IntroduccionDatos() {
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
      <form className="form-register" onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            
            // border: "1px solid grey",
            borderRadius: 2,
            width: "90%",
            p: 10,
            margin:"0 auto"
          }}
        >
          <Grid container spacing={15} width="100%" sx={{ width: "100%" }}>
            <Grid item xs={6}>
              <TextField
                id="nombre"
                error={errors.nombre && touched.nombre}
                name="nombre"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nombre}
                helperText={errors.nombre}
                label="Nombre completo"
                size="small"
                sx={{ m: 1, width: "100%" }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="email"
                error={errors.email && touched.email}
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                helperText={errors.email}
                label="Email"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={15} width="100%" sx={{ width: "100%" }}>
            <Grid item xs={6}>
              <TextField
                id="tfn"
                error={errors.tfn && touched.tfn}
                type="tel"
                name="tfn"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.tfn}
                helperText={errors.tfn}
                label="Telefono"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="url"
                error={errors.url && touched.url}
                name="url"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.url}
                helperText={errors.url}
                label="Url"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={15} width="100%" sx={{ width: "100%" }}>
            <Grid item xs={6}>
              <TextField
                id="password"
                type="password"
                error={errors.password && touched.password}
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                helperText={errors.password}
                label="Password"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="repetirPassword"
                type="password"
                error={errors.repetirPassword && touched.repetirPassword}
                name="repetirPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.repetirPassword}
                helperText={errors.repetirPassword}
                label="Repetir password"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={15} width="100%" sx={{ width: "100%" }}>
            <Grid item xs={6}>
              <TextField
                id="descripcion"
                multiline
                rows={4}
                error={errors.descripcion && touched.descripcion}
                name="descripcion"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.descripcion}
                helperText={errors.descripcion}
                label="Descripcion"
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
          </Grid>
        </Box>
      </form>
    </>
  );
}
