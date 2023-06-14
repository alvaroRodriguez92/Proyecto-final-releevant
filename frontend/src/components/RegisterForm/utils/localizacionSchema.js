import * as Yup from "yup";

export const registroSchema = Yup.object().shape({
  tipoVia: Yup.string()
    .min(2, "Too short!")
    .max(40, "Too long!")
    .required("Required"),
  nombre: Yup.string("Must be a string")
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  numero: Yup.number("Must be a valid number")
    .required("Required"),
  piso: Yup.number().max(999, "Too long!"),
  puerta: Yup.string().max(10, "Too long!"),
  bloque: Yup.number().max(999, "Too long!"),
  CP: Yup.number("Must be a valid postalcode")
    .min(2, "Too short!")
    .max(100000, "Too long!")
    .required("Required"),
  localidad: Yup.string().max(100, "Too long!"),
  provincia: Yup.string().max(100, "Too long!"),
  pais: Yup.string().max(100, "Too long!"),
  longitud: Yup.number("Must be a valid postalcode").required("Required"),
  latitud: Yup.number("Must be a valid postalcode").required("Required"),
});
