import { TextField, Box, Button, Grid } from "@mui/material";
import { FieldArray } from "formik";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

export default function EditDireccion({address}) {

  console.log(address)
  return (
    <>
    {address?.map((item)=>{

    return(
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        //   border:"1px solid black",
        borderRadius: 2,
        width: "80%",
        p: 5,
        alignItems:"center",
        margin: "0 auto",
        mt: 20,
        borderLeft: "2px solid #000",
        borderRight: " 2px solid #000",
        borderBottom: " 2px solid #000",
        boxShadow: "1px 1px 3px 1px black",
        position: "relative",
      }}
    >
      <h3 className="titulos-form">Direcciones </h3>

      <Grid container spacing={15} width="100%" sx={{ width: "100%" }}>
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
            sx={{ m: 1, width: "100%" }}
            variant="outlined"
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
                // id={`DIRECCIONES[${index}].BLOQUE`}
                type="number"
                // error={formik.errors.direcciones[index].bloque && formik.direcciones[index].touched.bloque}
                // name={`DIRECCIONES[${index}].BLOQUE`}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.DIRECCIONES[index].BLOQUE}
                // helperText={formik.errors.direcciones[index].bloque}
                disabled
                value={item.BLOQUE}
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                // id={`DIRECCIONES[${index}].CP`}
                // error={formik.errors.direcciones[index].CP && formik.touched.direcciones[index].CP}
                type="postal"
                // name={`DIRECCIONES[${index}].CP`}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.DIRECCIONES[index].CP}
                // helperText={formik.errors.direcciones[index].CP}
                disabled
                value={item.CP}
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                // id={`DIRECCIONES[${index}].LOCALIDAD`}
                // error={formik.errors.direcciones[index].localidad && formik.touched.direcciones[index].localidad}
                // name={`DIRECCIONES[${index}].LOCALIDAD`}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.DIRECCIONES[index].LOCALIDAD}
                // helperText={formik.errors.direcciones[index].localidad}
                disabled
                value={"localidad"}
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
                // id={`DIRECCIONES[${index}].LATITUD`}
                // error={formik.errors.direcciones[index].latitud && formik.touched.direcciones[index].latitud}
                // name={`DIRECCIONES[${index}].LATITUD`}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.DIRECCIONES[index].LATITUD}
                // helperText={formik.errors.direcciones[index].latitud}
                disabled
                value={item.LONGITUD}
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                // id={`DIRECCIONES[${index}].LONGITUD`}
                // error={formik.errors.direcciones[index].longitud && formik.touched.direcciones[index].longitud}
                // name={`DIRECCIONES[${index}].LONGITUD`}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.DIRECCIONES[index].LONGITUD}
                // helperText={formik.errors.direcciones[index].longitud}
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
                // id={`DIRECCIONES[${index}].PROVINCIA`}
                // error={formik.errors.direcciones[index].provincia && formik.touched.direcciones[index].provincia}
                // name={`DIRECCIONES[${index}].PROVINCIA`}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.DIRECCIONES[index].PROVINCIA}
                // helperText={formik.errors.direcciones[index].provincia}
                disabled
                value={item.PROVINCIA}
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                // id={`DIRECCIONES[${index}].PAIS`}
                // error={formik.errors.direcciones[index].pais && formik.touched.direcciones[index].pais}
                // name={`DIRECCIONES[${index}].PAIS`}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.DIRECCIONES[index].PAIS}
                // helperText={formik.errors.direcciones[index].pais}
                disabled
                value={item.PAIS}
                size="small"
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    )  
  })}
    </>
  );
}
