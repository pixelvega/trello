import { useState } from "react";
import { initialData } from "../../data/data";
import { IColumn, ICard } from "../../data/typing";
import Card from '../Card/Card';

interface IProps {
  column: IColumn
}

const Column: React.FC<IProps> = ({ column }) => {
  const { name } = column;
  const [cards, setCards] = useState<ICard[]>(initialData.cards)
  return (
    <div className="column">
      <h2>{name}</h2>
      <div>
        {cards.filter((card: ICard) => column.cardsIds?.find((cardId: string) => cardId === card.id))
          .map((card: ICard) => <Card card={card} />)}
      </div>
    </div>
  )
}

export default Column;