import { Droppable } from "react-beautiful-dnd";
import { IColumn, ICard } from "../../data/typing";
import Card from '../Card/Card';

interface IProps {
  column: IColumn
  cards: ICard[]
}

const Column: React.FC<IProps> = ({ column, cards }) => {
  return (
    <Droppable droppableId={column.id}>
      {(provided, snapshot) => (
        <div className={`column ${snapshot.isDraggingOver ? 'is-dragging-over' : ''}`}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h2>{column.name}</h2>
          <ol>
            {cards?.map((card: ICard, index: number) => <Card key={card.id} card={card} index={index} />)}
            <div className="placeholder">
              {provided.placeholder}
            </div>
          </ol>
        </div>
      )}
    </Droppable>
  )
}

export default Column;