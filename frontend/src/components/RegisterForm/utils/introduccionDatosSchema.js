import * as Yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const MAX_FILE_SIZE = 102400000;

const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };


function isValidFileType(fileName, fileType) {
  return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}

export const registroSchema = Yup.object().shape({
  NOMBRE: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  EMAIL: Yup.string("Must be a string")
    .email("Enter a valid email")
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  TLF: Yup.number("Must be a valid number")
    .min(99999, "Too short!")
    .max(999999999999, "Too long!")
    .required("Required"),
  URL: Yup.string().min(2, "Too short!").max(50, "Too long!"),
  DESCRIPCION: Yup.string().max(1000, "Too long!"),
  PASSWORD: Yup.string()
    .matches(passwordRules, {
      message:
        "Must contain at least 5 characters, 1 uppercase, 1 lowercase and 1 number",
    })
    .required("Requerido"),
  repetirPassword: Yup.string()
    .oneOf([Yup.ref("PASSWORD"), null], "The password must be the same")
    .required("Required"),
  sector: Yup.string().required("Required"),
  CATEGORIA: Yup.string().required("Required"),
  DIRECCIONES: Yup.array(
    Yup.object({
      TIPO_VIA: Yup.string()
        .min(2, "Too short!")
        .max(40, "Too long!")
        .required("Required"),
      NOMBRE_VIA: Yup.string("Must be a string")
        .min(2, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
      NUMERO: Yup.number("Must be a valid number").required("Required"),
      PISO: Yup.number().max(999, "Too long!"),
      PUERTA: Yup.string().max(10, "Too long!"),
      BLOQUE: Yup.number().max(999, "Too long!"),
      CP: Yup.number("Must be a valid postalcode")
        .min(2, "Too short!")
        .max(100000, "Too long!")
        .required("Required"),
      LOCALIDAD: Yup.string().max(100, "Too long!"),
      PROVINCIA: Yup.string().max(100, "Too long!"),
      PAIS: Yup.string().max(100, "Too long!"),
      LONGITUD: Yup.number("Must be a valid postalcode").required("Required"),
      LATITUD: Yup.number("Must be a valid postalcode").required("Required"),
      
        
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
