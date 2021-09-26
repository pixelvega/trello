import Column from "../Column/Column";
import { initialData } from "../../data/data";
import { useState } from "react";
import { IColumn, InitialData, ICard } from "../../data/typing";
import { DragDropContext } from 'react-beautiful-dnd';

const Board = () => {
  const [data, setData] = useState<InitialData>(initialData);

  const onDragEnd = (result: any) => {
    const { source, destination, draggableId } = result;
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId &&
      source.index === destination.index) {
      return;
    }

    let newData = { ...data };
    let startColumn = newData.columns.find((column: IColumn) => source.droppableId === column.id);
    const indexStartColumn = newData.columns.findIndex((item) => item.id === source.droppableId);
    let endColumn = newData.columns.find((column: IColumn) => destination.droppableId === column.id)
    const indexEndColumn = newData.columns.findIndex((item) => item.id === destination.droppableId);

    // Moving from the same list
    if (startColumn === endColumn) {
      let newCardsIds = startColumn?.cardsIds;
      newCardsIds?.splice(source.index, 1)
      newCardsIds?.splice(destination.index, 0, draggableId)
      const newColumn: any = {
        ...startColumn,
        cardsIds: newCardsIds || []
      }
      const indexOfColumn = newData.columns.findIndex((column) => column.id === destination.droppableId);
      newData.columns.splice(indexOfColumn, 1, newColumn)
      setData(newData);
      return;
    }
    // Moving between columns
    const startCardsIds = Array.from(startColumn?.cardsIds || [])
    startCardsIds.splice(source.index, 1)
    const newStartColumn: any = {
      ...startColumn,
      cardsIds: startCardsIds
    }
    newData.columns.splice(indexStartColumn, 1, newStartColumn)

    const endCardsIds = Array.from(endColumn?.cardsIds || []);
    endCardsIds?.splice(destination.index, 0, draggableId)
    const newEndColumn: any = {
      ...endColumn,
      cardsIds: endCardsIds
    }
    newData.columns.splice(indexEndColumn, 1, newEndColumn)
    setData(newData);

  }

  return (
    <div className="board">
      <h1>{initialData.board.name}</h1>
      <div className="board-columns">
        <DragDropContext
          onDragEnd={onDragEnd}
        >
          <>
            {data.columns?.map((column: IColumn) => {
              const cardsArr: ICard[] | any = column.cardsIds.map((cardId) => {
                const card = data.cards.find((card) => card.id === cardId)
                if (!card) {
                  return undefined;
                } else {
                  return card;
                }
              })
              return <Column key={column.id} column={column} cards={cardsArr} />

            })}
          </>
        </DragDropContext>
      </div>
    </div>
  )
}

export default Board;