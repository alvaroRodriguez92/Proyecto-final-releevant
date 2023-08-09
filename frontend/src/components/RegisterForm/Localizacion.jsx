import { TextField, Box, Button, Grid,Link } from "@mui/material";
import { FieldArray } from "formik";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import Swal from "sweetalert2"
import 'animate.css';



export default function Localizacion({ formik }) {

  function abrirTutorial(){
    Swal.fire({
      icon: 'info',
      width:1000,
      padding: '2em 4em 4em 4em',
      title: "Como obtener la latitud y longitud",      
      html:"1. Abre Google Maps en tu navegador. <br><br> 2. Haz clic con el botón derecho en el lugar o en el área del mapa y se abrirá una ventana emergente. Puedes encontrar tu latitud y longitud en formato decimal en la parte superior.<br><br> 3. Para copiar las coordenadas automáticamente, haz clic con el botón izquierdo en la latitud y la longitud.",
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown'
      }
    })
  }

  return (
    <FieldArray name="DIRECCIONES">
      {({ push, remove }) => (
        <>
          {formik.values.DIRECCIONES.map((_, index) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",

                // border: "1px solid grey",
                borderRadius: 2,
                width: "80%",
                pt:4,
                margin: "0 auto",
              }}
            >
              <Grid container spacing={15} width="100%" sx={{ width: "100%" }}>
                <Grid item xs={6}>
                  <TextField
                    id={`DIRECCIONES[${index}].TIPO_VIA`}
                    required
                    // error={formik.errors.direcciones[index].tipoVia && formik.touched.direcciones[index].tipoVia}
                    name={`DIRECCIONES[${index}].TIPO_VIA`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.DIRECCIONES[index].TIPO_VIA}
                    // helperText={formik.errors.tipoVia}
                    label="Tipo de via"
                    size="small"
                    sx={{ m: 1, width: "100%" }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id={`DIRECCIONES[${index}].NOMBRE_VIA`}
                    required
                    // error={formik.errors.direcciones[index].nombreVia && formik.touched.direcciones[index].nombreVia}
                    name={`DIRECCIONES[${index}].NOMBRE_VIA`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.DIRECCIONES[index].NOMBRE_VIA}
                    // helperText={formik.values.direcciones[index].nombreVia}
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
                  <Grid
                    container
                    spacing={3}
                    width="100%"
                    sx={{ width: "100%" }}
                  >
                    <Grid item xs={4}>
                      <TextField
                        id={`DIRECCIONES[${index}].NUMERO`}
                        required
                        // error={formik.errors.direcciones[index].numero && formik.touched.direcciones[index].numero}
                        type="number"
                        name={`DIRECCIONES[${index}].NUMERO`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.DIRECCIONES[index].NUMERO}
                        // helperText={formik.errors.direcciones[index].numero}
                        label="Numero"
                        size="small"
                        sx={{ m: 1, width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        id={`DIRECCIONES[${index}].PISO`}
                        type="number"
                        // error={formik.errors.direcciones[index].piso && formik.touched.direcciones[index].piso}
                        name={`DIRECCIONES[${index}].PISO`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.DIRECCIONES[index].PISO}
                        // helperText={formik.errors.direcciones[index].piso}
                        label="Piso"
                        size="small"
                        sx={{ m: 1, width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        id={`DIRECCIONES[${index}].PUERTA`}
                        // error={formik.errors.direcciones[index].puerta && formik.touched.direcciones[index].puerta}
                        name={`DIRECCIONES[${index}].PUERTA`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.DIRECCIONES[index].PUERTA}
                        // helperText={formik.errors.direcciones[index].puerta}
                        label="Puerta"
                        size="small"
                        sx={{ m: 1, width: "100%" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid
                    container
                    spacing={3}
                    width="100%"
                    sx={{ width: "100%" }}
                  >
                    <Grid item xs={3}>
                      <TextField
                        id={`DIRECCIONES[${index}].BLOQUE`}
                        type="number"
                        // error={formik.errors.direcciones[index].bloque && formik.direcciones[index].touched.bloque}
                        name={`DIRECCIONES[${index}].BLOQUE`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.DIRECCIONES[index].BLOQUE}
                        // helperText={formik.errors.direcciones[index].bloque}
                        label="Bloque"
                        size="small"
                        sx={{ m: 1, width: "100%" }}
                      />
                    </Grid>

                    <Grid item xs={3}>
                      <TextField
                        id={`DIRECCIONES[${index}].CP`}
                        // error={formik.errors.direcciones[index].CP && formik.touched.direcciones[index].CP}
                        type="postal"
                        name={`DIRECCIONES[${index}].CP`}
                        required
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.DIRECCIONES[index].CP}
                        // helperText={formik.errors.direcciones[index].CP}
                        label="CP"
                        size="small"
                        sx={{ m: 1, width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id={`DIRECCIONES[${index}].LOCALIDAD`}
                        required
                        // error={formik.errors.direcciones[index].localidad && formik.touched.direcciones[index].localidad}
                        name={`DIRECCIONES[${index}].LOCALIDAD`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.DIRECCIONES[index].LOCALIDAD}
                        // helperText={formik.errors.direcciones[index].localidad}
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
                  <Grid
                    container
                    spacing={3}
                    width="100%"
                    sx={{ width: "100%" }}
                  >
                    <Grid item xs={6}>
                      <TextField
                        id={`DIRECCIONES[${index}].LATITUD`}
                        required
                        // error={formik.errors.direcciones[index].latitud && formik.touched.direcciones[index].latitud}
                        name={`DIRECCIONES[${index}].LATITUD`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.DIRECCIONES[index].LATITUD}
                        // helperText={formik.errors.direcciones[index].latitud}
                        label="Latitud"
                        size="small"
                        sx={{ m: 1, width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id={`DIRECCIONES[${index}].LONGITUD`}
                        required
                        // error={formik.errors.direcciones[index].longitud && formik.touched.direcciones[index].longitud}
                        name={`DIRECCIONES[${index}].LONGITUD`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.DIRECCIONES[index].LONGITUD}
                        // helperText={formik.errors.direcciones[index].longitud}
                        label="Longitud"
                        size="small"
                        sx={{ m: 1, width: "100%" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid
                    container
                    spacing={3}
                    width="100%"
                    sx={{ width: "100%" }}
                  >
                    <Grid item xs={6}>
                      <TextField
                        id={`DIRECCIONES[${index}].PROVINCIA`}
                        required
                        // error={formik.errors.direcciones[index].provincia && formik.touched.direcciones[index].provincia}
                        name={`DIRECCIONES[${index}].PROVINCIA`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.DIRECCIONES[index].PROVINCIA}
                        // helperText={formik.errors.direcciones[index].provincia}
                        label="Provincia"
                        size="small"
                        sx={{ m: 1, width: "100%" }}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        id={`DIRECCIONES[${index}].PAIS`}
                        required
                        // error={formik.errors.direcciones[index].pais && formik.touched.direcciones[index].pais}
                        name={`DIRECCIONES[${index}].PAIS`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.DIRECCIONES[index].PAIS}
                        // helperText={formik.errors.direcciones[index].pais}
                        label="Pais"
                        size="small"
                        sx={{ m: 1, width: "100%" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={12} width="100%" sx={{ width: "100%" }}>
                <Grid sx={{ ml: 13, width: "100%" }} item xs={6}>
              <span className="tutorial">Si no sabe obtener las coordenadas pinche <Link onClick={abrirTutorial} href="#">aquí</Link></span>
                </Grid> 
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={10}>
              <Button sx={{mt:3,ml:1, width:"10%"}} variant="contained" onClick={() => remove(index)}>
                Borrar
              </Button>
              </Grid>

              <Grid item xs={2}>

              
          </Grid>
          </Grid>

            </Box>
          ))}
          <Button
          
          sx={{ml:"70%", width:"15%"}} 
          variant="contained"
            onClick={() =>
              push({
                TIPO_VIA: "",
                NOMBRE_VIA: "",
                NUMERO: "",
                PISO: "",
                PUERTA: "",
                BLOQUE: "",
                CP: "",
                LOCALIDAD: "",
                PROVINCIA: "",
                PAIS: "",
                LONGITUD: "",
                LATITUD: "",
              })
            }
          >
            Añadir dirección <AddToPhotosIcon sx={{ml:1, color:"black" ,width:"32px", height:"32px"}}/>
          </Button>
        </>
      )}
      
    </FieldArray>
  );
}
