import { TextField, Box, Grid, Button } from "@mui/material";
import { Formik } from "formik";
import { schema } from "../schemaDatos";

export default function DatosEditables({ user, onSubmit, isEditing, setIsEditing }) {
  function cancelarEdit() {
    setIsEditing(false);
  }

  return (
    <>
      {user?.map((item, index) => {
        return (
          <Formik
            key={index}
            validationSchema={schema}
            initialValues={{
              NOMBRE: item.NOMBRE,
              EMAIL: item.EMAIL,
              TLF: item.TLF,
              URL: item.URL,
              DESCRIPCION: item.DESCRIPCION,
            }}
            onSubmit={onSubmit}
          >
            {(props) => (
              <form className="form-register" onSubmit={props.handleSubmit}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 2,
                    alignItems: "center",
                    width: "100%",
                    p: 5,
                    margin: "0 auto",
                    mt: 8,
                    borderLeft: "2px solid #000",
                    borderRight: " 2px solid #000",
                    borderBottom: " 2px solid #000",
                    boxShadow: "1px 1px 3px 1px black",
                    position: "relative",
                  }}
                >
                  <h3 className="titulos-form-datos">Datos de usuario</h3>
                  <Grid container spacing={15} width="100%" sx={{ width: "100%" }}>
                    <Grid item xs={6}>
                      <TextField
                        className="input-form-normal"
                        id="NOMBRE"
                        error={props.errors.NOMBRE && props.touched.NOMBRE}
                        name="NOMBRE"
                        focused
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.NOMBRE}
                        helperText={props.errors.NOMBRE}
                        size="small"
                        sx={{ m: 1, width: "100%" }}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="EMAIL"
                        error={props.errors.EMAIL && props.touched.EMAIL}
                        name="EMAIL"
                        focused
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.EMAIL}
                        helperText={props.errors.EMAIL}
                        size="small"
                        sx={{ m: 1, width: "100%" }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={15} width="100%" sx={{ width: "100%" }}>
                    <Grid item xs={6}>
                      <TextField
                        id="TLF"
                        error={props.errors.TLF && props.touched.TLF}
                        type="tel"
                        name="TLF"
                        focused
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.TLF}
                        helperText={props.errors.TLF}
                        placeholder={item.TLF}
                        size="small"
                        sx={{ m: 1, width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="URL"
                        error={props.errors.URL && props.touched.URL}
                        name="URL"
                        focused
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.URL}
                        helperText={props.errors.URL}
                        placeholder={item.URL}
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
                        error={props.errors.DESCRIPCION && props.touched.DESCRIPCION}
                        focused
                        name="DESCRIPCION"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.DESCRIPCION}
                        helperText={props.errors.DESCRIPCION}
                        size="small"
                        placeholder={item.DESCRIPCION}
                        sx={{ m: 1, width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs={2} sx={{ mt: "10%", ml: 2 }}>
                      <Button variant="contained" component="label" onClick={() => onSubmit(props.values)}>
                        Guardar
                      </Button>
                    </Grid>
                    <Grid item xs={2} sx={{ mt: "10%", ml: 2 }}>
                      <Button variant="contained" component="label" onClick={cancelarEdit}>
                        Cancelar
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            )}
          </Formik>
        );
      })}
    </>
  );
}
