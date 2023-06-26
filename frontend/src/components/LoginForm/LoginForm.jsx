import { useUserContext } from "../../context/UserContext";
import { useFormik } from "formik";
import { LoginFormSchema } from "./LoginFormSchema";
import { initialValues } from "./utils/form";
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';


// async function onSubmit(values, actions) {
//   console.log(values,"valores");
//   console.log(actions);
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   actions.resetForm();
// }

export default function BasicForm({closeModal=()=>{}}) {
  const { login, user } = useUserContext();
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

    <Box sx={{height:"30rem", p: "3rem 0.5rem", input: { borderColor: "black", borderRadius: "10px",  }, button: { borderColor: "black", borderRadius: "10px", mt: "1rem" ,":hover": { backgroundColor: "grey", color: "white" } }, ".label-contraseña": { mt: "1rem" } }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ p: "0.5rem", display: "flex", justifyContent: "center" }}>
          <h2 >Iniciar Sesion</h2>
        </Box>
        <Box sx={{ p: "0.5rem" }}>
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
        </Box>
        <Box sx={{ p: "0.5rem" }}>
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
        </Box>
        <Box sx={{ p: "0.5rem" }}>
          <Button variant="contained" disabled={isSubmitting} type="submit">
          Login
          </Button>
          </Box>
      </form>
      <Box sx={{mt:"3rem", textAlign:"center"}}>
        <span>Si aun no estás registrado pincha <Link to="/registro">aquí</Link></span>
        
      </Box>
    </Box>

  );
}
