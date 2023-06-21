import { Formik } from "formik";
import { initialValues } from "../RegisterForm/utils/initialValuesIntroduccionDatos"
import { registroSchema } from "../RegisterForm/utils/introduccionDatosSchema";
import Stepper from "../Stepper/Stepper";
import StepContainer from "../RegisterForm/utils/StepContainer";
import IntroduccionDatos from "../RegisterForm/IntroduccionDatos";
import Localizacion from "../RegisterForm/Localizacion";
import LogoFotos from "../RegisterForm/LogoFotos";

const steps = ["Introducción de datos", "Localización", "Logo/Fotos"];

async function onSubmit(values, actions) {
  const response = await fetch("http://127.0.0.1:3000/user/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  if (response.status === 200) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Registro realizado con éxito")
    actions.resetForm();
  }
}

export default function Registro() {
  return (
    <>
      <h1>Register View</h1>
      <Formik

        validationSchema={registroSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {(props) => (
          <form className="form-register" onSubmit={props.handleSubmit}>
            <StepContainer >
              <Stepper
                steps={steps}
                renderStep={(step) => {
                  switch (step) {
                    case 0:
                      return <IntroduccionDatos formik={props} />;
                    case 1:
                      return <Localizacion formik={props} />;
                    case 2:
                      return <LogoFotos/>;

                    default:
                      return <UserDataForm formik={props} />;
                  }
                }}
              />
            </StepContainer>
          </form>
        )}
      </Formik>
    </>
  );
}