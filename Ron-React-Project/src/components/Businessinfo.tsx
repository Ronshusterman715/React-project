import { FunctionComponent, useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getCardById } from "../services/cardsService";
import { Card } from "../interfaces/cards/Card";
interface BusinessinfoProps {}

const Businessinfo: FunctionComponent<BusinessinfoProps> = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState<Card | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    if (id && location.state) {
      setCard(location.state);
      setIsLoading(false);
    } else if (id) {
      getCardById(id)
        .then((res) => {
          setCard(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
        });
    } else {
      navigate("/cards");
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!card) {
    return <div className="alert alert-danger">Business not found</div>;
  }
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-5">
          <img
            src={card.image.url}
            alt={card.image.alt}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-7">
          <h1 className="display-4">{card.title}</h1>
          <h3 className="text-muted mb-4">{card.subtitle}</h3>

          <div className="mb-4">
            <h4>Description</h4>
            <p className="lead">{card.description}</p>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <h4>Contact Information</h4>
              <p>
                <i className="fas fa-phone me-2"></i> {card.phone}
              </p>
              <p>
                <i className="fas fa-envelope me-2"></i> {card.email}
              </p>
              {card.web && (
                <p>
                  <i className="fas fa-globe me-2"></i>
                  <a href={card.web} target="_blank" rel="noopener noreferrer">
                    {card.web}
                  </a>
                </p>
              )}
            </div>
            <div className="col-md-6">
              <h4>Address</h4>
              <p>
                <i className="fas fa-map-marker-alt me-2"></i>
                {card.address.street} {card.address.houseNumber},{" "}
                {card.address.city}
                <br />
                {card.address.country}, {card.address.zip}
              </p>
            </div>
          </div>

          <button
            className="btn btn-primary me-2"
            onClick={() => window.open(`tel:${card.phone}`)}
          >
            <i className="fas fa-phone me-2"></i>Call
          </button>
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => window.open(`mailto:${card.email}`)}
          >
            <i className="fas fa-envelope me-2"></i>Email
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => navigate(-1)}
          >
            <i className="fas fa-arrow-left me-2"></i>Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Businessinfo;
