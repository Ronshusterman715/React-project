import { FunctionComponent, useEffect, useState } from "react";
import { Card } from "../../interfaces/cards/Card";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteCard, likeUnlikeCard } from "../../services/cardsService";
import { errorMessage, successMessage } from "../../utils/ui/alert";

interface BusinessCardProps {
  card: Card;
  decodedToken: any;
  onDeleteCard: (cardId: string) => void;
}

const BusinessCard: FunctionComponent<BusinessCardProps> = ({
  card,
  decodedToken,
  onDeleteCard,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isUserLiked, setIsUserLiked] = useState<boolean>(
    (decodedToken && card.likes?.includes(decodedToken._id)) || false
  );

  useEffect(() => {}, [isUserLiked]);
  const handleCardClick = () => {
    navigate(`/businessinfo/${card._id}`, { state: card });
  };

  const handleCardDeleteClick = async () => {
    let deleteCardResponse = null;
    try {
      deleteCardResponse = await deleteCard(card._id!);
      if (deleteCardResponse.status === 200) {
        onDeleteCard(card._id!);
        successMessage("card deleted");
      } else {
        errorMessage("failed to delete card");
      }
    } catch (err: any) {
      console.log(err);
      if (err.response.data)
        errorMessage(`failed to delete card - ${err.response.data}`);
      else {
        errorMessage(`failed to delete card`);
      }
    }
    // navigate("/cards");
  };

  const handleCardEditClick = () => {
    navigate(`/cards/${card._id}/edit`, { state: card });
  };

  const handleCardLikeUnlikeClick = async () => {
    let patchCardResponse = null;
    try {
      patchCardResponse = await likeUnlikeCard(card._id!);
      if (patchCardResponse.status === 200) {
        setIsUserLiked((prev) => {
          if (prev && location.pathname === "/favcards") {
            onDeleteCard(card._id!);
          }
          return !prev;
        });
      } else {
        errorMessage("failed to like/unlike card");
      }
    } catch (err: any) {
      console.log(err);
      if (err.response.data)
        errorMessage(`failed to like/unlike card - ${err.response.data}`);
      else {
        errorMessage(`failed to like/unlike card`);
      }
    }
  };

  return (
    <div
      className="card m-3 shadow-sm business-card"
      style={{ width: "18rem", height: "100%" }}
    >
      <div onClick={handleCardClick} style={{ cursor: "pointer" }}>
        <div
          className="card-image-container"
          style={{ height: "180px", overflow: "hidden" }}
        >
          <img
            className="card-img-top"
            src={card.image.url}
            alt={card.image.alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title text-truncate">{card.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted text-truncate">
            {card.subtitle}
          </h6>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item px-3 py-2">
            <div className="d-flex mb-1">
              <span className="me-2">
                <i className="fa-solid fa-phone fa-sm text-primary"></i>
              </span>
              <span className="text-truncate">{card.phone}</span>
            </div>
            <div className="d-flex mb-1">
              <span className="me-2">
                <i className="fa-solid fa-location-dot fa-sm text-primary"></i>
              </span>
              <span
                className="text-truncate"
                title={`${card.address.street} ${card.address.houseNumber}, ${card.address.city}, ${card.address.country}`}
              >
                {`${card.address.street} ${card.address.houseNumber}, ${card.address.city}`}
              </span>
            </div>
            <div className="d-flex">
              <span className="me-2">
                <i className="fa-solid fa-hashtag fa-sm text-primary"></i>
              </span>
              <span>{card.bizNumber}</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="card-footer bg-white d-flex justify-content-around py-2 mt-auto">
        <a
          href={`tel:${card.phone}`}
          className="btn btn-sm btn-outline-success"
        >
          <i className="fa-solid fa-phone"></i>
        </a>

        {isUserLiked && decodedToken && (
          <a
            onClick={handleCardLikeUnlikeClick}
            className="btn btn-sm btn-outline-danger"
            title="Unlike Card"
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-heart"></i>
          </a>
        )}
        {!isUserLiked && decodedToken && (
          <a
            onClick={handleCardLikeUnlikeClick}
            className="btn btn-sm btn-outline-secondary"
            title="Like Card"
            style={{ cursor: "pointer" }}
          >
            <i className="fa-regular fa-heart"></i>
          </a>
        )}
        {decodedToken &&
          ((decodedToken.isBusiness && decodedToken._id === card.user_id) ||
            decodedToken.isAdmin) && (
            <>
              <a
                onClick={handleCardEditClick}
                className="btn btn-sm btn-outline-warning"
                title="Edit Card"
                style={{ cursor: "pointer" }}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </a>
              <a
                onClick={handleCardDeleteClick}
                className="btn btn-sm btn-outline-danger"
                title="Delete Card"
                style={{ cursor: "pointer" }}
              >
                <i className="fa-solid fa-trash"></i>
              </a>
            </>
          )}
      </div>
    </div>
  );
};

export default BusinessCard;
