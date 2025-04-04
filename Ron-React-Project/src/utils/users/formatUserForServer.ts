import { FormikValues } from "formik";
import { User } from "../../interfaces/users/user";

export function formatUserForServer(values: FormikValues): User {
  return {
    name: {
      first: values.first,
      middle: values.middle,
      last: values.last,
    },
    phone: values.phone,
    email: values.email,
    password: values.password,
    image: {
      url: values.image,
      alt: values.alt,
    },
    address: {
      state: values.state,
      country: values.country,
      city: values.city,
      street: values.street,
      houseNumber: values.houseNumber,
      zip: values.zip,
    },
    isBusiness: values.isBusiness,
  };
}
