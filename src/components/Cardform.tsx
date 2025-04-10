import { FormikValues, useFormik } from "formik";
import { FunctionComponent, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { formatCardForServer } from "../utils/cards/formatCardForServer";
import { createCard, getCardById, updateCard } from "../services/cardsService";
import { errorMessage, successMessage } from "../utils/ui/alert";
import { Card } from "../interfaces/cards/Card";

interface CardformProps {
  isCreateMode: boolean;
}

const Cardform: FunctionComponent<CardformProps> = ({ isCreateMode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id && location.state) {
      updateFormikValues(location.state);
    } else if (id) {
      getCardById(id)
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

  const updateFormikValues = (card: Card) => {
    formik.setValues({
      title: card.title,
      subtitle: card.subtitle,
      description: card.description,
      phone: card.phone,
      email: card.email,
      web: card.web,
      image: card.image.url,
      alt: card.image.alt,
      state: card.address.state,
      country: card.address.country,
      city: card.address.city,
      street: card.address.street,
      houseNumber: card.address.houseNumber,
      zip: card.address.zip,
    });
  };
  const handleCreateSubmit = async (values: FormikValues) => {
    let createCardResponse = null;
    try {
      let card = formatCardForServer(values);
      createCardResponse = await createCard(card);

      if (createCardResponse.status === 201) {
        successMessage("card created successfully");
        navigate("/cards");
      } else {
        errorMessage("failed to create card");
      }
    } catch (err: any) {
      if (err.response.data)
        errorMessage(`failed to create card - ${err.response.data}`);
      else {
        errorMessage(`failed to create card`);
      }
    }
  };
  const handleEditSubmit = async (values: FormikValues) => {
    let editCardResponse = null;
    try {
      let card = formatCardForServer(values);
      editCardResponse = await updateCard(id!, card);

      if (editCardResponse.status === 200) {
        successMessage("card updated successfully");
      } else {
        errorMessage("failed to update card");
      }
    } catch (err: any) {
      if (err.response.data)
        errorMessage(`failed to update card - ${err.response.data}`);
      else {
        errorMessage(`failed to update card`);
      }
    }
  };
  const formik: FormikValues = useFormik<FormikValues>({
    initialValues: {
      title: "",
      subtitle: "",
      description: "",
      phone: "",
      email: "",
      web: "",
      image: "",
      alt: "",
      state: "",
      country: "",
      city: "",
      street: "",
      houseNumber: "",
      zip: "",
    },
    validationSchema: yup.object({
      title: yup.string().min(2).max(256).required(),
      subtitle: yup.string().min(2).max(256).required(),
      description: yup.string().min(2).max(1024).required(),
      phone: yup.string().min(9).max(11).required(),
      email: yup.string().email().min(5).required(),
      web: yup.string().min(14),
      image: yup.string().min(14).required(),
      alt: yup.string().min(2).max(256).required(),
      state: yup.string(),
      country: yup.string().required(),
      city: yup.string().required(),
      street: yup.string().required(),
      houseNumber: yup.number().min(1).required(),
      zip: yup.string().required(),
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
          {isCreateMode == true ? "Card Creation" : "Card Edit"}
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="row g-3">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Card Title"
                  name="title"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.title}
                />
                <label htmlFor="title">title</label>
                {formik.touched.title && formik.errors.title && (
                  <p className="text-danger">{formik.errors.title}</p>
                )}
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="subtitle"
                  placeholder="Card Subtitle"
                  name="subtitle"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subtitle}
                />
                <label htmlFor="subtitle">subtitle</label>
                {formik.touched.subtitle && formik.errors.subtitle && (
                  <p className="text-danger">{formik.errors.subtitle}</p>
                )}
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  placeholder="Card Description"
                  name="description"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                />
                <label htmlFor="description">description</label>
                {formik.touched.description && formik.errors.description && (
                  <p className="text-danger">{formik.errors.description}</p>
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

          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="url"
                  className="form-control"
                  id="web"
                  placeholder="https://www.example.com"
                  name="web"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.web}
                />
                <label htmlFor="web">web</label>
                {formik.touched.web && formik.errors.web && (
                  <p className="text-danger">{formik.errors.web}</p>
                )}
              </div>
            </div>

            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="url"
                  className="form-control"
                  id="image"
                  placeholder="https://www.example.com/image.jpg"
                  name="image"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.image}
                />
                <label htmlFor="image">Image url</label>
                {formik.touched.image && formik.errors.image && (
                  <p className="text-danger">{formik.errors.image}</p>
                )}
              </div>
            </div>
          </div>

          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="alt"
                  placeholder="Alternative text"
                  name="alt"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.alt}
                />
                <label htmlFor="alt">Alternative text</label>
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

          {isCreateMode ? (
            <button
              disabled={!formik.isValid || !formik.dirty}
              type="submit"
              className="btn btn-primary mt-4"
            >
              Create
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

export default Cardform;
