import { FormikValues } from "formik";
import { User } from "../../interfaces/users/User";

export function formatUserForServer(
  values: FormikValues,
  isCreate: boolean = true
): User {
  if (isCreate) {
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
  } else {
    return {
      name: {
        first: values.first,
        middle: values.middle,
        last: values.last,
      },
      phone: values.phone,
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
    };
  }
}
