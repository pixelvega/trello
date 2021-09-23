export interface InitialData {
  board: IBoard
  cards: ICard[]
  columns: IColumn[]
}

export interface IBoard {
  id: string
  name: string
}

export interface ICard {
  id: string
  name: string
}

export interface IColumn {
  id: string
  cardsIds: string[]
  name: string
}