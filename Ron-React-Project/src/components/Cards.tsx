import { FunctionComponent, useEffect, useState } from "react";
import { getAllCards } from "../services/cardsService";
import BusinessCard from "./cards/BusinessCard";
import { Card } from "../interfaces/cards/Card";
interface CardsProps {
  decodedToken: any;
}

const Cards: FunctionComponent<CardsProps> = ({ decodedToken }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [isCardLoading, setIsCardLoading] = useState<boolean>(true);
  useEffect(() => {
    getAllCards()
      .then((res) => {
        debugger
        setCards(res.data);
        setIsCardLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const onDeleteCard = (cardId: string) => {
    setCards(cards.filter((card) => card._id !== cardId))
  }
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
            <h3>{decodedToken?._id}</h3>
            {cards.map((card: Card) => (
              <BusinessCard
                onDeleteCard={onDeleteCard}
                decodedToken={decodedToken}
                key={card._id}
                card={card}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
