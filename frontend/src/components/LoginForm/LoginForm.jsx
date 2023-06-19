import { useUserContext } from "../../context/UserContext";
import { useFormik } from "formik";
import { LoginFormSchema } from "./LoginFormSchema";
import { initialValues } from "./utils/form";
import { Box } from '@mui/material';

async function onSubmit(values, actions) {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  actions.resetForm();
}

export default function BasicForm() {
  const { login } = useUserContext();
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: LoginFormSchema,
    onSubmit: login, //function (values, actions) {
    //   login(values);
    //   actions.resetForm();
    // }
  });
  return (
   
    <Box sx={{ input: {borderColor:"black", borderRadius: "10px" }, button: {borderColor:"black", borderRadius: "10px", mt: "1rem",":hover":{backgroundColor:"black",color:"white"} }, ".label-contraseña": { mt:"1rem"}}}>
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        
        id="email"
        name="email"
        type="email"
        placeholder="Introduce tu email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}

      <label className="label-contraseña" htmlFor="password">Contraseña</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Introduce tu contraseña"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}
      <button disabled={isSubmitting} type="submit">
        Login
      </button>
      </form>
      </Box>
     
  );
}
