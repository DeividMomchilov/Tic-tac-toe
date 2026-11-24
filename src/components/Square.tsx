import type { Cell } from '../types';

type SquareProps = {
  value: Cell;
  onClick: () => void;
  isWinningSquare: boolean;
  isDimmed: boolean;
};

export default function Square({ value, onClick, isWinningSquare, isDimmed }: SquareProps) {
  let squareClass = "square";
  
  if (value === 'X') squareClass += " x-mark";
  if (value === 'O') squareClass += " o-mark";
  if (isWinningSquare) squareClass += " winning-square";
  if (isDimmed) squareClass += " dim-square";

  return (
    <button className={squareClass} onClick={onClick}>
      {value}
    </button>
  );
}