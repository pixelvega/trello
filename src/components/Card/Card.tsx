import { ICard } from "../../data/typing";

interface IProps {
  card: ICard
}

const Card: React.FC<IProps> = ({ card }) => {
  const { name, id } = card;
  return (
    <div className="card">
      <h3>{name}</h3>
    </div>
  )
}

export default Card;