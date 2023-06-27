import * as Yup from "yup";

export const schemaDireccion = Yup.object().shape({
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
  )
});
