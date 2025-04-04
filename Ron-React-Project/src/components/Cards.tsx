import { FunctionComponent, useEffect, useState } from "react";
import { getAllCards } from "../services/cardsService";
import { Card } from "../interfaces/cards/cards";
import BusinessCard from "./cards/BusinessCard";
interface CardsProps {}

const Cards: FunctionComponent<CardsProps> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [isCardLoading, setIsCardLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllCards()
      .then((res) => {
        setCards(res.data);
        setIsCardLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {isCardLoading ? (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row d-flex justify-content-center">
            {cards.map((card: Card) => (
              <BusinessCard key={card._id} card={card} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
