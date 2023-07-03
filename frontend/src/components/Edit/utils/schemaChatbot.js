import * as Yup from "yup";

export const schemaChatbot = Yup.object().shape({
  CHATBOT: Yup.array(
    Yup.object({
      PREGUNTA: Yup.string()
        .min(2, "Too short!")
        .max(150, "Too long!")
        .required("Required"),
      RESPUESTA: Yup.string("Must be a string")
        .min(2, "Too short!")
        .max(150, "Too long!")
        .required("Required"),
        PADRE:Yup.number()

    })
  )
});