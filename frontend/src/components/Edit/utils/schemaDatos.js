import * as Yup from "yup";

export const schema = Yup.object().shape({
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
  DESCRIPCION: Yup.string().max(1000, "Too long!")
})