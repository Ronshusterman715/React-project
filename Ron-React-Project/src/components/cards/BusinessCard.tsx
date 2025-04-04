import { FunctionComponent } from "react";
import { Card } from "../../interfaces/cards/Card";

interface BusinessCardProps {
  card: Card;
}

const BusinessCard: FunctionComponent<BusinessCardProps> = ({ card }) => {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img className="card-img-top" src={card.image.url} alt={card.image.alt} />
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
      <div className="card-body">
        <a href={`tel:${card.phone}`}>
          <i className="fa-solid fa-phone"></i>
        </a>
      </div>
    </div>
  );
};

export default BusinessCard;
