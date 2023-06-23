import {
  TextField,
  Box,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useState, useEffect } from "react";

export default function IntroduccionDatos() {
  return (
    <>
    
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          //   border:"1px solid black",
          borderRadius: 2,
          width: "80%",
          p: 5,
          margin: "0 auto",
          mt: 8,
          borderLeft: "2px solid #000",
          borderRight: " 2px solid #000",
          borderBottom: " 2px solid #000",
          boxShadow: "1px 1px 3px 1px black",
          position:"relative"
        }}
      >
        <h3 className="titulos-form">Datos de usuario</h3>
        <Grid container spacing={15} width="100%" sx={{ width: "100%" }}>
          <Grid item xs={6}>
            <TextField
              className="input-form-normal"
              id="NOMBRE"
              //   error={formik.errors.NOMBRE && formik.touched.NOMBRE}
              name="NOMBRE"
              //   onChange={formik.handleChange}
              //   onBlur={formik.handleBlur}
              //   value={formik.values.NOMBRE}
              //   helperText={formik.errors.NOMBRE}
              label="Nombre completo"
              size="small"
              sx={{ m: 1, width: "100%" }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="EMAIL"
              //   error={formik.errors.EMAIL && formik.touched.EMAIL}
              name="EMAIL"
              //   onChange={formik.handleChange}
              //   onBlur={formik.handleBlur}
              //   value={formik.values.EMAIL}
              //   helperText={formik.errors.EMAIL}
              label="Email"
              size="small"
              sx={{ m: 1, width: "100%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={15} width="100%" sx={{ width: "100%" }}>
          <Grid item xs={6}>
            <TextField
              id="TLF"
              //   error={formik.errors.TLF && formik.touched.TLF}
              type="tel"
              name="TLF"
              //   onChange={formik.handleChange}
              //   onBlur={formik.handleBlur}
              //   value={formik.values.TLF}
              //   helperText={formik.errors.TLF}
              label="Telefono"
              size="small"
              sx={{ m: 1, width: "100%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="URL"
              //   error={formik.errors.URL && formik.touched.URL}
              name="URL"
              //   onChange={formik.handleChange}
              //   onBlur={formik.handleBlur}
              //   value={formik.values.URL}
              //   helperText={formik.errors.URL}
              label="Url"
              size="small"
              sx={{ m: 1, width: "100%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={15} width="100%" sx={{ width: "100%" }}>
          <Grid item xs={6}>
            <TextField
              id="PASSWORD"
              type="password"
              //   error={formik.errors.PASSWORD && formik.touched.PASSWORD}
              name="PASSWORD"
              //   onChange={formik.handleChange}
              //   onBlur={formik.handleBlur}
              //   value={formik.values.PASSWORD}
              //   helperText={formik.errors.PASSWORD}
              label="Password"
              size="small"
              sx={{ m: 1, width: "100%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="repetirPassword"
              type="password"
              //   error={formik.errors.repetirPassword && formik.touched.repetirPassword}
              name="repetirPassword"
              //   onChange={formik.handleChange}
              //   onBlur={formik.handleBlur}
              //   value={formik.values.repetirPassword}
              //   helperText={formik.errors.repetirPassword}
              label="Repetir password"
              size="small"
              sx={{ m: 1, width: "100%" }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={15} width="100%" sx={{ width: "100%" }}>
          <Grid item xs={6}>
            <TextField
              id="DESCRIPCION"
              multiline
              rows={4}
              //   error={formik.errors.DESCRIPCION && formik.touched.DESCRIPCION}
              name="DESCRIPCION"
              //   onChange={formik.handleChange}
              //   onBlur={formik.handleBlur}
              //   value={formik.values.DESCRIPCION}
              //   helperText={formik.errors.DESCRIPCION}
              label="Descripcion"
              size="small"
              sx={{ m: 1, width: "100%" }}
            />
          </Grid>
        </Grid>
      </Box>
      {/* </form> */}
      {/* <pre>{JSON.stringify(formik.values, null,1)}</pre> */}
    </>
  );
}
