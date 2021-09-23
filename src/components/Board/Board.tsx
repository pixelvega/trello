import Column from "../Column/Column";
import { initialData } from "../../data/data";
import { useState } from "react";
import { IColumn } from "../../data/typing";

const Board = () => {
  const [columns, setColumns] = useState<IColumn[]>(initialData.columns);
  return (
    <div className="board">
      <h1>{initialData.board.name}</h1>
      <div className="board-columns">
        {columns?.map((column: IColumn) => <Column column={column} />)}
      </div>
    </div>
  )
}

export default Board;