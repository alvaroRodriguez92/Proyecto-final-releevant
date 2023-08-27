import {
  TextField,
  Box,
  Grid,
  Button
} from "@mui/material";


export default function IntroduccionDatosUser({formik}) {

  return (
    <>
    
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: 2,
            width: "80%",
            p: 5,
            margin: "0 auto",
          }}
        >
          <Grid container spacing={15} width="100%" sx={{ width: "100%" }}>
            <Grid item xs={6}>
              <TextField
                id="NOMBRE"
                required
                error={formik.errors.NOMBRE && formik.touched.NOMBRE}
                name="NOMBRE"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.NOMBRE}
                helperText={formik.errors.NOMBRE}
                label="Nombre completo"
                size="small"
                sx={{ m: 1, width: "100%" }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
              required
                id="EMAIL"
                error={formik.errors.EMAIL && formik.touched.EMAIL}
                name="EMAIL"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.EMAIL}
                helperText={formik.errors.EMAIL}
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
                error={formik.errors.TLF && formik.touched.TLF}
                type="tel"
                name="TLF"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.TLF}
                helperText={formik.errors.TLF}
                label="Telefono"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={15} width="100%" sx={{ width: "100%" }}>
            <Grid item xs={6}>
              <TextField
                id="PASSWORD"
                required
                type="password"
                error={formik.errors.PASSWORD && formik.touched.PASSWORD}
                name="PASSWORD"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.PASSWORD}
                helperText={formik.errors.PASSWORD}
                label="Password"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="repetirPassword"
                required
                type="password"
                error={formik.errors.repetirPassword && formik.touched.repetirPassword}
                name="repetirPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.repetirPassword}
                helperText={formik.errors.repetirPassword}
                label="Repetir password"
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
          </Grid>
          {/* <Button sx={{m:"0 auto", width:"5", mt:5}}variant="contained" type="submit">Enviar</Button> */}
        </Box>
      {/* <pre>{JSON.stringify(formik.values, null,1)}</pre> */}

    </>
  );
}
