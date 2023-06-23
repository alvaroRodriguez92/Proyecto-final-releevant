import { Formik } from "formik";
import { initialValues } from "../RegisterForm/utils/initialValuesIntroduccionDatos"
import { registroSchema } from "../RegisterForm/utils/introduccionDatosSchema";
import Stepper from "../Stepper/Stepper";
import StepContainer from "../RegisterForm/utils/StepContainer";
import IntroduccionDatos from "../RegisterForm/IntroduccionDatos";
import Localizacion from "../RegisterForm/Localizacion";
import LogoFotos from "../RegisterForm/LogoFotos";

import {
  TextField,
  Box,
  Button,
  Typography,
  Grid,
  Link,
  Select,
  MenuItem,
  FormControl, 
  InputLabel
} from "@mui/material";

const steps = ["Introducción de datos", "Localización", "Logo/Fotos"];

async function onSubmit(values, actions) {
  console.log("submiteandooooo")
  const formData= new FormData();
  formData.append("NOMBRE", values.NOMBRE)
  formData.append("EMAIL", values.EMAIL)
  formData.append("TLF", values.TLF)
  formData.append("URL", values.URL)
  formData.append("DESCRIPCION", values.DESCRIPCION)
  formData.append("PASSWORD", values.PASSWORD)
  formData.append("CATEGORIA", values.CATEGORIA)
  values.DIRECCIONES.map((item)=>{
    formData.append("TIPO_VIA", item.TIPO_VIA)
    formData.append("NOMBRE_VIA", item.NOMBRE_VIA)
    formData.append("NUMERO", item.NUMERO)
    formData.append("PISO", item.PISO)
    formData.append("PUERTA", item.PUERTA) 
    formData.append("BLOQUE", item.BLOQUE)
    formData.append("CP", item.CP)
    formData.append("LOCALIDAD", item.LOCALIDAD)
    formData.append("PROVINCIA", item.PROVINCIA)
    formData.append("PAIS", item.PAIS)
    formData.append("LONGITUD", item.LONGITUD)
    formData.append("LATITUD", item.LATITUD)
})
  formData.append("LOGO", values.LOGO)
  if(values.IMAGEN !==""){

    values.IMAGEN.map((item)=>{
      formData.append("IMAGEN", item)
    })
  }else{
    formData.append("IMAGEN",values.IMAGEN)
  }
    
  console.log(formData);
  const response = await fetch("http://127.0.0.1:3000/user/", {
    method: "POST",
    body: formData
  });
  if (response.status === 200) {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Registro realizado con éxito")
    actions.resetForm();
  }
}

export default function RegistroProfesional() {


  return (
    <Formik
      validationSchema={registroSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {(props) => (
        <form className="form-register" onSubmit={props.handleSubmit}>
          <StepContainer >
            <Stepper
              steps={steps}
              renderStep={(step) => {
                switch (step) {
                  case 0:
                    return <IntroduccionDatos formik={props} />;
                  case 1:
                    return <Localizacion formik={props} />;
                  case 2:
                    return <LogoFotos formik={props} />;

                  default:
                    return <UserDataForm formik={props} />;
                }
              }}
            />
          </StepContainer>
        </form>
      )}
    </Formik>
  );
}
