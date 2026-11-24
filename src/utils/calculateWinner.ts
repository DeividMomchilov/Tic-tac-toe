import type { Cell, Player } from '../types';

type WinInfo = { player: Player; line: number[] };

export function calculateWinner(squares: Cell[]): WinInfo | null {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    const player = squares[a];
    if (player && player === squares[b] && player === squares[c]) {
      return { player, line };
    }
  }
  return null;
}