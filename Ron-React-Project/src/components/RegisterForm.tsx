import { FormikValues, useFormik } from "formik";
import { FunctionComponent } from "react";
import * as yup from "yup";

interface RegisterFormProps {}

const RegisterForm: FunctionComponent<RegisterFormProps> = () => {
  const formik: FormikValues = useFormik<FormikValues>({
    initialValues: {},
    validationSchema: yup.object({}),
    onSubmit: () => {},
  });

  return (
    <>
      <div className="w-50 mx-auto py-3">
        <h1 className="display-1 text-center mb-4">Register</h1>
        <form>
          <div className="row g-3">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Jhon"
                  name="first"
                  required
                />
                <label htmlFor="firstName">First Name</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="middleName"
                  placeholder=""
                  name="middle"
                />
                <label htmlFor="middleName">Middle Name</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Doe"
                  name="last"
                  required
                />
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>
          </div>

          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="tel"
                  placeholder="+972"
                  name="phone"
                  required
                />
                <label htmlFor="tel">Phone</label>
              </div>
            </div>

            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="jhon@doe.com"
                  name="email"
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
          </div>

          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder=""
                  name="password"
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>

            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder=""
                  name="confirmPassword"
                  required
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
              </div>
            </div>
          </div>

          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="url"
                  className="form-control"
                  id="image"
                  placeholder=""
                  name="image"
                />
                <label htmlFor="image">Profile Image</label>
              </div>
            </div>

            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="alt"
                  placeholder=""
                  name="alt"
                />
                <label htmlFor="alt">Alternative Text</label>
              </div>
            </div>
          </div>

          <div className="row g-3">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  placeholder=""
                  name="state"
                />
                <label htmlFor="state">State</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  placeholder=""
                  name="country"
                  required
                />
                <label htmlFor="country">Country</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder=""
                  name="city"
                  required
                />
                <label htmlFor="city">City</label>
              </div>
            </div>
          </div>

          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="street"
                  placeholder=""
                  name="street"
                  required
                />
                <label htmlFor="street">Street</label>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="houseNumber"
                  placeholder=""
                  name="houseNumber"
                  required
                />
                <label htmlFor="houseNumber">House Number</label>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="zip"
                  placeholder=""
                  name="zip"
                  required
                />
                <label htmlFor="zip">Zip Code</label>
              </div>
            </div>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="isBusiness"
              name="isBusiness"
            />
            <label className="form-check-label" htmlFor="isBusiness">
              Is Business?
            </label>
          </div>

          <button type="submit" className="btn btn-primary mt-4">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
