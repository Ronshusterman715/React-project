import { FunctionComponent, useEffect, useState } from "react";
import { getAllCards } from "../services/cardsService";
import BusinessCard from "./cards/BusinessCard";
import { Card } from "../interfaces/cards/Card";
import { useLocation } from "react-router-dom";
interface CardsProps {
}

const Cards: FunctionComponent<CardsProps> = () => {
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null;
  const [cards, setCards] = useState<Card[]>([]);
  const [filteredCards, setFilteredCards] = useState<Card[]>(cards);
  const [isCardLoading, setIsCardLoading] = useState<boolean>(true);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search") || "";

  useEffect(() => {
    if (cards.length === 0) {
      getAllCards()
        .then((res) => {
          if (searchQuery) {
            const filteredCards = res.data.filter((card: Card) =>
              card.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setCards(res.data);
            setFilteredCards(filteredCards);
          } else {
            setCards(res.data);
            setFilteredCards(res.data);
          }
        })
        .catch((err) => console.log(err));
    } else if (searchQuery) {
      const filteredCards = cards.filter((card: Card) =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCards(filteredCards);
    } else {
      setFilteredCards(cards);
    }
    setIsCardLoading(false);
  }, [searchQuery]);

  const onDeleteCard = (cardId: string) => {
    setCards(cards.filter((card) => card._id !== cardId));
    setFilteredCards(filteredCards.filter((card) => card._id !== cardId));
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
            {filteredCards.map((card: Card) => (
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

export default Cards;
