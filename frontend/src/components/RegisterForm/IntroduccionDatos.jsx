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

  const [mensajeRegistro, setMensajeRegistro]= useState(null)

  async function register(values){
    console.log("Hola", values  )
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

      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
            border: "1px solid grey",
            borderRadius: 2,
          }}
        >
          <Grid item xs={12}>
            <TextField
              id="firstname"
              error={errors.firstname && touched.firstname}
              name="firstname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstname}
              helperText={errors.firstname}
              label="Firstname"
              size="small"
              sx={{ m: 1, width: "47%" }}
            />
            <TextField
              id="lastname"
              error={errors.lastname && touched.lastname}
              name="lastname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastname}
              helperText={errors.lastname}
              label="Lastname"
              size="small"
              sx={{ m: 1, width: "47%" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              error={errors.address && touched.address}
              name="address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
              helperText={errors.address}
              label="Address"
              size="small"
              sx={{ m: 1, width: "47%" }}
            />
            <TextField
              id="city"
              error={errors.city && touched.city}
              name="city"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
              helperText={errors.city}
              label="City"
              size="small"
              sx={{ m: 1, width: "47%" }}
            />
          </Grid>
          <TextField
            id="postalcode"
            error={errors.postalcode && touched.postalcode}
            type="postal"
            name="postalcode"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.postalcode}
            helperText={errors.postalcode}
            label="Postalcode"
            size="small"
            sx={{ m: 1, width: "47%" }}
          />

          <Grid item xs={12}>
            <TextField
              id="birthdate"
              error={errors.birthdate && touched.birthdate}
              name="birthdate"
              type="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.birthdate}
              helperText={errors.birthdate}
              label={"Birthdate"}
              InputLabelProps={{
                shrink: true,
              }}
              size="small"
              sx={{ m: 1, width: "47%" }}
            />
            <TextField
              id="email"
              type="email"
              error={errors.email && touched.email}
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              helperText={errors.email}
              label="Email"
              size="small"
              sx={{ m: 1, width: "47%" }}
            />
          </Grid>

          <Grid item xs={12}>
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
              sx={{ m: 1, width: "47%" }}
            />
            <TextField
              id="repeatPassword"
              type="password"
              error={errors.repeatPassword && touched.repeatPassword}
              name="repeatPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.repeatPassword}
              helperText={errors.repeatPassword}
              label="Repeat password"
              size="small"
              sx={{ m: 1, width: "47%" }}
            />
          </Grid>
        </Box>
      </form>
    </>
  );
}