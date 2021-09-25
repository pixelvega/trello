import Column from "../Column/Column";
import { initialData } from "../../data/data";
import { useState } from "react";
import { IColumn, InitialData, ICard } from "../../data/typing";
import { DragDropContext } from 'react-beautiful-dnd';

const Board = () => {
  const [data, setData] = useState<InitialData>(initialData);

  const onDragEnd = (result: any) => {
    console.log(result)
    const { source, destination, draggableId } = result;
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId &&
      source.index === destination.index) {
      console.log('is the same place')
      return;
    }
    if (destination.droppableId !== source.droppableId) {
      // TO DO DRAG & DROP BETWEEN COLUMNS
      return;
    }
    // delete dragableId from columna source.droppableId
    // add dragableId in column source.droppableId
    let newData = { ...data };
    let column = newData.columns.find((column: IColumn) => destination.droppableId === column.id)
    let newCardsIds = column?.cardsIds;
    newCardsIds?.splice(source.index, 1)
    newCardsIds?.splice(destination.index, 0, draggableId)
    const newColumn: any = {
      ...column,
      cardsIds: newCardsIds || []
    }
    const indexOfColumn = newData.columns.findIndex((column) => column.id === destination.droppableId);
    newData.columns.splice(indexOfColumn, 1, newColumn)
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