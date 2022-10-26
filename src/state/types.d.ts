interface Cell {
  id: string;
  type: CellTypes;
  content: string;
}

type CellTypes = 'code' | 'text';

type Direction = 'up' | 'down';
