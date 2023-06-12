import { useUserContext } from "../../context/UserContext";
import { useFormik } from "formik";
import { LoginFormSchema } from "./LoginFormSchema";
import { initialValues } from "./utils/form";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}

      <label htmlFor="password">password</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Enter your password"
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
  );
}
