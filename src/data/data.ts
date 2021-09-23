import { InitialData } from "./typing";

export const initialData: InitialData = {
  board: {
    id: 'board-1',
    name: 'ROADMAP'
  },
  cards: [
    {
      id: 'card-0',
      name: 'FEAT 0',
    },
    {
      id: 'card-1',
      name: 'FEAT 1',
    },
    {
      id: 'card-2',
      name: 'FEAT 2',
    },
    {
      id: 'card-3',
      name: 'FEAT 3',
    },
    {
      id: 'card-4',
      name: 'FEAT 4',
    },
    {
      id: 'card-5',
      name: 'FEAT 5',
    },
  ],
  columns: [
    {
      id: 'column-0',
      cardsIds: ['card-0', 'card-1'],
      name: 'TO DO',
    },
    {
      id: 'column-1',
      cardsIds: ['card-2', 'card-3'],
      name: 'IN PROGRESS',
    },
    {
      id: 'column-2',
      cardsIds: ['card-4', 'card-5'],
      name: 'DONE',
    }
  ]
}