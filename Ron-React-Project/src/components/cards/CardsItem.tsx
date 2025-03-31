import { FunctionComponent, useEffect, useState } from "react";
import { getAllCards } from "../../services/cardsService";
import { Card } from "../../interfaces/cards/cards";

interface CardsItemProps {}

const CardsItem: FunctionComponent<CardsItemProps> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  useEffect(() => {
    getAllCards()
      .then((res) => setCards(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {cards.map((card: Card) => (
        <ul key={card._id}>
          <li>{card.title}</li>
          <li>{card.subtitle}</li>
          <li>{card.description}</li>
        </ul>
      ))}
    </>
  );
};

export default CardsItem;
