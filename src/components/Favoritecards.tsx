import { FunctionComponent, useEffect, useState } from "react";
import { Card } from "../interfaces/cards/Card";
import { getAllCards } from "../services/cardsService";
import BusinessCard from "./cards/BusinessCard";
import { errorMessage } from "../utils/ui/alert";

interface FavoritecardsProps {
}

const Favoritecards: FunctionComponent<FavoritecardsProps> = () => {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null;
  const [favoriteCards, setFavoriteCards] = useState<Card[]>([]);
  const [isCardLoading, setIsCardLoading] = useState<boolean>(true);

  useEffect(() => {
    if (favoriteCards.length === 0) {
      getAllCards()
        .then((res) => {
          const filteredCards = res.data.filter((card: Card) =>
            card.likes?.includes(user._id)
          );
          setFavoriteCards(filteredCards);
        })
        .catch((err) => errorMessage(err));
    }
    setIsCardLoading(false);
  }, []);

  const onDeleteCard = (cardId: string) => {
    setFavoriteCards(favoriteCards.filter((card) => card._id !== cardId));
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
            {favoriteCards.map((card: Card) => (
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

export default Favoritecards;
