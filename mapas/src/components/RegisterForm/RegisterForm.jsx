import { Formik, Form } from "formik";
import { initialValues } from "./utils/form";
import { RegisterFormSchema } from "./RegisterFormSchema";
import Input from "../ui/Input/Input";
import Select from "../ui/Select/Select";
import Checkbox from "../ui/CheckBox/Checkbox";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  actions.resetForm();
};

export default function RegisterForm() {
  return (
    <Formik
      sx={{ color: "#00000" }}
      initialValues={initialValues}
      validationSchema={RegisterFormSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors, isSubmitting }) => (
        <Form>
          <Input
            label="Username"
            name="username"
            type="text"
            placeholder="Introduce username"
          />
          <Select
            label="Job Type"
            name="jobType"
            placeholder="Selecciona tipo de trabajo"
          >
            <option value="">Selecciona tipo de trabajo</option>
            <option value="programador">Programador</option>
            <option value="diseñador">Diseñador</option>
            <option value="manager">Manager</option>
            <option value="otro">Otro</option>
          </Select>
          <Checkbox type="checkbox" name="acceptedTC" />
          <button type="submit" disabled={isSubmitting}>
            Registrar
          </button>
        </Form>
      )}
    </Formik>
  );
}
