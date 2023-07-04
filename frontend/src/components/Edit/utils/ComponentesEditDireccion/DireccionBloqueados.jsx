import {
  TextField,
  Box,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function DireccionBloqueados({setIsEditing, addressBloqueo }) {
  function editarDatos() {
    setIsEditing(true);
  }

  console.log(addressBloqueo);
  return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          //   border:"1px solid black",
          borderRadius: 2,
          width: "90%",
          p: 5,
          alignItems: "center",
          margin: "0 auto",
          mt: 8,
          borderLeft: "2px solid #000",
          borderRight: " 2px solid #000",
          borderBottom: " 2px solid #000",
          boxShadow: "1px 1px 3px 1px black",
          position: "relative",
        }}
      >
        <h3 className="titulos-form-direccion">Direcciones </h3>

        {addressBloqueo?.map((item, index) => {
          
          return(
            <>
            <h5 className="direccion">Direccion {index+1}</h5>
          <Grid container spacing={12} width="100%" sx={{ width: "100%" }}>
            <Grid item xs={6}>
              <TextField
                // id={`DIRECCIONES[${index}].TIPO_VIA`}
                // error={formik.errors.direcciones[index].tipoVia && formik.touched.direcciones[index].tipoVia}
                // name={`DIRECCIONES[${index}].TIPO_VIA`}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.DIRECCIONES[index].TIPO_VIA}
                // helperText={formik.errors.tipoVia}
                disabled
                value={item.TIPO_VIA}
                size="small"
                sx={{ m: 1, width: "95%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                // id={`DIRECCIONES[${index}].NOMBRE_VIA`}
                // error={formik.errors.direcciones[index].nombreVia && formik.touched.direcciones[index].nombreVia}
                // name={`DIRECCIONES[${index}].NOMBRE_VIA`}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.DIRECCIONES[index].NOMBRE_VIA}
                // helperText={formik.values.direcciones[index].nombreVia}
                disabled
                value={item.NOMBRE_VIA}
                size="small"
                sx={{ m: 1, width: "95%" }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={12} width="100%" sx={{ width: "100%" }}>
            <Grid item xs={6}>
              <Grid container spacing={3} width="100%" sx={{ width: "100%" }}>
                <Grid item xs={4}>
                  <TextField
                    // id={`DIRECCIONES[${index}].NUMERO`}
                    // error={formik.errors.direcciones[index].numero && formik.touched.direcciones[index].numero}
                    type="number"
                    // name={`DIRECCIONES[${index}].NUMERO`}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.DIRECCIONES[index].NUMERO}
                    // helperText={formik.errors.direcciones[index].numero}
                    disabled
                    value={item.NUMERO}
                    size="small"
                    sx={{ m: 1, width: "100%" }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    // id={`DIRECCIONES[${index}].PISO`}
                    type="number"
                    // error={formik.errors.direcciones[index].piso && formik.touched.direcciones[index].piso}
                    // name={`DIRECCIONES[${index}].PISO`}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.DIRECCIONES[index].PISO}
                    // helperText={formik.errors.direcciones[index].piso}
                    disabled
                    value={item.PISO}
                    size="small"
                    sx={{ m: 1, width: "100%" }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    // id={`DIRECCIONES[${index}].PUERTA`}
                    // error={formik.errors.direcciones[index].puerta && formik.touched.direcciones[index].puerta}
                    // name={`DIRECCIONES[${index}].PUERTA`}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.DIRECCIONES[index].PUERTA}
                    // helperText={formik.errors.direcciones[index].puerta}
                    disabled
                    value={"puerta"}
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
                    type="number"
                    disabled
                    value={item.BLOQUE}
                    size="small"
                    sx={{ m: 1, width: "100%" }}
                  />
                </Grid>

                <Grid item xs={3}>
                  <TextField
                    type="postal"
                    disabled
                    value={item.CP}
                    size="small"
                    sx={{ m: 1, width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    disabled
                    value={"localidad"}
                    size="small"
                    sx={{ m: 1, width: "100%" }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={12} width="100%" sx={{ width: "100%" }}>
            <Grid item xs={6}>
              <Grid container spacing={3} width="100%" sx={{ width: "100%",mb:6 }}>
                <Grid item xs={6}>
                  <TextField
                    disabled
                    value={item.LONGITUD}
                    size="small"
                    sx={{ m: 1, width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    disabled
                    value={item.LATITUD}
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
                    disabled
                    value={item.PROVINCIA}
                    size="small"
                    sx={{ m: 1, width: "100%" }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    disabled
                    value={item.PAIS}
                    size="small"
                    sx={{ m: 1, width: "100%" }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          </>)
        })}
        

        <Button
          sx={{ ml: "81%", mt: 5 }}
          variant="contained"
          component="label"
          onClick={editarDatos}
        >
          <EditIcon />
        </Button>
      </Box>
      
  );
}
