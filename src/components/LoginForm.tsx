import { FormikValues, useFormik } from "formik";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { login } from "../services/authService";
import { formatAuthForServer } from "../utils/auth/formatAuthForServer";
import { errorMessage, successMessage } from "../utils/ui/alert";

interface LoginFormProps {
  loginEvent: () => void;
}

const LoginForm: FunctionComponent<LoginFormProps> = ({ loginEvent }) => {
  const navigate = useNavigate();
  const handleSubmit = async (values: FormikValues) => {
    let authResponse = null;
    try {
      let auth = formatAuthForServer(values);
      authResponse = await login(auth);
      if (authResponse.status === 200) {
        localStorage.setItem("token", authResponse.data);
        successMessage("login successfully");
        navigate("/cards");
        loginEvent();
      } else {
        errorMessage("failed to login");
      }
    } catch (err: any) {
      console.log(err);
      if (err.response.data)
        errorMessage(`failed to login - ${err.response.data}`);
      else {
        errorMessage(`failed to login`);
      }
    }
  };

  const formik: FormikValues = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Invalid email address")
        .min(5)
        .required("Email is required"),
      password: yup.string().min(7).max(20).required("Password is required"),
      rememberMe: yup.boolean(),
    }),
    onSubmit: handleSubmit,
  });
  return (
    <>
      <div className="w-50 mx-auto py-3">
        <h1 className="display-1 text-center mb-4">Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="johndoe@example.com"
              name="email"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <label htmlFor="email">Email Address</label>
            {formik.touched.email && formik.errors.email && (
              <p className="text-danger">{formik.errors.email}</p>
            )}
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
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

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rememberMe}
            />
          </div>

          <button
            disabled={!formik.isValid || !formik.dirty}
            type="submit"
            className="btn btn-primary w-100"
          >
            Login
          </button>

          <div className="text-center mt-3">
            Don't have an account? <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
