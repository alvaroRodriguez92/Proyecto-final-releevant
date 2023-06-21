import * as Yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const registroSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  email: Yup.string("Must be a string")
    .email("Enter a valid email")
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  tfn: Yup.number("Must be a valid number")
    .min(99999, "Too short!")
    .max(999999999999, "Too long!")
    .required("Required"),
  url: Yup.string().min(2, "Too short!").max(50, "Too long!"),
  descripcion: Yup.string().max(200, "Too long!"),
  password: Yup.string()
    .matches(passwordRules, {
      message:
        "Must contain at least 5 characters, 1 uppercase, 1 lowercase and 1 number",
    })
    .required("Requerido"),
  repetirPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "The password must be the same")
    .required("Required"),
  sector: Yup.string().required("Required"),
  categoria: Yup.string().required("Required"),
direcciones: Yup.array(Yup.object({  tipoVia: Yup.string()
  .min(2, "Too short!")
  .max(40, "Too long!")
  .required("Required")}))

  // tipoVia: Yup.string()
  //   .min(2, "Too short!")
  //   .max(40, "Too long!")
  //   .required("Required"),
  // nombreVia: Yup.string("Must be a string")
  //   .min(2, "Too short!")
  //   .max(50, "Too long!")
  //   .required("Required"),
  // numero: Yup.number("Must be a valid number")
  //   .required("Required"),
  // piso: Yup.number().max(999, "Too long!"),
  // puerta: Yup.string().max(10, "Too long!"),
  // bloque: Yup.number().max(999, "Too long!"),
  // CP: Yup.number("Must be a valid postalcode")
  //   .min(2, "Too short!")
  //   .max(100000, "Too long!")
  //   .required("Required"),
  // localidad: Yup.string().max(100, "Too long!"),
  // provincia: Yup.string().max(100, "Too long!"),
  // pais: Yup.string().max(100, "Too long!"),
  // longitud: Yup.number("Must be a valid postalcode").required("Required"),
  // latitud: Yup.number("Must be a valid postalcode").required("Required")
});
