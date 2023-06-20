import * as React from "react";

import {
  Stepper,
  Step,
  StepButton,
  Button,
  Typography,
  Box,
  TextField,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import IntroduccionDatos from "../RegisterForm/IntroduccionDatos";
import Localizacion from "../RegisterForm/Localizacion";
import LogoFotos from "../RegisterForm/LogoFotos";
import { useState } from "react";
import { initialValues } from "../RegisterForm/utils/initialValuesIntroduccionDatos";
import { registroSchema } from "../RegisterForm/utils/introduccionDatosSchema";
import { useFormik, FieldArray } from "formik";

const steps = ["Introducción de datos", "Localización", "Logo/Fotos"];

export default function Registro() {
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

  function register(values) {
    setFormResult({
      nombre: values.nombre,
      email: values.email,
      tfn: values.tfn,
      url: values.url,
      descripcion: values.descripcion,
      password: values.password,
      repetirPassword: values.repetirPassword,
      sector: values.sector,
      categoria: values.categoria,
      // direccion:[{piso: values.pisovalues.}]
    });
    console.log(formResult);
  }

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [adding, setAdding] = useState(false);
  const [formResult, setFormResult] = useState({
    nombre: "",
    email: "",
    tfn: "",
    url: "",
    descripcion: "",
    password: "",
    repetirPassword: "",
    sector: "",
    categoria: "",
  });

  function isAdding() {
    setAdding(true);
  }

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = (values) => {
    // setIntroduccionDatos(values)
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
    // console.log(introduccionDatos)
    // setFormResult(values)
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <>
      <h1>Registro</h1>
      <Box sx={{ width: "80%", margin: "0 auto" }}>
        <Stepper nonLinear activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 5, mb: 1, ml: 15 }}>
                Gracias por registrarte en Optimus Solutions.
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <form className="form-register" onSubmit={handleSubmit}>
                {activeStep == 0 ? (
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
                    <Grid
                      container
                      spacing={15}
                      width="100%"
                      sx={{ width: "100%" }}
                    >
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
                    <Grid
                      container
                      spacing={15}
                      width="100%"
                      sx={{ width: "100%" }}
                    >
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
                    <Grid
                      container
                      spacing={15}
                      width="100%"
                      sx={{ width: "100%" }}
                    >
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
                          error={
                            errors.repetirPassword && touched.repetirPassword
                          }
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

                    <Grid
                      container
                      spacing={15}
                      width="100%"
                      sx={{ width: "100%" }}
                    >
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
                          size="small"
                          sx={{ m: 1, width: "100%" }}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Grid
                          container
                          spacing={1}
                          width="100%"
                          sx={{ margin: "0 auto" }}
                        >
                          <Grid item xs={6}>
                            <FormControl fullWidth>
                              <InputLabel id="demo-select-small-label">
                                Sector
                              </InputLabel>
                              <Select
                                labelId="demo-select-small-label"
                                id="sector"
                                name="sector"
                                value={values.sector}
                                label="Sector"
                                onChange={handleChange}
                                fullWidth
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>

                          <Grid item xs={6}>
                            <FormControl fullWidth>
                              <InputLabel id="demo-select-small-label">
                                Categoría
                              </InputLabel>
                              <Select
                                labelId="demo-select-small-label"
                                id="categoria"
                                name="categoria"
                                value={values.categoria}
                                label="Categoria"
                                onChange={handleChange}
                                fullWidth
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                ) : activeStep == 1 ? (
                  <FieldArray name="direcciones">
                    {({push, remove})=>(

                    
                  <>
                  {values.direcciones.map((_, index)=>(

                  
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
                      <Grid
                        container
                        spacing={15}
                        width="100%"
                        sx={{ width: "100%" }}
                      >

                        <Grid item xs={6}>
                          <TextField
                            id={`direcciones[${index}].tipoVia`}
                            error={errors.direcciones[index].tipoVia && touched.direcciones[index].tipoVia}
                            name={`direcciones[${index}].tipoVia`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.direcciones[index].tipoVia}
                            helperText={errors.direcciones[index].tipoVia}
                            label="Tipo de via"
                            size="small"
                            sx={{ m: 1, width: "100%" }}
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            id="nombreVia"
                            error={errors.nombreVia && touched.nombreVia}
                            name="direcciones[0].nombreVia"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.nombreVia}
                            helperText={errors.nombreVia}
                            label="Nombre de la via"
                            size="small"
                            sx={{ m: 1, width: "100%" }}
                          />
                        </Grid>
                      </Grid>

                      {/* //SEGUNDA ROW */}
                      <Grid
                        container
                        spacing={12}
                        width="100%"
                        sx={{ width: "100%" }}
                      >
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
                          <Grid
                            container
                            spacing={3}
                            width="100%"
                            sx={{ width: "100%" }}
                          >
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
                      <Grid
                        container
                        spacing={12}
                        width="100%"
                        sx={{ width: "100%" }}
                      >
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
                          <Grid
                            container
                            spacing={3}
                            width="100%"
                            sx={{ width: "100%" }}
                          >
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
                    ))}
                  </>
                  )}
                  </FieldArray>
                ) : activeStep == 2 ? (
                  <LogoFotos />
                ) : (
                  ""
                )}
              

              <Box width="20%" sx={{ display: "flex", flexDirection: "row", pt: 2, margin:"0 auto"}}>
                <Grid container sx={{margin: "0 auto"}}>
                  <Grid item xs={4}>
                    <Button
                    variant="contained"
                    //   color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Anterior
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="contained" onClick={handleNext} sx={{ mr: 1 }}>
                      Siguiente
                    </Button>
                  </Grid>
                </Grid>
                </Box>
                {/* <Box sx={{ flex: "1 1 auto" }} /> */}
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <>
                      <Typography variant="p" sx={{ml:"77%"}}>
                        Paso {activeStep + 1} completado
                      </Typography>
                    </>
                  ) : (
                    
                      completedSteps() === totalSteps() - 1
                        ? (<Button variant="contained" type="submit" sx={{ml:"77%", mb:5}} onClick={handleComplete}>"Finalizar"</Button>)
                        : (<Button variant="contained"sx={{ml:"77%", mb:5}} onClick={handleComplete}>"Confirmar paso"</Button>)
                    
                  ))}
                  <pre>{JSON.stringify({values,errors}, null,4)}</pre>
            </form>
            </React.Fragment>
          )}
        </div>
      </Box>
    </>
  );
}
