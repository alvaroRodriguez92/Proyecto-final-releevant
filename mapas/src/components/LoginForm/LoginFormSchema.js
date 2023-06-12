import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const LoginFormSchema = yup.object().shape({
  email: yup
    .string("Debe ser un string")
    .email("Por favor introduzca un email valido")
    .required("Requerido"),
  password: yup.string().required("Requerido"),
});
