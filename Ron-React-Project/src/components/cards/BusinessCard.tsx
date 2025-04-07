import { FunctionComponent } from "react";
import { Card } from "../../interfaces/cards/Card";
import { useNavigate } from "react-router-dom";
import { deleteCard } from "../../services/cardsService";
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
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/businessinfo/${card._id}`, { state: card });
  };

  const handleCardDeleteClick = async () => {
    let deleteCardResponse = null;
    try {
      debugger;
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
    navigate("/cards");
  };

  const handleCardEditClick = () => {
    navigate(`/cards/${card._id}/edit`, { state: card });
  };

  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <div onClick={handleCardClick}>
        <img
          className="card-img-top"
          src={card.image.url}
          alt={card.image.alt}
        />
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{card.subtitle}</h6>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item ">
            <span>Phone:</span>
            <span>{card.phone}</span>
            <br />
            <span>Adress:</span>
            <span>
              {`${card.address.street} ${card.address.houseNumber}, ${card.address.city}`}
            </span>
            <br />
            <span>Card Number:</span>
            <span>{card.bizNumber}</span>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <a href={`tel:${card.phone}`}>
          <i className="fa-solid fa-phone"></i>
        </a>
        {decodedToken &&
          decodedToken.isBusiness &&
          decodedToken._id === card.user_id && (
            <>
              <a onClick={handleCardEditClick}>
                <i className="fa-solid fa-pen-to-square"></i>
              </a>
              <a onClick={handleCardDeleteClick}>
                <i className="fa-solid fa-trash"></i>
              </a>
            </>
          )}
      </div>
    </div>
  );
};

export default BusinessCard;
