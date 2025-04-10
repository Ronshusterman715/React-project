import { FunctionComponent, useEffect, useState } from "react";
import BusinessCard from "./cards/BusinessCard";
import { Card } from "../interfaces/cards/Card";
import { getAllMyCards } from "../services/cardsService";
import { errorMessage } from "../utils/ui/alert";

interface MycardsProps {
}

const Mycards: FunctionComponent<MycardsProps> = () => {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null;
  const [myCards, setMyCards] = useState<Card[]>([]);
  const [isCardLoading, setIsCardLoading] = useState<boolean>(true);

  useEffect(() => {
    if (myCards.length === 0) {
      getAllMyCards()
        .then((res) => {
          setMyCards(res.data);
        })
        .catch((err) => errorMessage(err));
    }
    setIsCardLoading(false);
  }, []);

  const onDeleteCard = (cardId: string) => {
    setMyCards(myCards.filter((card) => card._id !== cardId));
  };

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
            {myCards.map((card: Card) => (
              <BusinessCard
                onDeleteCard={onDeleteCard}
                decodedToken={user}
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

export default Mycards;
