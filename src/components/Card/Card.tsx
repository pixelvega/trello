import { Draggable } from "react-beautiful-dnd";
import { ICard } from "../../data/typing";

interface IProps {
  card: ICard
  index: number
}

const Card: React.FC<IProps> = ({ card, index }) => {
  const { name, id } = card;
  return (
    <Draggable
      draggableId={id}
      index={index}
    >
      {(provided, snapshot) => (
        <li className={`card ${snapshot.isDragging ? 'is-dragging' : ''}`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        // data-is-dragging={snapshot.isDragging} // if styled components
        >
          <h3>{name}</h3>
        </li>
      )}
    </Draggable>
  )
}

export default Card;