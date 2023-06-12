import * as yup from "yup";

export const RegisterFormSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "El nombre de usuario de contener al menos 3 caracteres")
    .required("Requerido"),
  jobType: yup
    .string()
    .oneOf(
      ["diseñador", "programador", "manager", "otro"],
      "Tipo de trabajo no valido"
    ),
  acceptedTC: yup
    .boolean()
    .oneOf([true], "Por favor acepte los terminos y condiciones"),
});
