import { FormikValues, useFormik } from "formik";
import { FunctionComponent, useEffect, useState } from "react";
import * as yup from "yup";
import { formatUserForServer } from "../utils/users/formatUserForServer";
import { createUser, editUser, getUserById } from "../services/usersService";
import { errorMessage, successMessage } from "../utils/ui/alert";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { User } from "../interfaces/users/User";

interface RegisterFormProps {
  isCreateMode: boolean;
}

const RegisterForm: FunctionComponent<RegisterFormProps> = ({
  isCreateMode,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      getUserById(id)
        .then((res) => {
          updateFormikValues(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (!isCreateMode) {
      navigate("/cards");
    }
    setIsLoading(false);
  }, [id]);

  const updateFormikValues = (user: User) => {
    formik.setValues({
      first: user.name.first,
      middle: user.name.middle,
      last: user.name.last,
      phone: user.phone,
      email: user.email,
      password: user.password,
      image: user.image.url,
      alt: user.image.alt,
      state: user.address.state,
      country: user.address.country,
      city: user.address.city,
      street: user.address.street,
      houseNumber: user.address.houseNumber,
      zip: user.address.zip,
      isBusiness: user.isBusiness,
    });
  };

  const handleCreateSubmit = async (values: FormikValues) => {
    let createUserResponse = null;
    try {
      let user = formatUserForServer(values);
      createUserResponse = await createUser(user);

      if (createUserResponse.status === 201) {
        successMessage("user created successfully");
        navigate("/login");
      } else {
        errorMessage("failed to create user");
      }
    } catch (err: any) {
      console.log(err);
      if (err.response.data)
        errorMessage(`failed to create user - ${err.response.data}`);
      else {
        errorMessage(`failed to create user`);
      }
    }
  };

  const handleEditSubmit = async (values: FormikValues) => {
    debugger;
    let editUserResponse = null;
    try {
      let user = formatUserForServer(values, false);
      editUserResponse = await editUser(id!, user);

      if (editUserResponse.status === 200) {
        successMessage("user updated successfully");
      } else {
        errorMessage("failed to updated user");
      }
    } catch (err: any) {
      console.log(err);
      if (err.response.data)
        errorMessage(`failed to updated user - ${err.response.data}`);
      else {
        errorMessage(`failed to updated user`);
      }
    }
  };

  const formik: FormikValues = useFormik<FormikValues>({
    initialValues: {
      first: "",
      middle: "",
      last: "",
      phone: "",
      email: "",
      password: "",
      image: "",
      alt: "",
      state: "",
      country: "",
      city: "",
      street: "",
      houseNumber: "",
      zip: "",
      isBusiness: false,
    },
    validationSchema: yup.object({
      first: yup.string().min(2).max(256).required(),
      middle: yup.string().min(2).max(256),
      last: yup.string().min(2).max(256).required(),
      phone: yup.string().min(9).max(11).required(),
      email: yup.string().email().min(5).required(),
      password: isCreateMode
        ? yup.string().min(7).max(20).required()
        : yup.string().min(7).max(20),
      image: yup.string().min(14),
      alt: yup.string().min(2).max(256),
      state: yup.string().min(2).max(256),
      country: yup.string().min(2).max(256).required(),
      city: yup.string().min(2).max(256).required(),
      street: yup.string().min(2).max(256).required(),
      houseNumber: yup.number().min(2).max(256).required(),
      zip: yup.string().min(2).max(256).required(),
      isBusiness: yup.boolean().required(),
    }),
    onSubmit: isCreateMode ? handleCreateSubmit : handleEditSubmit,
  });

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-50 mx-auto py-3">
        <h1 className="display-1 text-center mb-4">
          {isCreateMode == true ? "Register" : "Edit"}
        </h1>
        <form onSubmit={formik.handleSubmit}>
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.first}
                />
                <label htmlFor="firstName">First Name</label>
                {formik.touched.first && formik.errors.first && (
                  <p className="text-danger">{formik.errors.first}</p>
                )}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.middle}
                />
                <label htmlFor="middleName">Middle Name</label>
                {formik.touched.middle && formik.errors.middle && (
                  <p className="text-danger">{formik.errors.middle}</p>
                )}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.last}
                />
                <label htmlFor="lastName">Last Name</label>
                {formik.touched.last && formik.errors.last && (
                  <p className="text-danger">{formik.errors.last}</p>
                )}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                <label htmlFor="tel">Phone</label>
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-danger">{formik.errors.phone}</p>
                )}
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
                  disabled={!isCreateMode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <label htmlFor="email">Email</label>
                {formik.touched.email && formik.errors.email && (
                  <p className="text-danger">{formik.errors.email}</p>
                )}
              </div>
            </div>
          </div>
          {isCreateMode && (
            <>
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
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    <label htmlFor="password">Password</label>
                    {formik.touched.password && formik.errors.password && (
                      <p className="text-danger">{formik.errors.password}</p>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="url"
                  className="form-control"
                  id="image"
                  placeholder=""
                  name="image"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.image}
                />
                <label htmlFor="image">Profile Image</label>
                {formik.touched.image && formik.errors.image && (
                  <p className="text-danger">{formik.errors.image}</p>
                )}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.alt}
                />
                <label htmlFor="alt">Alternative Text</label>
                {formik.touched.alt && formik.errors.alt && (
                  <p className="text-danger">{formik.errors.alt}</p>
                )}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.state}
                />
                <label htmlFor="state">State</label>
                {formik.touched.state && formik.errors.state && (
                  <p className="text-danger">{formik.errors.state}</p>
                )}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                />
                <label htmlFor="country">Country</label>
                {formik.touched.country && formik.errors.country && (
                  <p className="text-danger">{formik.errors.country}</p>
                )}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                />
                <label htmlFor="city">City</label>
                {formik.touched.city && formik.errors.city && (
                  <p className="text-danger">{formik.errors.city}</p>
                )}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.street}
                />
                <label htmlFor="street">Street</label>
                {formik.touched.street && formik.errors.street && (
                  <p className="text-danger">{formik.errors.street}</p>
                )}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.houseNumber}
                />
                <label htmlFor="houseNumber">House Number</label>
                {formik.touched.houseNumber && formik.errors.houseNumber && (
                  <p className="text-danger">{formik.errors.houseNumber}</p>
                )}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.zip}
                />
                <label htmlFor="zip">Zip Code</label>
                {formik.touched.zip && formik.errors.zip && (
                  <p className="text-danger">{formik.errors.zip}</p>
                )}
              </div>
            </div>
          </div>

          {isCreateMode && (
            <>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="isBusiness"
                  name="isBusiness"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.isBusiness}
                />
                <label className="form-check-label" htmlFor="isBusiness">
                  Is Business?
                </label>
                {formik.touched.isBusiness && formik.errors.isBusiness && (
                  <p className="text-danger">{formik.errors.isBusiness}</p>
                )}
              </div>
            </>
          )}

          {isCreateMode ? (
            <button
              disabled={!formik.isValid || !formik.dirty}
              type="submit"
              className="btn btn-primary mt-4"
            >
              Register
            </button>
          ) : (
            <button
              disabled={!formik.isValid || !formik.dirty}
              type="submit"
              className="btn btn-primary mt-4"
            >
              Edit
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
