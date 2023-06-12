import * as Yup from 'yup';
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


export const registroSchema= Yup.object().shape({
    firstname: Yup
    .string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
    lastname: Yup
    .string()
    .min(2, "Too short!")
    .max(100, "Too long!")
    .required("Required"),
    address: Yup
    .string()
    .min(2, "Too short!")
    .max(150, "Too long!")
    .required("Required"),
    city: Yup
    .string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
    postalcode: Yup
    .number("Must be a valid postalcode")
    .min(2,"Too short!")
    .max(100000,"Too long!")
    .required("Required"),
    birthdate: Yup
    .date(),
    email: Yup
    .string("Must be a string")
    .email("Enter a valid email")
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
    password: Yup
    .string()
    .matches(passwordRules, {
        message:
          "Must contain at least 5 characters, 1 uppercase, 1 lowercase and 1 number"
      })
      .required("Requerido"),
      repeatPassword: Yup
      .string()
      .oneOf([Yup.ref("password"), null], "The password must be the same")
      .required("Required")

      









})