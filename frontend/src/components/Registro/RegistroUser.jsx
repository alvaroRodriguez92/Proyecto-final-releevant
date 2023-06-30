import { Formik } from "formik";
import {initialValuesUser} from "../RegisterForm/utils/initialValuesUser"
import {schemaUser} from "../RegisterForm/utils/schemaUser"
import IntroduccionDatosUser from "../RegisterForm/IntroduccionDatosUser";
import Stepper from "../Stepper/Stepper";
import StepContainer from "../RegisterForm/utils/StepContainer";

export default function RegistroUser() {

    const steps = ["Introducción de datos"];


    async function onSubmit(values, actions) {
        console.log("submiteandooooo", values)
        const formData= new FormData();
        formData.append("NOMBRE", values.NOMBRE)
        formData.append("EMAIL", values.EMAIL)
        formData.append("TLF", values.TLF)
        formData.append("PASSWORD", values.PASSWORD)

        const response = await fetch("http://127.0.0.1:3000/user/", {
          method: "POST",
          body: formData
        });
        if (response.status === 200) {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          alert("Registro realizado con éxito")
          actions.resetForm();
        }
      }

  return (
    <Formik
      validationSchema={schemaUser}
      initialValues={initialValuesUser}
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
                    return <IntroduccionDatosUser formik={props} />;

                  default:
                    return <UserDataForm formik={props} />;
                }
              }}
            />
          </StepContainer>
        </form>
      )}
    </Formik>
  );
}
