export type Player = 'X' | 'O';
export type Cell = Player | null;

export type Scores = {
  X: number;
  O: number;
  Draws: number;
};