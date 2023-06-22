import * as Yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const schemaUser = Yup.object().shape({
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
    .max(999999999999, "Too long!"),
 
  PASSWORD: Yup.string()
    .matches(passwordRules, {
      message:
        "Must contain at least 5 characters, 1 uppercase, 1 lowercase and 1 number",
    })
    .required("Requerido"),
  repetirPassword: Yup.string()
    .oneOf([Yup.ref("PASSWORD"), null], "The password must be the same")
    .required("Required"),
})