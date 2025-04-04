import { FormikValues } from "formik";
import { Auth } from "../../interfaces/Auth/Auth";

export function formatAuthForServer(values: FormikValues): Auth {
  return {
    email: values.email,
    password: values.password,
  };
}
