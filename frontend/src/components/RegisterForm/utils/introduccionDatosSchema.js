import * as Yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const MAX_FILE_SIZE = 102400000;

const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };


function isValidFileType(fileName, fileType) {
  return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}

export const registroSchema = Yup.object().shape({
  NOMBRE: Yup.string()
    .min(2, "Demasiado corto!")
    .max(50, "Demasiado largo!")
    .required("Requerido"),
  EMAIL: Yup.string("Debe ser un email válido")
    .email("Debe ser un email válido")
    .min(2, "Demasiado corto!")
    .max(50, "Demasiado largo!")
    .required("Requerido"),
  TLF: Yup.number("Debe ser un número válido")
    .min(99999, "Demasiado corto!")
    .max(999999999999, "Demasiado largo!")
    .required("Requerido"),
  URL: Yup.string().min(2, "Demasiado corto!").max(50, "Demasiado largo!"),
  DESCRIPCION: Yup.string().max(1000, "Demasiado largo!"),
  PASSWORD: Yup.string()
    .matches(passwordRules, {
      message:
      "Debe contener al menos 5 carácteres, 1 mayúsculas, 1 minúsculas y 1 número"
    })
    .required("Requerido"),
  repetirPassword: Yup.string()
    .oneOf([Yup.ref("PASSWORD"), null], "La contraseña debe ser la misma")
    .required("Requerido"),
  sector: Yup.string().required("Requerido"),
  CATEGORIA: Yup.string().required("Requerido"),
  DIRECCIONES: Yup.array(
    Yup.object({
      TIPO_VIA: Yup.string()
        .min(2, "Demasiado corto!")
        .max(40, "Demasiado largo!")
        .required("Requerido"),
      NOMBRE_VIA: Yup.string("Must be a string")
        .min(2, "Demasiado corto!")
        .max(50, "Demasiado largo!")
        .required("Requerido"),
      NUMERO: Yup.number("Debe ser un número válido").required("Requerido"),
      PISO: Yup.number().max(999, "Demasiado largo!"),
      PUERTA: Yup.string().max(10, "Demasiado largo!"),
      BLOQUE: Yup.number().max(999, "Demasiado largo!"),
      CP: Yup.number("Debe ser un código postal válido")
        .min(2, "Demasiado corto!")
        .max(100000, "Demasiado largo!")
        .required("Requerido"),
      LOCALIDAD: Yup.string().max(100, "Demasiado largo!"),
      PROVINCIA: Yup.string().max(100, "Demasiado largo!"),
      PAIS: Yup.string().max(100, "Demasiado largo!"),
      LONGITUD: Yup.number("").required("Requerido"),
      LATITUD: Yup.number("").required("Requerido"),
      
        
    })
  ),
  LOGO: Yup
    .mixed(),
    
      // .required("Required")
      // .test("is-valid-type", "Not a valid image type",
      //   value => isValidFileType(value && value.name.toLowerCase(), "image"))
      // .test("is-valid-size", "Max allowed size is 1000KB",
      //   value => value && value.size <= MAX_FILE_SIZE),
      IMAGEN: Yup
      .mixed()
      // .test("is-valid-type", "Not a valid image type",
      //   value => isValidFileType(value && value.name.toLowerCase(), "image"))
      // .test("is-valid-size", "Max allowed size is 1000KB",
      //   value => value && value.size <= MAX_FILE_SIZE)
});
